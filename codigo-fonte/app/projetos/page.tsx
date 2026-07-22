import type { Metadata } from "next";
import { Footer, PageHero, WhatsAppFloat } from "../components";
import { projectImages } from "../site-data";

export const metadata: Metadata = { title: "Projetos realizados" };

export default function ProjetosPage() {
  return (
    <main>
      <PageHero eyebrow="Portfólio Deck" title={<>Projetos feitos<br />para <em>permanecer.</em></>} text="Uma seleção de ambientes em que a execução respeita o desenho da pedra e a intenção da arquitetura." image="/images/deck-ambiente-greenstar.png" />
      <section className="projects-gallery section-cream"><div className="shell"><div className="catalog-intro"><span>01 / PROJETOS</span><h2>A técnica desaparece.<br />O resultado <em>fica.</em></h2><p>Observe encontros, continuidade dos veios, recortes e acabamentos. É nesses detalhes que um projeto passa de correto para memorável.</p></div><div className="portfolio-grid">{projectImages.map((image, index) => <figure key={`${image}-${index}`}><img src={image} alt={`Projeto realizado pela Deck ${index + 1}`} /><figcaption><span>Projeto 0{index + 1}</span><b>Residencial • Alagoas</b></figcaption></figure>)}</div></div></section>
      <section className="project-end section-dark"><div className="shell"><p>Seu projeto pode ser o próximo.</p><h2>Vamos transformar o desenho<br />em uma presença <em>real?</em></h2><a className="button button-gold" href="/contato">Conversar sobre meu projeto <span>↗</span></a></div></section>
      <Footer /><WhatsAppFloat />
    </main>
  );
}
