create table if not exists public.placar (
  id bigint generated always as identity primary key,
  criado_em timestamptz not null default now(),
  jogador text not null check (char_length(jogador) between 2 and 24),
  escopo text not null check (char_length(escopo) between 2 and 24),
  pontos int not null check (pontos between 0 and 1000000),
  acertos int not null check (acertos between 0 and 5000),
  total int not null check (total between 1 and 5000),
  tempo_medio_ms int not null check (tempo_medio_ms between 0 and 120000),
  melhor_combo int not null default 0 check (melhor_combo between 0 and 5000),
  versao text
);

create index if not exists placar_escopo_pontos_idx on public.placar (escopo, pontos desc);

create table if not exists public.respostas (
  id bigint generated always as identity primary key,
  criado_em timestamptz not null default now(),
  pergunta_id text not null check (char_length(pergunta_id) <= 60),
  acertou boolean not null,
  tempo_ms int not null check (tempo_ms between 0 and 120000),
  versao text
);

create index if not exists respostas_pergunta_idx on public.respostas (pergunta_id);

alter table public.placar enable row level security;
alter table public.respostas enable row level security;

drop policy if exists "placar_ler" on public.placar;
drop policy if exists "placar_inserir" on public.placar;
drop policy if exists "respostas_inserir" on public.respostas;

create policy "placar_ler" on public.placar for select to anon using (true);
create policy "placar_inserir" on public.placar for insert to anon with check (true);
create policy "respostas_inserir" on public.respostas for insert to anon with check (true);

create or replace view public.dificuldade_perguntas as
select
  pergunta_id,
  count(*) as respostas,
  round(100.0 * avg(case when acertou then 1 else 0 end), 1) as pct_acerto,
  round(avg(tempo_ms) / 1000.0, 1) as tempo_medio_s
from public.respostas
group by pergunta_id
order by pct_acerto asc;

alter view public.dificuldade_perguntas set (security_invoker = true);
