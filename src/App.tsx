import { useState } from "react";

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
  Globe2,
  PanelsTopLeft,
  Sparkles,
  RefreshCw,
} from "lucide-react";

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
    description:
      "Uma presença digital elegante para apresentar o trabalho, serviços e canais de agendamento de uma nail designer.",
    href: "https://isabella-reis-nails.vercel.app",
    tone: "project-pink",
    label: "ISABELLA REIS",
    sublabel: "NAILS",
  },
  {
    number: "02",
    title: "João Carlos Alves Advocacia",
    category: "Site institucional · Advocacia",
    description:
      "Uma experiência institucional pensada para transmitir confiança, autoridade e clareza desde o primeiro contato.",
    href: "#",
    tone: "project-blue",
    label: "JOÃO CARLOS",
    sublabel: "ADVOCACIA",
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
    text: "Páginas focadas em apresentação e conversão.",
  },
  {
    icon: Sparkles,
    title: "Experiências digitais",
    text: "Design e desenvolvimento pensados para representar a identidade de cada marca.",
  },
  {
    icon: RefreshCw,
    title: "Evolução digital",
    text: "Manutenção, melhoria e novas funcionalidades.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <div className="site">
      {/* ========================================
          HEADER
      ======================================== */}

      <header className="header">
        <a href="#inicio" className="logo" onClick={close}>
          <span className="logo-main">APD</span>

          <span className="logo-description">
            AGÊNCIA DE
            <br />
            PRESENÇA DIGITAL
          </span>
        </a>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
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
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          type="button"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        {/* ========================================
            HERO
        ======================================== */}

        <section className="hero" id="inicio">
          <div className="hero-overlay" />

          <div className="hero-content">


            <h1>
              Sua marca merece
              <br />
              estar <em>bem representada.</em>
            </h1>

            <p className="hero-description">
              Criamos experiências digitais
              que representam seu negócio.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Conheça nossos projetos
                <ArrowRight />
              </a>

            </div>
          </div>
        </section>

        {/* ========================================
            PROJETOS
        ======================================== */}

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
                <div
                  className={`project-preview ${project.tone}`}
                >
                  <div className="browser-bar">
                    <span />
                    <span />
                    <span />

                    <small>{project.category}</small>
                  </div>

                  <div className="preview-content">
                    <span className="preview-kicker">
                      {project.label}
                    </span>

                    <strong>{project.sublabel}</strong>

                    <div className="preview-line" />

                    <span className="preview-mini">
                      PRESENÇA DIGITAL
                    </span>
                  </div>

                  <div className="preview-window">
                    <div />
                    <div />
                    <div />
                  </div>

                  <a
                    className="project-view"
                    href={project.href}
                    target={
                      project.href !== "#" ? "_blank" : undefined
                    }
                    rel="noreferrer"
                    aria-label={`Abrir ${project.title}`}
                  >
                    <ExternalLink />
                  </a>
                </div>

                <div className="project-info">
                  <div className="project-number">
                    {project.number}
                  </div>

                  <div className="project-details">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <a
                      href={project.href}
                      target={
                        project.href !== "#" ? "_blank" : undefined
                      }
                      rel="noreferrer"
                    >
                      Ver projeto
                      <ArrowRight />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ========================================
            SERVIÇOS
        ======================================== */}

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

        {/* ========================================
            SOBRE
        ======================================== */}

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
                  A APD nasceu da vontade de unir tecnologia, design e estratégia
                  para ajudar negócios a construírem uma presença digital que
                  realmente represente quem eles são.
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


              <div className="process-step">

                <span>01</span>
                <strong>Entendemos</strong>
                <p>Conhecemos sua marca, objetivo e público.</p>
              </div>

              <div className="process-step">
                <span>02</span>
                <strong>Criamos</strong>
                <p>Estruturamos design e experiência.</p>
              </div>

              <div className="process-step">
                <span>03</span>
                <strong>Desenvolvemos</strong>
                <p>Transformamos a ideia em um site real.</p>
              </div>

              <div className="process-step">
                <span>04</span>
                <strong>Lançamos</strong>
                <p>Publicamos e deixamos tudo pronto para crescer.</p>
              </div>

          </div>
        </section>


        {/* ========================================
            CONTATO
        ======================================== */}

        <section className="contact section" id="contato">
          <div className="contact-inner">
            <div className="eyebrow">VAMOS CRIAR?</div>

            <h2>
              <h2>
                Sua marca merece
                <br />
                <em>uma presença à altura.</em>
              </h2>
            </h2>


            <div className="contact-actions">
              <a
                className="button button-primary"
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Quero criar meu site
                <ArrowRight />
              </a>


            </div>
          </div>

          <div className="contact-word">APD</div>
        </section>
      </main>

      {/* ========================================
          FOOTER
      ======================================== */}

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

          <a
            href={LINKS.email}
            aria-label="E-mail"
          >
            <Mail />
          </a>
        </div>


        <div className="footer-center">

        </div>


      </footer>
    </div>
  );
}

export default App;