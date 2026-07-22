import type { Metadata } from "next";
import { Footer, PageHero, StoneExplorer, WhatsAppFloat } from "../components";

export const metadata: Metadata = { title: "Acervo de pedras" };

export default function PedrasPage() {
  return (
    <main>
      <PageHero
        eyebrow="Acervo mineral"
        title={<>Cada veio é um <em>gesto</em><br />da natureza.</>}
        text="Descubra pedras naturais e superfícies selecionadas para transformar função em presença." 
        image="/images/deck-collection-gallery.png"
      />
      <section className="catalog section-cream">
        <div className="shell">
          <div className="catalog-intro"><span>76 / MATERIAIS</span><h2>Escolha pelo que<br />você quer <em>sentir.</em></h2><p>Filtre por família e clique em uma pedra para conhecer sua história, personalidade, origem e possibilidades de aplicação.</p></div>
          <StoneExplorer />
        </div>
      </section>
      <section className="catalog-cta section-dark"><div className="shell"><p className="eyebrow"><span />Curadoria personalizada</p><h2>Gostou de uma pedra?<br />Veja a chapa <em>antes</em> de decidir.</h2><a className="button button-gold" href="/contato">Agendar uma visita <span>↗</span></a></div></section>
      <Footer /><WhatsAppFloat />
    </main>
  );
}
