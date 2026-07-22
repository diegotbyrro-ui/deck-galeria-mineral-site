import type { Metadata } from "next";
import Link from "next/link";
import { Footer, PageHero, WhatsAppFloat } from "../components";

export const metadata: Metadata = { title: "40 anos de história" };

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="Desde 1986" title={<>Quatro décadas.<br />Uma mesma <em>precisão.</em></>} text="Pioneirismo, tecnologia e respeito pela matéria para transformar projetos em histórias duradouras." image="/images/deck-collection-gallery.png" />
      <section className="about-opening section-cream"><div className="shell"><div className="big-forty">40<span>anos</span></div><div><p className="eyebrow dark"><span />Nossa história</p><h2>Experiência não é olhar para trás.<br />É saber <em>o que importa.</em></h2><p>A Deck nasceu em 1986, entre as pioneiras na venda de pedras decorativas em Alagoas. Em 1992, ampliou sua atuação para mármores e granitos nacionais e importados. Desde 2006, também atua na exploração de rochas ornamentais.</p><p>Hoje, combinamos repertório, mão de obra especializada e tecnologia para atender projetos residenciais e comerciais com qualidade, eficiência e responsabilidade.</p></div></div></section>
      <section className="timeline section-dark"><div className="shell"><p className="eyebrow"><span />Marcos da jornada</p><div className="timeline-grid">{[["1986", "O início", "A Deck começa sua história e se torna pioneira em pedras decorativas em Alagoas."],["1992", "Novos horizontes", "Mármores e granitos nacionais e importados passam a fazer parte do acervo."],["2006", "Da origem ao projeto", "A empresa inicia a exploração de rochas ornamentais, ampliando seu domínio sobre a matéria."],["2026", "40 anos", "Um novo capítulo de marca, experiência e precisão começa agora."]].map(([year,title,copy]) => <article key={year}><b>{year}</b><span /><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
      <section className="values section-cream"><div className="shell"><div className="section-head"><div><p className="eyebrow dark"><span />O que nos guia</p><h2>Presença em cada etapa.<br />Respeito em cada <em>escolha.</em></h2></div></div><div className="values-grid">{[["01", "Curadoria", "A pedra certa não é apenas bonita: ela precisa servir ao uso, à arquitetura e ao desejo."],["02", "Precisão", "Medir, cortar, encontrar veios e finalizar bordas com rigor técnico e atenção humana."],["03", "Responsabilidade", "Cuidar da origem, das relações e do impacto de cada decisão ao longo do processo."],["04", "Parceria", "Clientes, arquitetos, colaboradores e fornecedores construindo resultados que permanecem."]].map(([n,title,copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
      <section className="about-cta"><div className="shell"><p>Venha sentir a escala, a textura e o movimento das pedras.</p><h2>Conheça a Deck<br /><em>de perto.</em></h2><Link className="button button-gold" href="/contato">Agendar atendimento <span>↗</span></Link></div></section>
      <Footer /><WhatsAppFloat />
    </main>
  );
}
