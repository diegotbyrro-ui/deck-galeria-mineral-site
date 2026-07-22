import Link from "next/link";
import { EnvironmentSwitcher, Footer, Header, StoneCard, WhatsAppFloat } from "./components";
import { projectImages, stones, whatsAppUrl } from "./site-data";

export default function Home() {
  const featuredStones = ["quartzito-perla-santanna", "quartzito-emerald-green", "marmore-nero-marquina", "onix-branco-perola"]
    .map((slug) => stones.find((stone) => stone.slug === slug))
    .filter((stone): stone is (typeof stones)[number] => Boolean(stone));

  return (
    <main>
      <section className="home-hero">
        <Header />
        <div className="hero-media" />
        <div className="hero-grain" />
        <div className="hero-content shell">
          <div className="heritage-pill"><span className="seal-mini">40</span> 40 anos transformando pedra em presença</div>
          <h1>A natureza criou.<br />A Deck transforma<br />em <em>legado.</em></h1>
          <p>Rochas naturais selecionadas, tecnologia de precisão e acabamento impecável para projetos que não aceitam o comum.</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/pedras">Encontre a pedra do seu projeto <span>↗</span></Link>
            <a className="button button-ghost" href={whatsAppUrl} target="_blank" rel="noreferrer">Fale com um especialista</a>
          </div>
        </div>
        <div className="scroll-marker"><span /> Role para explorar</div>
        <div className="hero-number">1986—2026</div>
      </section>

      <section className="statement section-dark shell-wide">
        <div className="statement-index">01 / ESSÊNCIA</div>
        <p>Não vendemos apenas pedras.</p>
        <h2>Selecionamos a matéria que dará <em>identidade</em> ao seu espaço.</h2>
        <div className="statement-side">
          <span>Da origem ao acabamento</span>
          <p>Cada chapa é observada como uma composição única. Cor, movimento e aplicação precisam conversar com a arquitetura — e com quem vai viver nela.</p>
        </div>
      </section>

      <section className="collection-section section-cream">
        <div className="shell">
          <div className="section-head">
            <div><p className="eyebrow dark"><span />Curadoria mineral</p><h2>Pedras que não<br />se repetem.</h2></div>
            <div><p>Uma seleção de materiais naturais e superfícies de alta performance para cozinhas, banhos, áreas gourmet, fachadas e mobiliário.</p><Link href="/pedras">Explorar todo o acervo <span>↗</span></Link></div>
          </div>
          <div className="featured-stones">
            {featuredStones.map((stone, index) => <StoneCard stone={stone} large={index === 0 || index === 3} key={stone.slug} />)}
          </div>
        </div>
      </section>

      <section className="gallery-feature">
        <div className="gallery-feature-image" />
        <div className="gallery-feature-copy">
          <p className="eyebrow"><span />A experiência Deck</p>
          <h2>Escolher uma pedra é sentir sua presença.</h2>
          <p>Veja a escala, acompanhe o desenho dos veios e descubra como a luz transforma cada superfície. Nossa curadoria aproxima você da escolha certa.</p>
          <div className="gallery-stats"><div><b>40</b><span>anos de história</span></div><div><b>20</b><span>anos de exploração própria</span></div><div><b>01</b><span>pedra única para cada projeto</span></div></div>
          <Link className="text-link" href="/a-deck">Conheça nossa história <span>↗</span></Link>
        </div>
      </section>

      <section className="environments section-dark">
        <div className="shell">
          <div className="section-head light">
            <div><p className="eyebrow"><span />A matéria no espaço</p><h2>Imagine antes<br />de escolher.</h2></div>
            <div><p>Explore aplicações e perceba como cada pedra muda a atmosfera, o ritmo e a personalidade do ambiente.</p></div>
          </div>
          <EnvironmentSwitcher />
        </div>
      </section>

      <section className="process section-cream">
        <div className="shell">
          <div className="process-intro"><p className="eyebrow dark"><span />Do desenho à instalação</p><h2>Precisão em<br />cada encontro.</h2><p>Nosso trabalho começa ouvindo o projeto e só termina quando a última peça encontra seu lugar.</p></div>
          <div className="process-list">
            {[
              ["01", "Projeto e medidas", "Entendemos o espaço, a intenção estética e as exigências técnicas."],
              ["02", "Curadoria e orçamento", "Apresentamos materiais, paginação e soluções dentro do seu investimento."],
              ["03", "Produção de precisão", "Tecnologia e experiência humana cuidam de cada corte, veio, borda e recorte."],
              ["04", "Entrega e instalação", "Acompanhamento responsável para garantir acabamento e pontualidade."],
            ].map(([n, title, copy]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div><b>↗</b></article>)}
          </div>
        </div>
      </section>

      <section className="projects-preview section-dark">
        <div className="shell">
          <div className="section-head light"><div><p className="eyebrow"><span />Projetos reais</p><h2>Quando a pedra<br />encontra a ideia.</h2></div><div><Link href="/projetos">Ver galeria completa <span>↗</span></Link></div></div>
          <div className="project-strip">
            {projectImages.slice(0, 4).map((image, index) => <Link href="/projetos" key={`${image}-${index}`}><img src={image} alt={`Projeto Deck ${index + 1}`} /><span>0{index + 1}</span></Link>)}
          </div>
        </div>
      </section>

      <section className="testimonial section-cream">
        <div className="shell testimonial-grid">
          <div><p className="eyebrow dark"><span />O que permanece</p><div className="quote-mark">“</div></div>
          <blockquote>Da venda à instalação, tudo perfeito. O cuidado aparece em cada etapa e o resultado ficou impecável.</blockquote>
          <div className="testimonial-author"><strong>Rafaela Albuquerque</strong><span>Cliente Deck</span><div>★★★★★</div></div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-media" />
        <div className="shell final-cta-content"><p className="eyebrow"><span />Seu projeto merece presença</p><h2>Qual história a sua<br />pedra vai contar?</h2><p>Converse com nossa equipe e encontre o material que fará seu projeto ser lembrado.</p><Link className="button button-gold" href="/contato">Começar meu projeto <span>↗</span></Link></div>
      </section>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
