const sectorSolutions = [
  {
    name: "Negozi e Retail",
    description:
      "Controlla prodotti, vendite, clienti e disponibilità collegando negozio fisico ed e-commerce.",
    icon: "icofont-shopify",
    features: [
      "Cassa e movimenti",
      "Magazzino e barcode",
      "Clienti e fidelizzazione",
      "Ordini e resi",
      "Sincronizzazione e-commerce",
      "Spedizioni",
    ],
    button: "Scopri la soluzione Retail",
    href: "#contatti",
  },
  {
    name: "RSA e strutture assistenziali",
    description:
      "Organizza ospiti, familiari, operatori, turni, attività e documentazione in un ambiente centralizzato.",
    icon: "icofont-nurse",
    features: [
      "Anagrafiche ospiti e familiari",
      "Operatori, ruoli e permessi",
      "Turni e assenze",
      "Calendario e attività",
      "Documenti e scadenze",
      "Comunicazioni interne",
    ],
    button: "Scopri la soluzione RSA",
    href: "#contatti",
  },
  {
    name: "Tour Operator e Agenzie",
    description:
      "Coordina clienti, preventivi, fornitori, pratiche e scadenze seguendo ogni viaggio dall’offerta alla partenza.",
    icon: "icofont-airplane-alt",
    features: [
      "Clienti e richieste",
      "Preventivi personalizzati",
      "Fornitori e servizi",
      "Pratiche e documenti",
      "Pagamenti e scadenze",
      "Calendario partenze",
    ],
    button: "Scopri la soluzione Travel",
    href: "#contatti",
  },
  {
    name: "B&B e strutture ricettive",
    description:
      "Gestisci ospiti, disponibilità, prenotazioni, pagamenti e attività quotidiane da un’unica piattaforma.",
    icon: "icofont-hotel",
    features: [
      "Anagrafiche ospiti",
      "Calendario prenotazioni",
      "Camere e disponibilità",
      "Incassi e pagamenti",
      "Servizi aggiuntivi",
      "Promemoria e scadenze",
    ],
    button: "Scopri la soluzione Hospitality",
    href: "#contatti",
  },
];

export default function Pricing() {
  return (
    <section
      id="soluzioni"
      className="section-dark bg-dark text-light relative pb-0"
      style={{
        backgroundImage:
          "url('/cyberguard/images/background/10.webp')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="gradient-edge-top" />
      <div className="gradient-edge-bottom" />

      <div className="container relative z-2">
        <div className="row g-4 mb-5 justify-content-center">
          <div className="col-lg-7 text-center">
            <div className="subtitle mb-3">
              Soluzioni per settore
            </div>

            <h2>
              La stessa piattaforma.
              <br />
              Configurata intorno al tuo lavoro.
            </h2>

            <p className="lead">
              Ogni impresa ha processi diversi. AceCRM combina i
              moduli utili al tuo settore e può evolvere insieme
              alla tua attività.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {sectorSolutions.map((solution) => (
            <div
              className="col-lg-3 col-md-6"
              key={solution.name}
            >
              <article className="relative bg-dark-2 rounded-1 overflow-hidden p-30 h-100 ace-sector-card">
                <div className="ace-sector-icon">
                  <i
                    className={solution.icon}
                    aria-hidden="true"
                  />
                </div>

                <div className="ace-sector-heading">
                  <h3 className="mb-3">{solution.name}</h3>

                  <p>{solution.description}</p>
                </div>

                <div className="ace-sector-features">
                  <h4>Configurazione di partenza</h4>

                  <ul className="ul-check">
                    {solution.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="ace-sector-action">
                  <a
                    href={solution.href}
                    className="btn-main fx-slide w-100"
                  >
                    <span>{solution.button}</span>
                  </a>

                  <small>
                    Soluzione modulare e personalizzabile
                  </small>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p className="lead mb-3">
            Il tuo settore non è tra questi?
          </p>

          <a className="btn-main btn-line fx-slide" href="#contatti">
            <span>Parliamo della tua impresa</span>
          </a>
        </div>
      </div>
    </section>
  );
}