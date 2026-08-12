const services = [
  {
    number: "01",
    title: "Gestione clienti e azienda",
    description:
      "Centralizza clienti, fornitori, risorse, sedi e informazioni aziendali in un unico spazio organizzato.",
    image: "/acecrm/screens/aree/gestione-clienti.png",
    imageFirst: true,
    highlighted: false,
    href: "#clienti-azienda",
  },
  {
    number: "02",
    image: "/acecrm/screens/aree/contabilita-finanza.png",
    description:
      "Monitora entrate, uscite, fatture, crediti, pagamenti e scadenze con dati sempre aggiornati.",
    image: "/acecrm/screens/aree/contabilita-finanza.png",
    imageFirst: true,
    highlighted: true,
    href: "#contabilita",
  },
  {
    number: "03",
    title: "Magazzino e prodotti",
    description:
      "Gestisci prodotti, quantità, prezzi, barcode, categorie, listini, lotti e disponibilità da un solo gestionale.",
    image: "/acecrm/screens/aree/magazzino-prodotti.png",
    imageFirst: false,
    highlighted: false,
    href: "#magazzino",
  },
  {
    number: "04",
    title: "Offerte, ordini e vendite",
    description:
      "Crea offerte, acquisisci ordini e controlla l’intero ciclo di vendita, dalla richiesta alla consegna.",
    image: "/acecrm/screens/aree/offerte-vendite.png",
    imageFirst: false,
    highlighted: false,
    href: "#vendite",
  },
  {
    number: "05",
    title: "Sincronizzazione e automazioni",
    description:
      "Collega AceCRM ai tuoi canali di vendita e sincronizza prodotti, attributi e configurazioni e-commerce.",
    image: "/acecrm/screens/aree/sincronizzazione.png",
    imageFirst: true,
    highlighted: true,
    href: "#integrazioni",
  },
  {
    number: "06",
    title: "Spedizioni e logistica",
    description:
      "Organizza corrieri e spedizioni web, riducendo attività manuali, errori e tempi di evasione degli ordini.",
    image: "/acecrm/screens/aree/spedizioni-logistica.png",
    imageFirst: true,
    highlighted: false,
    href: "#spedizioni",
  },
];

const statistics = [
  {
    icon: "icofont-layers",
    value: "6",
    suffix: "+",
    label: "Aree aziendali integrate",
  },
  {
    icon: "icofont-dashboard-web",
    value: "1",
    suffix: "",
    label: "Un’unica piattaforma",
  },
  {
    icon: "icofont-cloud",
    value: "24/7",
    suffix: "",
    label: "Accessibile online",
  },
  {
    icon: "icofont-settings-alt",
    value: "∞",
    suffix: "",
    label: "Configurazioni possibili",
  },
];

function ServiceImage({ service }) {
  return (
    <div className="col-md-6">
      <div className="relative overflow-hidden h-100">
        <h3 className="abs text-white fs-32 lh-1 p-4 top-0 start-0 z-3">
          {service.number}
        </h3>

        <div className="sw-overlay z-2 op-3" />

        <img
          src={service.image}
          className="w-100 h-100 hover-scale-1-2"
          style={{
            objectFit: "cover",
            objectPosition: "top center",
          }}
          alt={`${service.title} nel gestionale AceCRM`}
        />
      </div>
    </div>
  );
}

function ServiceText({ service }) {
  return (
    <div className="col-md-6">
      <div className="p-40">
        <h3>{service.title}</h3>
        <p className="mb-0">{service.description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="funzionalita"
      className="section-dark bg-dark text-light pb-0"
    >
      <div className="container">
        <div className="row g-4 justify-content-center mb-4">
          <div className="col-lg-7">
            <div className="text-center">
              <div className="subtitle">
                Tutto ciò che serve alla tua impresa
              </div>

              <h2>
                Un solo gestionale.
                <br />
                Tutte le aree del tuo business.
              </h2>

              <p className="lead">
                AceCRM collega clienti, contabilità, magazzino,
                vendite e logistica in una piattaforma modulare,
                semplice da usare e costruita intorno alla tua
                impresa.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-3">
          {services.map((service) => (
            <div className="col-lg-6" key={service.number}>
              <a
                href={service.href}
                className={`hover relative overflow-hidden rounded-1 text-light d-block h-100 ${
                  service.highlighted ? "ace-card-blue" : "bg-dark-2"
                }`}
              >
                <div className="row g-0 align-items-stretch h-100">
                  {service.imageFirst ? (
                    <>
                      <ServiceImage service={service} />
                      <ServiceText service={service} />
                    </>
                  ) : (
                    <>
                      <ServiceText service={service} />
                      <ServiceImage service={service} />
                    </>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="spacer-double" />
        <div className="spacer-double" />

        <div className="row g-4">
          {statistics.map((statistic) => (
            <div
              className="col-md-3 col-sm-6"
              key={statistic.label}
            >
              <div className="de_count text-center">
                <i
                  className={`p-3 circle ace-icon-blue text-light fs-40 d-inline-block mb-2 ${statistic.icon}`}
                  aria-hidden="true"
                />

                <h3 className="fs-40 mb-0 lh-1-1">
                  <span>{statistic.value}</span>
                  {statistic.suffix}
                </h3>

                <span>{statistic.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}