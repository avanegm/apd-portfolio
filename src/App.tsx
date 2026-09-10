import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import { useState } from "react";

const LINKS = {
  instagram: "https://instagram.com/",
  whatsapp: "https://wa.me/55SEUNUMERO",
  email: "mailto:SEUEMAIL@EXEMPLO.COM",
};

const projects = [
  {
    number: "01",
    title: "Isabella Reis Nails",
    category: "Landing page · Beauty",
    description: "Uma presença digital elegante para apresentar o trabalho, serviços e canais de agendamento de uma nail designer.",
    href: "https://isabella-reis-nails.vercel.app",
    tone: "project-pink",
    label: "ISABELLA REIS",
    sublabel: "NAILS",
  },
  {
    number: "02",
    title: "João Carlos Alves Advocacia",
    category: "Site institucional · Advocacia",
    description: "Uma experiência institucional pensada para transmitir confiança, autoridade e clareza desde o primeiro contato.",
    href: "#",
    tone: "project-blue",
    label: "JOÃO CARLOS",
    sublabel: "ADVOCACIA",
  },
];

const services = [
  ["01", "Sites institucionais", "Presença profissional para empresas, profissionais e marcas que querem ser encontradas e lembradas."],
  ["02", "Landing pages", "Páginas objetivas, bonitas e estratégicas para apresentar serviços e transformar visitas em oportunidades."],
  ["03", "Experiências digitais", "Design e desenvolvimento pensados juntos para criar uma experiência coerente com a identidade de cada marca."],
  ["04", "Evolução digital", "A presença digital não precisa ficar parada. Ajustamos, melhoramos e expandimos conforme o negócio cresce."],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="header">
        <a href="#inicio" className="logo" onClick={close}>
          <span className="logo-mark"><i /></span><span className="logo-text">APD</span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#projetos" onClick={close}>Projetos</a>
          <a href="#servicos" onClick={close}>Serviços</a>
          <a href="#sobre" onClick={close}>Sobre</a>
          <a href="#contato" className="nav-contact" onClick={close}>Vamos conversar <ArrowUpRight /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" />AGÊNCIA DE PRESENÇA DIGITAL</div>
              <h1>Sua marca merece<br />estar <em>bem representada.</em></h1>
              <p className="hero-description">Criamos sites modernos, estratégicos e personalizados para transformar negócios em experiências digitais.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projetos">Conheça nossos projetos <ArrowRight /></a>
                <a className="text-link" href="#contato">Falar com a APD <ArrowDownRight /></a>
              </div>
            </div>

            <div className="hero-side">
              <div className="hero-side-label">APD / 2026</div>
              <div className="hero-graphic">
                <div className="graphic-orbit orbit-one" />
                <div className="graphic-orbit orbit-two" />
                <div className="graphic-center"><span>APD</span><small>WEB / DESIGN / STRATEGY</small></div>
                <span className="graphic-dot dot-one" /><span className="graphic-dot dot-two" />
              </div>
              <div className="hero-location"><span>Sorocaba · SP</span><span>Brasil</span></div>
            </div>
          </div>
          <div className="hero-bottom"><span>IDEIAS · MARCAS · POSSIBILIDADES REAIS</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="projects section" id="projetos">
          <div className="section-top">
            <div><div className="eyebrow">PROJETOS SELECIONADOS</div><h2>Feito para cada<br /><em>marca.</em></h2></div>
            <p className="section-intro">Cada projeto nasce de uma necessidade diferente. O resultado precisa parecer com a marca — não com um template.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className={`project-preview ${project.tone}`}>
                  <div className="browser-bar"><span /><span /><span /><small>{project.category}</small></div>
                  <div className="preview-content"><span className="preview-kicker">{project.label}</span><strong>{project.sublabel}</strong><div className="preview-line" /><span className="preview-mini">PRESENÇA DIGITAL</span></div>
                  <div className="preview-window"><div /><div /><div /></div>
                  <a className="project-view" href={project.href} target={project.href !== "#" ? "_blank" : undefined} rel="noreferrer"><ExternalLink /></a>
                </div>
                <div className="project-info">
                  <div className="project-number">{project.number}</div>
                  <div className="project-details">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3><p>{project.description}</p>
                    <a href={project.href} target={project.href !== "#" ? "_blank" : undefined} rel="noreferrer">Ver projeto <ArrowRight /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services section" id="servicos">
          <div className="services-heading"><div className="eyebrow">O QUE FAZEMOS</div><h2>Presença digital<br /><em>com propósito.</em></h2></div>
          <div className="service-list">
            {services.map(([num, title, text]) => (
              <div className="service" key={num}><span className="service-number">{num}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight className="service-arrow" /></div>
            ))}
          </div>
        </section>

        <section className="about section" id="sobre">
          <div className="about-statement"><div className="eyebrow">POR TRÁS DA APD</div><h2>Tecnologia para criar.<br />Design para <em>conectar.</em></h2></div>
          <div className="about-copy">
            <p>A APD nasceu da vontade de unir tecnologia, design e estratégia para ajudar negócios a construírem uma presença digital que realmente represente quem eles são.</p>
            <p>Cada projeto é desenvolvido de forma personalizada, pensando tanto na estética quanto na experiência de quem está do outro lado da tela.</p>
            <div className="about-facts">
              <div><strong>01</strong><span>Design<br />personalizado</span></div>
              <div><strong>02</strong><span>Desenvolvimento<br />responsivo</span></div>
              <div><strong>03</strong><span>Publicação<br />e evolução</span></div>
            </div>
          </div>
        </section>

        <section className="process section">
          <div className="process-heading"><div className="eyebrow">COMO FUNCIONA</div><h2>Do primeiro<br /><em>contato ao ar.</em></h2></div>
          <div className="process-line">
            {[
              ["01","Entendemos","Conhecemos sua marca, objetivo e público."],
              ["02","Criamos","Estruturamos design e experiência."],
              ["03","Desenvolvemos","Transformamos a ideia em um site real."],
              ["04","Lançamos","Publicamos e deixamos tudo pronto para crescer."]
            ].map(([n,t,p]) => <div key={n}><span>{n}</span><strong>{t}</strong><p>{p}</p></div>)}
          </div>
        </section>

        <section className="contact section" id="contato">
          <div className="contact-inner">
            <div className="eyebrow">VAMOS CRIAR JUNTOS?</div>
            <h2>Seu negócio já existe.<br /><em>Agora ele precisa de presença.</em></h2>
            <p>Se você sente que sua marca poderia estar melhor representada na internet, vamos conversar.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={LINKS.whatsapp} target="_blank" rel="noreferrer"><MessageCircle />Falar pelo WhatsApp<ArrowRight /></a>
              <a className="contact-email" href={LINKS.email}><Mail /> {LINKS.email.replace("mailto:", "")}</a>
            </div>
          </div>
          <div className="contact-word">APD</div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand"><a href="#inicio" className="logo"><span className="logo-mark"><i /></span><span className="logo-text">APD</span></a><p>Agência de Presença Digital</p></div>
        <div className="footer-center"><span>Sua marca merece estar bem representada.</span><span>Sorocaba · SP</span></div>
        <div className="footer-socials">
          <a href={LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
          <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a>
          <a href={LINKS.email} aria-label="E-mail"><Mail /></a>
        </div>
        <div className="footer-bottom"><span>© 2026 APD</span><span>Agência de Presença Digital</span></div>
      </footer>
    </div>
  );
}

export default App;