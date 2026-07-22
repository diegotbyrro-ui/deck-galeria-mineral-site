import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header, StoneCard, WhatsAppFloat } from "../../components";
import { stones } from "../../site-data";

export function generateStaticParams() {
  return stones.map((stone) => ({ slug: stone.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const stone = stones.find((item) => item.slug === slug);
  return stone ? { title: stone.name, description: stone.description } : { title: "Pedra não encontrada" };
}

export default async function StonePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stone = stones.find((item) => item.slug === slug);
  if (!stone) notFound();
  const related = stones.filter((item) => item.category === stone.category && item.slug !== stone.slug).slice(0, 3);

  return (
    <main>
      <Header solid />
      <section className="stone-detail section-dark">
        <div className="stone-detail-media"><img src={stone.image} alt={`Chapa da pedra ${stone.name}`} /><span>Imagem da chapa • variações naturais são esperadas</span></div>
        <div className="stone-detail-copy">
          <Link className="back-link" href="/pedras">← Voltar ao acervo</Link>
          <p className="eyebrow"><span />{stone.category} • {stone.origin}</p>
          <h1>{stone.name}</h1>
          <strong>{stone.mood}</strong>
          <p>{stone.story}</p>
          <div className="stone-applications"><small>Aplicações sugeridas</small>{stone.applications.map((item) => <span key={item}>{item}</span>)}</div>
          <Link className="button button-gold" href={`/contato?pedra=${stone.slug}`}>Quero esta pedra no meu projeto <span>↗</span></Link>
          <p className="natural-note">Por ser natural, cada chapa apresenta desenhos, tons e movimentos únicos.</p>
        </div>
      </section>
      {related.length > 0 && <section className="related-stones section-cream"><div className="shell"><div className="section-head"><div><p className="eyebrow dark"><span />Continue explorando</p><h2>Da mesma<br />família mineral.</h2></div></div><div className="stone-grid compact">{related.map((item) => <StoneCard stone={item} key={item.slug} />)}</div></div></section>}
      <Footer /><WhatsAppFloat />
    </main>
  );
}
