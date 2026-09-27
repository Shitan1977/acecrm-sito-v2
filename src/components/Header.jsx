"use client";

import { useState } from "react";

const navigationLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Funzionalità",
    href: "#funzionalita",
  },
  {
    label: "Soluzioni",
    href: "#soluzioni",
  },
  {
    label: "ACECRM Negozio",
    href: "/negozio",
  },
  {
    label: "Come funziona",
    href: "#come-funziona",
  },
  {
    label: "Vantaggi",
    href: "#vantaggi",
  },
  {
    label: "Roadmap",
    href: "#roadmap",
  },
  {
    label: "Contatti",
    href: "#contatti",
  },
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="transparent">
      <div id="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between xs-hide">
                <div className="d-flex">
                  <div className="topbar-widget me-3">
                    <a href="mailto:info@acecrm.it">
                      <i
                        className="icofont-envelope"
                        aria-hidden="true"
                      />
                      info@acecrm.it
                    </a>
                  </div>

                    <div className="topbar-widget me-3">
                         <span>Tutto il tuo business. Un solo gestionale.</span>
                    </div>
                </div>

                <div className="d-flex">
                  <div className="topbar-widget">
                    <a
                        href="tel:+393482352185"
                        aria-label="Chiama AceCRM al 348 235 2185"
                    >
                        <i className="icofont-phone" aria-hidden="true" />
                        348 235 2185
                    </a>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div id="logo">
                  <a
                    href="#home"
                    aria-label="AceCRM - Homepage"
                    onClick={closeMenu}
                  >
                    <img
                      className="logo-main"
                      src="/logo-acecrm.png"
                      alt="AceCRM"
                    />

                    <img
                      className="logo-mobile"
                      src="/logo-acecrm.png"
                      alt="AceCRM"
                    />
                  </a>
                </div>
              </div>

              <div className="de-flex-col header-col-mid">
                <nav aria-label="Navigazione principale">
                  <ul
                    id="mainmenu"
                    className={menuOpen ? "ace-menu-open" : ""}
                  >
                    {navigationLinks.map((item) => (
                      <li key={item.href}>
                        <a
                          className="menu-item"
                          href={item.href}
                          onClick={closeMenu}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="de-flex-col">
                <div className="menu_side_area">
                  <a
                    href="https://demo.acecrm.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-main fx-slide btn-line me-2"
                  >
                    <span>Prova la demo</span>
                  </a>

                  <a
                    href="https://app.acecrm.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-main fx-slide"
                  >
                    <span>Accedi</span>
                  </a>

                  <button
                    id="menu-btn"
                    type="button"
                    className={menuOpen ? "menu-open" : ""}
                    aria-label={
                      menuOpen ? "Chiudi il menu" : "Apri il menu"
                    }
                    aria-expanded={menuOpen}
                    onClick={() =>
                      setMenuOpen((current) => !current)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
