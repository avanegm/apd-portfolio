import { useState } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  X,
  Globe2,
  PanelsTopLeft,
  Sparkles,
  RefreshCw,
} from "lucide-react";

const LINKS = {
  instagram: "https://instagram.com/avanegm",
  whatsapp: "https://wa.me/5535998259860",
  email: "mailto:matheusavane312@gmail.com",
};

const projects = [
  {
    number: "01",
    title: "Isabella Reis Nails",
    category: "Landing page · Beauty",
    description:
      "Uma experiência digital elegante para apresentar o trabalho e facilitar o agendamento.",
    href: "https://isabella-reis-nails.vercel.app",
    tone: "project-pink",
    label: "ISABELLA REIS",
    sublabel: "NAILS",
    meta: "Design · Desenvolvimento",
  },
  {
    number: "02",
    title: "João Carlos Alves Advocacia",
    category: "Site institucional · Advocacia",
    description:
      "Uma experiência institucional pensada para transmitir confiança, autoridade e clareza desde o primeiro contato.",
    href: null,
    tone: "project-blue",
    label: "JOÃO CARLOS",
    sublabel: "ADVOCACIA",
    meta: "Design · Desenvolvimento",
  },
];

const services = [
  {
    icon: Globe2,
    title: "Sites institucionais",
    text: "Presença profissional para empresas, profissionais e marcas que querem ser encontradas e lembradas.",
  },
  {
    icon: PanelsTopLeft,
    title: "Landing pages",
    text: "Páginas focadas em apresentação, posicionamento e conversão.",
  },
  {
    icon: Sparkles,
    title: "Experiências digitais",
    text: "Design e desenvolvimento pensados para representar a identidade de cada marca.",
  },
  {
    icon: RefreshCw,
    title: "Manutenção & evolução",
    text: "Melhorias, manutenção e novas funcionalidades para o site continuar evoluindo.",
  },
];

