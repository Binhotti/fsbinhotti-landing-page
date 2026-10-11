import Image from "next/image";
import CarouselVertical from "@/components/ui/carousel-03";

const whatsapp = "https://wa.me/5547991158062?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20terraplanagem.";
const instagram = "https://www.instagram.com/fsbinhotti/";

const projects = [
  { src: "/images/obra-terreno-residencial-premium.webp", category: "TERRAPLANAGEM / 01", title: "Preparação de terreno" },
  { src: "/images/obra-escavacao-premium.webp", category: "ESCAVAÇÃO / 02", title: "Escavação e remoção" },
  { src: "/images/obra-urbana-premium.webp", category: "TRANSPORTE / 03", title: "Limpeza" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {diagonal ? <path d="M5 19 19 5M8 5h11v11" /> : <path d="M4 12h16m-6-6 6 6-6 6" />}
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="whatsapp-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.4 11.7a8.4 8.4 0 0 1-12.2 7.4L3.5 20.5l1.5-4.5a8.4 8.4 0 1 1 15.4-4.3Z" />
      <path d="M8.4 8.1c.3-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.7c.5 1 1.3 1.9 2.4 2.5l.8-.6c.2-.2.4-.2.7-.1l1.8.9c.3.1.4.3.4.5v.5c0 .4-.2.6-.6.9-.5.4-1.2.5-1.8.3a8.2 8.2 0 0 1-5.7-5.6c-.2-.7-.1-1.4.1-1.9Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="FS Binhotti, voltar ao início">
          <Image src="/images/logo-premium.webp" alt="" width={58} height={58} priority />
          <span>FS <strong>BINHOTTI</strong><small>TRANSPORTE & TERRAPLANAGEM</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
        </nav>
        <a className="header-contact" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Fale com a gente pelo WhatsApp"><span className="header-contact-label">Fale com a gente</span><span className="header-contact-icon"><Arrow diagonal /></span></a>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-image" role="img" aria-label="Imagem editorial de caminhões e escavadeira baseada em registro de obra da FS Binhotti" />
        <div className="hero-shade" />
        <div className="hero-content page-width">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> FS BINHOTTI · TRANSPORTE E TERRAPLANAGEM</p>
          <h1 id="hero-title">A base certa para<br /><em>o que vem pela frente.</em></h1>
          <p className="hero-copy">Terraplanagem, escavação e transporte com a força de quem faz acontecer no campo.</p>
          <div className="hero-actions">
            <a className="button button-light" href={whatsapp} target="_blank" rel="noopener noreferrer"><span className="button-label">Solicitar orçamento</span><span className="button-icon"><Arrow diagonal /></span></a>
            <a className="text-link text-link-light" href="#projetos">Explorar projetos <span className="text-link-icon"><Arrow /></span></a>
          </div>
        </div>
        <div className="hero-bottom page-width"><span>DO PRIMEIRO CORTE À BASE PRONTA</span><span>ROLE PARA EXPLORAR ↓</span></div>
      </section>

      <section className="intro page-width" id="sobre">
        <div className="section-index"><span>01 / SOBRE NÓS</span><span className="small-line" /></div>
        <div className="intro-main">
          <h2>Grandes projetos<br />começam <em>pelo chão.</em></h2>
          <div className="intro-aside"><p>É na preparação do terreno que cada obra ganha direção. A FS Binhotti atua com transporte e terraplanagem para deixar o caminho pronto para a próxima etapa.</p><a className="text-link" href="#servicos">Conheça nossa atuação <Arrow /></a></div>
        </div>
      </section>

      <section className="statement" aria-label="Nosso trabalho">
        <div className="statement-image" />
        <div className="statement-content"><span className="eyebrow">PRESENÇA EM CADA ETAPA</span><p>Do terreno bruto ao espaço pronto para construir.</p><span className="statement-rule" /></div>
      </section>

      <section className="services page-width" id="servicos">
        <div className="section-index"><span>02 / O QUE FAZEMOS</span><span className="small-line" /></div>
        <div className="section-heading"><h2>Soluções que<br /><em>movem sua obra.</em></h2><p>Equipamentos e trabalho em campo para preparar, escavar e transportar.</p></div>
        <div className="service-list">
          <article className="service-row"><span className="service-number">01</span><div><h3>Terraplanagem</h3><p>Preparação e conformação do terreno para receber a próxima fase do projeto.</p></div><span className="service-arrow">↗</span></article>
          <article className="service-row"><span className="service-number">02</span><div><h3>Escavação</h3><p>Movimentação de solo para atender às necessidades de cada obra.</p></div><span className="service-arrow">↗</span></article>
          <article className="service-row"><span className="service-number">03</span><div><h3>Limpeza</h3><p>Retirada e movimentação de terra e materiais com caminhões de obra.</p></div><span className="service-arrow">↗</span></article>
        </div>
      </section>

      <section className="projects" id="projetos">
        <div className="page-width">
          <div className="section-index"><span>03 / EM CAMPO</span><span className="small-line" /></div>
          <div className="section-heading projects-heading"><h2>Trabalho que<br /><em>ganha forma.</em></h2><p>Registros reais de operações, máquinas e terrenos em transformação.</p></div>
        </div>
        <CarouselVertical slides={projects} />
        <div className="page-width"><a className="all-projects" href={instagram} target="_blank" rel="noopener noreferrer"><span>Acompanhe mais obras no Instagram</span><span className="instagram-icon" aria-hidden="true" /></a></div>
      </section>

      <section className="contact" id="contato"><div className="page-width contact-inner"><div><span className="eyebrow">VAMOS TIRAR DO PAPEL?</span><h2>Seu próximo projeto<br /><em>começa aqui.</em></h2></div><div className="contact-right"><p>Conte sobre sua obra. Vamos conversar sobre o que você precisa para começar.</p><a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /><span className="button-label">Conversar no WhatsApp</span><span className="button-icon"><Arrow diagonal /></span></a><a className="phone-link" href="tel:+5547991158062">(47) 99115-8062</a></div></div></section>

      <footer className="footer"><div className="page-width footer-main"><div className="footer-brand"><Image src="/images/logo-premium.webp" alt="Logo FS Binhotti" width={80} height={80} /><p>FS BINHOTTI<br /><span>TRANSPORTE E TERRAPLANAGEM</span></p></div><div className="footer-links"><a href="#inicio">Voltar ao topo ↑</a><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></div></div><div className="page-width footer-bottom"><span>© {new Date().getFullYear()} FS Binhotti. Todos os direitos reservados.</span><span>FEITO PARA IR MAIS LONGE.</span></div></footer>
    </main>
  );
}
