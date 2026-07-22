import type { Metadata } from "next";
import Link from "next/link";
import { EnvironmentSwitcher, Footer, PageHero, WhatsAppFloat } from "../components";
import { projectImages } from "../site-data";

export const metadata: Metadata = { title: "Ambientes e inspirações" };

export default function AmbientesPage() {
  const spaces = [
    ["Cozinhas", "O centro da casa ganha força quando a superfície une beleza, resistência e continuidade."],
    ["Banheiros", "Planos minerais transformam a rotina em pausa, textura e bem-estar."],
    ["Living", "Painéis, mesas e volumes que criam identidade e organizam o olhar."],
    ["Área gourmet", "Materiais preparados para receber, celebrar e permanecer."],
  ];
  return (
    <main>
      <PageHero eyebrow="Arquitetura sensorial" title={<>A pedra muda o espaço.<br />E o espaço muda <em>você.</em></>} text="Inspire-se em ambientes onde textura, luz e arquitetura trabalham como uma só composição." image="/images/deck-ambiente-greenstar.png" />
      <section className="ambient-experience section-dark"><div className="shell"><div className="section-head light"><div><p className="eyebrow"><span />Explore aplicações</p><h2>Uma matéria.<br />Muitas atmosferas.</h2></div><div><p>Alterne entre os ambientes e perceba como escolha, escala e iluminação definem a experiência.</p></div></div><EnvironmentSwitcher /></div></section>
      <section className="space-manifesto section-cream"><div className="shell space-list">{spaces.map(([name, copy], index) => <article key={name}><span>0{index + 1}</span><h2>{name}</h2><p>{copy}</p><Link href="/contato">Planejar este ambiente ↗</Link></article>)}</div></section>
      <section className="ambient-mosaic section-dark"><div className="shell"><div className="section-head light"><div><p className="eyebrow"><span />Referências reais</p><h2>Detalhes que<br />mudam o todo.</h2></div></div><div className="mosaic-grid">{projectImages.slice(2, 10).map((image, index) => <figure key={`${image}-${index}`}><img src={image} alt={`Aplicação de pedra natural em ambiente ${index + 1}`} /><figcaption>DECK / 0{index + 1}</figcaption></figure>)}</div></div></section>
      <Footer /><WhatsAppFloat />
    </main>
  );
}
