const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Funzionalità", href: "#funzionalita" },
  { label: "Soluzioni", href: "#soluzioni" },
  { label: "Come funziona", href: "#come-funziona" },
  { label: "Vantaggi", href: "#vantaggi" },
  { label: "Roadmap", href: "#roadmap" },
];

const solutionLinks = [
  { label: "Negozi e Retail", href: "/negozio" },
  { label: "RSA e strutture assistenziali", href: "#soluzioni" },
  { label: "Tour Operator e Agenzie", href: "#soluzioni" },
  { label: "B&B e strutture ricettive", href: "#soluzioni" },
];

export default function Footer() {
  return (
    <footer className="section-dark ace-footer">
      <div className="container">
        <div className="row gx-5 gy-4">
          <div className="col-lg-4 col-md-6">
            <a href="#home" aria-label="Torna alla home di AceCRM">
              <img
                src="/logo-acecrm.png"
                className="logo-footer ace-footer-logo"
                alt="AceCRM"
              />
            </a>

            <div className="spacer-20" />

            <p className="ace-footer-description">
              AceCRM è il gestionale modulare che collega clienti,
              contabilità, magazzino, ordini, vendite e attività
              aziendali in un’unica piattaforma personalizzabile.
            </p>

            <div className="ace-footer-badges">
              <span>
                <i className="icofont-check" aria-hidden="true" />
                Modulare
              </span>

              <span>
                <i className="icofont-check" aria-hidden="true" />
                Online
              </span>

              <span>
                <i className="icofont-check" aria-hidden="true" />
                Personalizzabile
              </span>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="widget">
              <h5>Esplora</h5>

              <ul>
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="widget">
              <h5>Soluzioni per settore</h5>

              <ul>
                {solutionLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="widget">
              <h5>Parliamo della tua impresa</h5>

              <p className="ace-footer-contact-copy">
                Scopri come configurare AceCRM intorno ai processi
                della tua attività.
              </p>

              <div className="ace-footer-contact">
                <div>
                  <i
                    className="icofont-phone"
                    aria-hidden="true"
                  />

                  <div>
                    <strong>Chiamaci</strong>

                    <a href="tel:+393482352185">
                      348 235 2185
                    </a>
                  </div>
                </div>

                <div>
                  <i
                    className="icofont-ui-user"
                    aria-hidden="true"
                  />

                  <div>
                    <strong>Accedi ad AceCRM</strong>

                    <a
                      href="https://app.acecrm.it"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      app.acecrm.it
                    </a>
                  </div>
                </div>

                <div>
                  <i
                    className="icofont-computer"
                    aria-hidden="true"
                  />

                  <div>
                    <strong>Esplora la demo</strong>

                    <a
                      href="https://demo.acecrm.it"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      demo.acecrm.it
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subfooter">
        <div className="container">
          <div className="ace-subfooter">
            <div>
              © {new Date().getFullYear()} AceCRM. Tutti i diritti
              riservati.
            </div>

            <ul className="menu-simple">
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>

              <li>
                <a href="/cookie-policy">Cookie Policy</a>
              </li>

              <li>
                <a href="/termini-condizioni">
                  Termini e condizioni
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
