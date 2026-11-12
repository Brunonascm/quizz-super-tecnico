# -*- coding: utf-8 -*-
"""Converte perguntas/perguntas.xlsx em js/questions.js (usado pelo quiz).

Uso: dar dois cliques em ATUALIZAR_PERGUNTAS.bat (ou: python converter.py)
"""
import datetime
import hashlib
import json
import os
import re
import shutil
import sys
import unicodedata

try:
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")
except Exception:
    pass

try:
    import openpyxl
except ImportError:
    print("ERRO: falta o pacote 'openpyxl'. Instale com:  python -m pip install openpyxl")
    sys.exit(2)

PASTA = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.dirname(PASTA)
XLSX = sys.argv[1] if len(sys.argv) > 1 else os.path.join(PASTA, "perguntas.xlsx")
SAIDA = sys.argv[2] if len(sys.argv) > 2 else os.path.join(RAIZ, "js", "questions.js")
BACKUPS = os.path.join(PASTA, "backups")
PERGUNTAS_POR_RODADA = 10

MODULOS = [
    ("geral", "Implantação e Config.", "Implantação e Configuração Geral", "🛠️", "#00e5ff"),
    ("fiscal", "Escrita Fiscal", "Escrita Fiscal", "🧾", "#ffb300"),
    ("folha", "Folha e eSocial", "Folha de Pagamento e eSocial", "👥", "#ff3b6b"),
    ("contabilidade", "Contabilidade", "Contabilidade", "📒", "#22d37a"),
    ("lalur", "Lalur e ECF", "Lalur, Lucro Real e ECF", "🏛️", "#b36bff"),
    ("patrimonio", "Patrimônio", "Patrimônio", "🏭", "#ff7a45"),
    ("honorarios", "Honorários", "Honorários e Gestão do Escritório", "💼", "#2d9cff"),
    ("onvio", "Onvio", "Onvio — Portais, Messenger e Processos", "☁️", "#7cf3ff"),
    ("busca", "Busca NF-e e Box-e", "Busca NF-e e Box-e", "📥", "#ff2bd6"),
]

NIVEIS = {"facil": 1, "medio": 2, "dificil": 3, "1": 1, "2": 2, "3": 3}
COLUNAS = {
    "id": "id",
    "ativa": "ativa",
    "modulo": "modulo",
    "nivel": "nivel",
    "pergunta": "pergunta",
    "resposta certa": "certa",
    "errada 1": "e1",
    "errada 2": "e2",
    "errada 3": "e3",
    "explicacao": "explicacao",
    "caminho no sistema": "caminho",
    "fonte": "fonte",
}


def norm(s):
    s = unicodedata.normalize("NFD", str(s))
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"\s+", " ", s).strip().lower()


def txt(v):
    if v is None:
        return ""
    if isinstance(v, float) and v.is_integer():
        v = int(v)
    return re.sub(r"[ \t]+", " ", str(v).replace("\r", "")).strip()


MAPA_MODULO = {}
for _id, _nome, _longo, _i, _c in MODULOS:
    for chave in (_id, _nome, _longo):
        MAPA_MODULO[norm(chave)] = _id


