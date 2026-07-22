"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { Stone, stones, whatsAppUrl } from "./site-data";

const nav = [
  ["Início", "/"],
  ["Pedras", "/pedras"],
  ["Ambientes", "/ambientes"],
  ["Projetos", "/projetos"],
  ["A Deck", "/a-deck"],
  ["Contato", "/contato"],
];

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Deck Mármores e Granitos — início">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/deck-logo-40-anos.png" alt="Deck 40 anos" />
    </Link>
  );
}

export function Header({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header ${solid ? "is-solid" : ""}`}>
      <Brand />
      <nav className={open ? "nav-open" : ""} aria-label="Navegação principal">
        {nav.map(([label, href]) => (
          <Link href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link className="nav-mobile-cta" href="/contato" onClick={() => setOpen(false)}>
          Solicitar orçamento
        </Link>
      </nav>
      <Link className="header-cta" href="/contato">
        Solicitar orçamento <span>↗</span>
      </Link>
      <button
        className={`menu-button ${open ? "open" : ""}`}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main shell">
        <div className="footer-intro">
          <Brand />
          <p>Há 40 anos transformando matéria-prima natural em espaços que permanecem.</p>
        </div>
        <div>
          <small>Explore</small>
          <Link href="/pedras">Acervo mineral</Link>
          <Link href="/ambientes">Ambientes</Link>
          <Link href="/projetos">Projetos realizados</Link>
          <Link href="/a-deck">Nossa história</Link>
          <Link href="/perguntas">Dúvidas frequentes</Link>
        </div>
        <div>
          <small>Atendimento</small>
          <a href="tel:+5582996152694">(82) 99615-2694</a>
          <a href="mailto:deck@deckmarmores.com.br">deck@deckmarmores.com.br</a>
          <a href="https://www.instagram.com/deckmarmoresegranitos/" target="_blank" rel="noreferrer">
            @deckmarmoresegranitos
          </a>
        </div>
        <div>
          <small>Seu projeto começa aqui</small>
          <Link className="footer-action" href="/contato">
            Falar com um especialista <span>↗</span>
          </Link>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>© 2026 Deck Mármores e Granitos</span>
        <span>Desde 1986 • Maceió, Alagoas</span>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href={whatsAppUrl} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp">
      <span className="whatsapp-copy"><small>Atendimento Deck</small><strong>Fale com um especialista</strong></span>
      <span className="whatsapp-icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" role="img"><path fill="currentColor" d="M27.3 4.7A15.8 15.8 0 0 0 2.4 23.8L.2 31.9l8.3-2.2a15.8 15.8 0 0 0 7.5 1.9h.1A15.9 15.9 0 0 0 27.3 4.7Zm-11.2 24.2a13 13 0 0 1-6.6-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5a13.1 13.1 0 1 1 11 6.1Zm7.2-9.8c-.4-.2-2.3-1.2-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.3-.5.3-.9.1-2.4-1.2-4-2.2-5.6-4.9-.4-.7.4-.7 1.2-2.2.1-.3.1-.5 0-.7l-1.2-2.9c-.3-.7-.7-.6-.9-.6h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 3.9 1.7 4.2c.2.3 2.9 4.4 7 6.2 2.6 1.1 3.7 1.2 5 1 .8-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5Z"/></svg>
      </span>
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  image: string;
}) {
  return (
    <section className="page-hero" style={{ "--hero-image": `url(${image})` } as React.CSSProperties}>
      <Header />
      <div className="page-hero-shade" />
      <div className="page-hero-content shell">
        <p className="eyebrow"><span />{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-copy">{text}</p>
      </div>
      <div className="page-hero-index">DECK / 40</div>
    </section>
  );
}

export function StoneCard({ stone, large = false, onSelect }: { stone: Stone; large?: boolean; onSelect?: (stone: Stone) => void }) {
  const content = (
    <>
      <div className="stone-card-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={stone.image} alt={`Chapa da pedra ${stone.name}`} loading="lazy" decoding="async" />
        <div className="stone-card-hover">
          <span>Conhecer a história</span>
          <b>↗</b>
        </div>
      </div>
      <div className="stone-card-info">
        <div>
          <small>{stone.category}</small>
          <h3>{stone.name}</h3>
        </div>
        <span>{stone.origin}</span>
      </div>
    </>
  );

  if (onSelect) {
    return (
      <button className={`stone-card ${large ? "stone-card-large" : ""}`} type="button" onClick={() => onSelect(stone)} aria-haspopup="dialog">
        {content}
      </button>
    );
  }

  return <Link className={`stone-card ${large ? "stone-card-large" : ""}`} href={`/pedras/${stone.slug}`}>{content}</Link>;
}

export function StoneExplorer() {
  const categories = ["Todos", ...Array.from(new Set(stones.map((stone) => stone.category)))];
  const [category, setCategory] = useState("Todos");
  const [selectedStone, setSelectedStone] = useState<Stone | null>(null);
  const visible = useMemo(
    () => (category === "Todos" ? stones : stones.filter((stone) => stone.category === category)),
    [category],
  );

  useEffect(() => {
    if (!selectedStone) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedStone(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedStone]);

  return (
    <>
      <div className="filter-row" role="group" aria-label="Filtrar pedras por categoria">
        {categories.map((item) => (
          <button key={item} className={item === category ? "active" : ""} onClick={() => setCategory(item)}>
            {item}<sup>{item === "Todos" ? stones.length : stones.filter((stone) => stone.category === item).length}</sup>
          </button>
        ))}
      </div>
      <div className="stone-grid">
        {visible.map((stone) => <StoneCard stone={stone} onSelect={setSelectedStone} key={stone.slug} />)}
      </div>
      {selectedStone && (
        <div className="stone-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setSelectedStone(null)}>
          <section className="stone-modal" role="dialog" aria-modal="true" aria-labelledby="stone-modal-title">
            <button className="stone-modal-close" type="button" onClick={() => setSelectedStone(null)} aria-label="Fechar detalhes da pedra">×</button>
            <div className="stone-modal-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedStone.image} alt={`Chapa da pedra ${selectedStone.name}`} />
              <span>Imagem da chapa • cada lote apresenta variações naturais</span>
            </div>
            <div className="stone-modal-copy">
              <p className="eyebrow"><span />{selectedStone.category} • {selectedStone.origin}</p>
              <h2 id="stone-modal-title">{selectedStone.name}</h2>
              <strong>{selectedStone.mood}</strong>
              <div className="stone-story-label">A história desta pedra</div>
              <p className="stone-modal-story">{selectedStone.story}</p>
              <div className="stone-modal-applications">
                <small>Onde ela pode ganhar vida</small>
                <div>{selectedStone.applications.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
              <div className="stone-modal-actions">
                <Link className="button button-gold" href={`/contato?pedra=${selectedStone.slug}`}>Quero esta pedra no meu projeto <span>↗</span></Link>
                <Link className="stone-modal-detail-link" href={`/pedras/${selectedStone.slug}`}>Abrir página completa</Link>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

const ambientOptions = [
  {
    label: "Cozinhas",
    stone: "Ônix translúcido",
    image: "/images/deck-hero-cinematic.png",
    text: "Ilhas, bancadas e painéis que transformam a rotina em experiência.",
  },
  {
    label: "Living",
    stone: "Quartzito verde",
    image: "/images/deck-ambiente-greenstar.png",
    text: "Grandes superfícies minerais criam presença sem perder acolhimento.",
  },
  {
    label: "Banhos",
    stone: "Mármores claros",
    image: "/images/deck-collection-gallery.png",
    text: "Textura, luz e continuidade para uma atmosfera silenciosa e sofisticada.",
  },
  {
    label: "Gourmet",
    stone: "Granitos e quartzitos",
    image: "/images/deck-hero-cinematic.png",
    text: "Resistência para receber bem, com acabamento que valoriza cada encontro.",
  },
];

export function EnvironmentSwitcher() {
  const [active, setActive] = useState(0);
  const item = ambientOptions[active];
  return (
    <div className="environment-switcher">
      <div className="environment-stage">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img key={item.image} src={item.image} alt={`Ambiente com ${item.stone}`} />
        <div className="environment-caption">
          <small>Material em cena</small>
          <strong>{item.stone}</strong>
          <p>{item.text}</p>
        </div>
      </div>
      <div className="environment-tabs" role="tablist" aria-label="Escolha um ambiente">
        {ambientOptions.map((option, index) => (
          <button key={option.label} className={index === active ? "active" : ""} onClick={() => setActive(index)}>
            <span>0{index + 1}</span>{option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function FAQList() {
  const items = [
    ["Como escolher a pedra ideal para o meu projeto?", "A escolha considera estética, uso, incidência de calor, umidade, manutenção e orçamento. Nossa equipe analisa o projeto e apresenta as opções mais adequadas para cada aplicação."],
    ["A Deck atende arquitetos e designers?", "Sim. Acompanhamos a especificação desde a seleção da chapa até os detalhes de paginação, recortes, bordas e instalação."],
    ["Vocês fazem medição e instalação?", "Sim. O atendimento pode incluir levantamento de medidas, produção sob medida, conferência técnica, transporte e instalação."],
    ["Pedra natural é sempre uma peça única?", "Sim. Veios, tonalidades e desenhos variam de uma chapa para outra. Essa singularidade é justamente o que torna cada projeto exclusivo."],
    ["Posso escolher a chapa pessoalmente?", "Sim. Recomendamos a visita para conhecer o material em escala real, comparar movimentos e definir a chapa que melhor conversa com o projeto."],
    ["A Deck trabalha apenas com pedras naturais?", "Trabalhamos com mármores, granitos, quartzitos, cristais, ônix e limestone, além de superfícies de quartzo e ultracompactos."],
  ];
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map(([question, answer], index) => (
        <div className={`faq-item ${open === index ? "open" : ""}`} key={question}>
          <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
            <span>0{index + 1}</span><strong>{question}</strong><b>{open === index ? "−" : "+"}</b>
          </button>
          <div><p>{answer}</p></div>
        </div>
      ))}
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const type = form.get("type");
    const message = form.get("message");
    const url = `https://wa.me/5582996152694?text=${encodeURIComponent(`Olá, sou ${name}. Quero conversar sobre um projeto de ${type}. ${message}`)}`;
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <label><span>Seu nome</span><input name="name" placeholder="Como podemos chamar você?" required /></label>
      <label><span>WhatsApp</span><input name="phone" type="tel" placeholder="(82) 00000-0000" required /></label>
      <label><span>Tipo de projeto</span><select name="type" defaultValue=""><option value="" disabled>Selecione</option><option>Cozinha</option><option>Banheiro</option><option>Área gourmet</option><option>Projeto completo</option><option>Projeto comercial</option><option>Outro ambiente</option></select></label>
      <label><span>Conte um pouco</span><textarea name="message" rows={4} placeholder="Se já tiver medidas, material em mente ou prazo, conte aqui." /></label>
      <button className="button button-gold" type="submit">Enviar projeto pelo WhatsApp <span>↗</span></button>
      {sent && <p className="form-note">Abrimos seu WhatsApp com as informações preenchidas.</p>}
    </form>
  );
}