const process = [
  {
    number: "01",
    title: "Entendemos",
    text: "Conhecemos sua marca, objetivo e público.",
  },
  {
    number: "02",
    title: "Criamos",
    text: "Transformamos estratégia em uma experiência visual.",
  },
  {
    number: "03",
    title: "Desenvolvemos",
    text: "Construímos um site rápido, responsivo e funcional.",
  },
  {
    number: "04",
    title: "Lançamos",
    text: "Publicamos tudo pronto para sua marca crescer.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="header">
        <a href="#inicio" className="logo" onClick={close}>
          <span className="logo-main">APD</span>

          <span className="logo-description">
            AGÊNCIA DE
            <br />
            PRESENÇA DIGITAL
          </span>
        </a>

        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Navegação principal">
          <a href="#projetos" onClick={close}>
            Projetos
          </a>
          <a href="#servicos" onClick={close}>
            Serviços
          </a>
          <a href="#sobre" onClick={close}>
            Sobre
          </a>
          <a href="#contato" onClick={close}>
            Contato
          </a>
          <a href="#contato" className="nav-contact" onClick={close}>
            Vamos conversar
            <ArrowUpRight />
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-overlay" />

          <div className="hero-content">

            <h1>
              Sua marca merece
              <br />
              estar <em>bem representada.</em>
            </h1>

            <p className="hero-description">
              Criamos sites e experiências digitais para marcas que querem se
              apresentar melhor na internet.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Conheça nossos projetos
                <ArrowRight />
              </a>
            </div>
          </div>
        </section>

        <div className="proof-strip" aria-label="Especialidades da APD">
          <span>DESIGN</span>
          <i />
          <span>DESENVOLVIMENTO</span>
          <i />
          <span>ESTRATÉGIA</span>
        </div>

        <section className="projects section" id="projetos">
          <div className="section-top">
            <div>
              <div className="eyebrow">PROJETOS SELECIONADOS</div>

              <h2>
                Trabalhos que
                <br />
                geram <em>presença.</em>
              </h2>
            </div>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className={`project-preview ${project.tone}`}>
                  <div className="browser-bar">
                    <span />
                    <span />
                    <span />
                    <small>{project.category}</small>
                  </div>

                  <div className="preview-content">
                    <span className="preview-kicker">{project.label}</span>
                    <strong>{project.sublabel}</strong>
                    <div className="preview-line" />
                    <span className="preview-mini">PRESENÇA DIGITAL</span>
                  </div>

                  <div className="preview-window">
                    <div />
                    <div />
                    <div />
                  </div>

                  {project.href ? (
                    <a
                      className="project-view"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir ${project.title}`}
                    >
                      <ExternalLink />
                    </a>
                  ) : (
                    <span className="project-view project-view-disabled" aria-label="Projeto em desenvolvimento">
                      <ExternalLink />
                    </span>
                  )}
                </div>

                <div className="project-info">
                  <div className="project-number">{project.number}</div>

                  <div className="project-details">
                    <span className="project-category">{project.category}</span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <span className="project-meta">{project.meta}</span>

                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Ver projeto ${project.title}`}
                      >
                        Ver projeto
                        <ArrowRight />
                      </a>
                    ) : (
                      <span className="project-coming-soon">
                        Projeto em desenvolvimento
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services section" id="servicos">
          <div className="services-heading">
            <div className="eyebrow">NOSSOS SERVIÇOS</div>

            <h2>
              Do conceito
              <br />
              ao resultado.
            </h2>
          </div>

          <div className="service-list">
            {services.map(({ icon: Icon, title, text }) => (
              <div className="service" key={title}>
                <div className="service-icon">
                  <Icon />
                </div>

                <h3>{title}</h3>
                <p>{text}</p>

                <ArrowUpRight className="service-arrow" />
              </div>
            ))}
          </div>
        </section>

        <section className="about section" id="sobre">
          <div className="about-main">
            <div className="about-intro">
              <div className="eyebrow">SOBRE A APD</div>

              <h2>
                Tecnologia
                <br />
                a favor de <em>pessoas.</em>
              </h2>

              <div className="about-text">
                <p>
                  A APD nasceu da vontade de unir tecnologia, design e
                  estratégia para ajudar negócios a construírem uma presença
                  digital que realmente represente quem eles são.
                </p>

                <p>
                  Cada projeto é desenvolvido de forma personalizada, pensando
                  tanto na estética quanto na experiência de quem está do outro
                  lado da tela.
                </p>
              </div>
            </div>
          </div>

          <div className="about-process">
            <div className="process-intro">
              <div className="eyebrow">NOSSO PROCESSO</div>
            </div>

            <div className="process-steps">
              {process.map((step) => (
                <div className="process-step" key={step.number}>
                  <span>{step.number}</span>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contato">
          <div className="contact-inner">
            <div className="eyebrow">VAMOS CRIAR?</div>

            <h2>
               Vamos criar algo que <em>represente sua marca.</em>
            </h2>

            <div className="contact-actions">
              <a
                className="button button-primary"
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Vamos conversar
                <ArrowRight />
              </a>

              <span className="contact-note">
                Conte um pouco sobre seu projeto e vamos conversar.
              </span>
            </div>
          </div>

          <div className="contact-word">APD</div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <a href="#inicio" className="logo">
            <span className="logo-main">APD</span>

            <span className="logo-description">
              AGÊNCIA DE
              <br />
              PRESENÇA DIGITAL
            </span>
          </a>

          <p className="footer-tagline">
            Presença digital com propósito.
          </p>
        </div>

        <div className="footer-center">
          <span>TECNOLOGIA · DESIGN · ESTRATÉGIA</span>
        </div>

        <div className="footer-socials">
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram />
          </a>

          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle />
          </a>

          <a href={LINKS.email} aria-label="E-mail">
            <Mail />
          </a>
        </div>

      </footer>
    </div>
  );
}

export default App;