def main():
    if not os.path.exists(XLSX):
        print("ERRO: não encontrei o arquivo " + XLSX)
        return 1

    try:
        wb = openpyxl.load_workbook(XLSX)
    except PermissionError:
        print("ERRO: não consegui abrir perguntas.xlsx. Feche o arquivo no Excel e tente de novo.")
        return 1
    if "Perguntas" not in wb.sheetnames:
        print("ERRO: a planilha precisa ter uma aba chamada 'Perguntas'.")
        return 1
    ws = wb["Perguntas"]

    cab = {}
    for c in range(1, ws.max_column + 1):
        nome = norm(ws.cell(1, c).value or "")
        if nome in COLUNAS:
            cab[COLUNAS[nome]] = c
    faltam = [k for k in COLUNAS.values() if k not in cab]
    if faltam:
        print("ERRO: faltam colunas na linha 1 da aba Perguntas: " + ", ".join(faltam))
        return 1

    erros, avisos, linhas = [], [], []
    for r in range(2, ws.max_row + 1):
        v = {k: txt(ws.cell(r, c).value) for k, c in cab.items()}
        if not any(v.values()):
            continue
        linhas.append((r, v))

    ids_usados = {}
    for r, v in linhas:
        if v["id"]:
            chave = v["id"].lower()
            if chave in ids_usados:
                erros.append((r, "ID repetido: %s (também na linha %d)" % (v["id"], ids_usados[chave])))
            else:
                ids_usados[chave] = r
            if not re.fullmatch(r"[A-Za-z0-9_-]{2,40}", v["id"]):
                erros.append((r, "ID inválido '%s' (use só letras, números e hífen)" % v["id"]))

    contador = {}
    for chave in ids_usados:
        m = re.fullmatch(r"([a-z]+)-(\d+)", chave)
        if m:
            contador[m.group(1)] = max(contador.get(m.group(1), 0), int(m.group(2)))

    perguntas, novos_ids, vistos_texto = [], 0, {}
    for r, v in linhas:
        ativa = norm(v["ativa"]) not in ("nao", "n", "0", "false", "inativa", "inativo", "apagada")
        mod = MAPA_MODULO.get(norm(v["modulo"]))
        if not mod:
            erros.append((r, "Módulo inválido: '%s'. Escolha um da lista." % v["modulo"]))
        nivel = NIVEIS.get(norm(v["nivel"]))
        if not nivel:
            erros.append((r, "Nível inválido: '%s'. Use Fácil, Médio ou Difícil." % v["nivel"]))

        if not ativa:
            continue

        for chave, rotulo in (("pergunta", "Pergunta"), ("certa", "Resposta certa"), ("e1", "Errada 1"),
                              ("e2", "Errada 2"), ("e3", "Errada 3"), ("explicacao", "Explicação")):
            if not v[chave]:
                erros.append((r, "Falta preencher: " + rotulo))
        if not v["fonte"]:
            avisos.append((r, "Sem fonte preenchida (recomendado informar a ficha do cérebro)"))

        opcoes = [v["certa"], v["e1"], v["e2"], v["e3"]]
        normalizadas = [norm(o) for o in opcoes if o]
        if len(set(normalizadas)) != len(normalizadas):
            erros.append((r, "Há alternativas repetidas"))

        if all(opcoes):
            maior_errada = max(len(v["e1"]), len(v["e2"]), len(v["e3"]))
            if len(v["certa"]) > maior_errada * 1.15 and len(v["certa"]) - maior_errada > 8:
                avisos.append((r, "A resposta certa é bem mais longa que as erradas (dá para acertar só pelo tamanho)"))
            if any(len(o) > 160 for o in opcoes):
                avisos.append((r, "Alternativa muito longa (mais de 160 caracteres)"))
        if len(v["pergunta"]) > 240:
            avisos.append((r, "Pergunta muito longa (mais de 240 caracteres)"))
        if len(v["explicacao"]) > 450:
            avisos.append((r, "Explicação muito longa (mais de 450 caracteres)"))

        if v["pergunta"]:
            ch = norm(v["pergunta"])
            if ch in vistos_texto:
                avisos.append((r, "Pergunta igual à da linha %d" % vistos_texto[ch]))
            else:
                vistos_texto[ch] = r

        if not v["id"] and mod:
            contador[mod] = contador.get(mod, 0) + 1
            v["id"] = "%s-%03d" % (mod, contador[mod])
            ws.cell(r, cab["id"]).value = v["id"]
            novos_ids += 1

        perguntas.append({
            "id": v["id"],
            "modulo": mod,
            "nivel": nivel,
            "pergunta": v["pergunta"],
            "certa": v["certa"],
            "erradas": [v["e1"], v["e2"], v["e3"]],
            "explicacao": v["explicacao"],
            "caminho": v["caminho"],
            "fonte": v["fonte"],
        })

    if erros:
        print("\nNÃO ATUALIZEI O QUIZ. Corrija os problemas abaixo na planilha e rode de novo:\n")
        for r, m in sorted(erros):
            print("  Linha %d: %s" % (r, m))
        return 1

    if novos_ids:
        try:
            wb.save(XLSX)
        except PermissionError:
            print("\nNÃO ATUALIZEI O QUIZ: há perguntas novas sem ID e não consegui gravar os IDs na planilha.")
            print("Feche o perguntas.xlsx no Excel e rode de novo.")
            return 1

    por_modulo = {m[0]: [] for m in MODULOS}
    for p in perguntas:
        por_modulo[p["modulo"]].append(p)

    ordenadas = []
    for m in MODULOS:
        ordenadas.extend(por_modulo[m[0]])

    conteudo = json.dumps(ordenadas, ensure_ascii=False, sort_keys=True)
    versao = "%s-%s" % (datetime.date.today().strftime("%Y.%m.%d"), hashlib.sha1(conteudo.encode("utf-8")).hexdigest()[:6])

    meta = {
        "versao": versao,
        "origem": "Cérebro Super Técnico v2 (8.369 treinamentos)",
        "modulos": [{"id": i, "nome": n, "longo": l, "icone": ic, "cor": c} for i, n, l, ic, c in MODULOS],
    }

    saida = (
        "// Arquivo gerado automaticamente por perguntas/converter.py a partir de perguntas/perguntas.xlsx.\n"
        "// Não edite à mão: altere a planilha e rode ATUALIZAR_PERGUNTAS.bat.\n"
        "window.QUIZ_META = " + json.dumps(meta, ensure_ascii=False, indent=2) + ";\n\n"
        "window.QUIZ_QUESTIONS = " + json.dumps(ordenadas, ensure_ascii=False, indent=2) + ";\n"
    )

    if os.path.exists(SAIDA):
        os.makedirs(BACKUPS, exist_ok=True)
        carimbo = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        shutil.copy2(SAIDA, os.path.join(BACKUPS, "questions_%s.js" % carimbo))
        antigos = sorted(f for f in os.listdir(BACKUPS) if f.startswith("questions_"))
        for f in antigos[:-10]:
            os.remove(os.path.join(BACKUPS, f))

    tmp = SAIDA + ".tmp"
    with open(tmp, "w", encoding="utf-8", newline="\n") as f:
        f.write(saida)
    os.replace(tmp, SAIDA)

    print("QUIZ ATUALIZADO  (versão %s)\n" % versao)
    print("  %-34s %6s %6s %6s %6s" % ("Módulo", "Total", "Fácil", "Médio", "Difíc."))
    for i, n, l, ic, c in MODULOS:
        lista = por_modulo[i]
        print("  %-34s %6d %6d %6d %6d" % (l[:34], len(lista),
              sum(1 for p in lista if p["nivel"] == 1), sum(1 for p in lista if p["nivel"] == 2),
              sum(1 for p in lista if p["nivel"] == 3)))
        if 0 < len(lista) < PERGUNTAS_POR_RODADA:
            avisos.append((0, "O módulo '%s' tem só %d perguntas ativas: a rodada terá menos de %d perguntas" % (n, len(lista), PERGUNTAS_POR_RODADA)))
        if not lista:
            avisos.append((0, "O módulo '%s' está sem perguntas ativas e não vai funcionar no jogo" % n))
    print("  %-34s %6d" % ("TOTAL", len(ordenadas)))
    if novos_ids:
        print("\n  %d pergunta(s) nova(s) receberam ID automático na planilha." % novos_ids)
    if avisos:
        print("\nAVISOS (o quiz foi atualizado, mas vale revisar):")
        for r, m in sorted(avisos):
            print("  " + ("Linha %d: " % r if r else "") + m)
    print("\nPronto. Abra o index.html para testar e depois publique os arquivos.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
