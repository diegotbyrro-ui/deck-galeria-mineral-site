import type { Metadata } from "next";
import { ContactForm, Footer, Header, WhatsAppFloat } from "../components";

export const metadata: Metadata = { title: "Comece seu projeto" };

export default function ContactPage() {
  return (
    <main>
      <Header solid />
      <section className="contact-page section-dark"><div className="shell contact-layout"><div className="contact-copy"><p className="eyebrow"><span />Vamos conversar</p><h1>Seu projeto começa<br />com uma <em>boa escolha.</em></h1><p>Envie as primeiras informações. Nossa equipe ajuda a definir material, aplicação, acabamento e próximos passos.</p><div className="contact-cards"><a href="https://wa.me/5582996152694" target="_blank" rel="noreferrer"><small>WhatsApp</small><strong>(82) 99615-2694</strong><span>↗</span></a><a href="mailto:deck@deckmarmores.com.br"><small>E-mail</small><strong>deck@deckmarmores.com.br</strong><span>↗</span></a><div><small>Atendimento</small><strong>Maceió • Alagoas</strong><span>Segunda a sexta</span></div></div></div><div className="contact-panel"><div className="contact-panel-head"><span>01 / SEU PROJETO</span><p>Quanto mais detalhes você enviar, mais precisa será nossa primeira orientação.</p></div><ContactForm /></div></div></section>
      <section className="contact-visit section-cream"><div className="shell"><p className="eyebrow dark"><span />Visite a Deck</p><h2>Pedra natural precisa ser<br /><em>vista de perto.</em></h2><p>Agende um horário para comparar chapas, perceber texturas e receber uma curadoria para o seu projeto.</p><a className="button button-dark" href="https://wa.me/5582996152694" target="_blank" rel="noreferrer">Agendar visita <span>↗</span></a></div></section>
      <Footer /><WhatsAppFloat />
    </main>
  );
}
