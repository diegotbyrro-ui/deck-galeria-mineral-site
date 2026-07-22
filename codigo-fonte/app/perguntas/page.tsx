import type { Metadata } from "next";
import { FAQList, Footer, PageHero, WhatsAppFloat } from "../components";

export const metadata: Metadata = { title: "Perguntas frequentes" };

export default function FAQPage() {
  return (
    <main>
      <PageHero eyebrow="Antes de escolher" title={<>Boas escolhas começam<br />com as perguntas <em>certas.</em></>} text="Reunimos respostas para ajudar você a entender materiais, processo, atendimento e instalação." image="/images/deck-hero-cinematic.png" />
      <section className="faq-section section-cream"><div className="shell faq-layout"><div><p className="eyebrow dark"><span />Perguntas frequentes</p><h2>Da primeira ideia<br />à última peça.</h2><p>Se a sua dúvida não estiver aqui, fale diretamente com nossa equipe.</p><a href="/contato" className="text-link dark">Enviar uma pergunta ↗</a></div><FAQList /></div></section>
      <Footer /><WhatsAppFloat />
    </main>
  );
}
