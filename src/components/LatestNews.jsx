const roadmap = [
  {
    category: "Amministrazione",
    status: "In sviluppo",
    title: "Gestione pagamenti e compensi dei dipendenti",
    description:
      "Organizza compensi, anticipi, pagamenti, scadenze e storico dei movimenti del personale.",
    image: "/acecrm/roadmap/pagamenti-dipendenti.png",
    alt: "Gestione dei pagamenti e dei compensi dei dipendenti con AceCRM",
  },
  {
    category: "Produzione",
    status: "Prossimamente",
    title: "Dalla presa misure al capo finito",
    description:
      "Gestisci commesse, misure, tessuti, lavorazioni, prove, costi e avanzamento della produzione.",
    image: "/acecrm/roadmap/abiti-su-misura.png",
    alt: "Produzione e gestione di abiti su misura con AceCRM",
  },
  {
    category: "Offerte",
    status: "In evoluzione",
    title: "Offerte più dettagliate e personalizzabili",
    description:
      "Crea proposte complete con attività, requisiti, costi, documenti e analisi funzionale.",
    image: "/acecrm/roadmap/offerte-analisi.png",
    alt: "Creazione di offerte e analisi funzionali con AceCRM",
  },
];

export default function LatestNews() {
  return (
    <section
      id="roadmap"
      className="section-dark bg-dark text-light pt-0"
    >
      <div className="container">
        <div className="row g-4 mb-4 justify-content-center">
          <div className="col-lg-7 text-center">
            <div className="subtitle mb-3">Roadmap AceCRM</div>

            <h2>
              Nuovi strumenti.
              <br />
              La stessa piattaforma.
            </h2>

            <p className="lead">
              Stiamo sviluppando nuove funzionalità per gestire
              ancora più processi aziendali direttamente da AceCRM.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {roadmap.map((item) => (
            <div className="col-lg-4" key={item.title}>
              <article className="d-block hover relative rounded-20 overflow-hidden text-light ace-roadmap-card">
                <img
                  src={item.image}
                  className="w-100 hover-scale-1-1"
                  alt={item.alt}
                />

                <div className="ace-roadmap-status">
                  {item.status}
                </div>

                <div className="absolute start-0 bottom-0 p-40 z-2">
                  <div className="bg-color rounded-1 px-2 d-inline-block mb-3">
                    {item.category}
                  </div>

                  <h3 className="fs-22">{item.title}</h3>

                  <p className="mb-0">
                    {item.description}
                  </p>
                </div>

                <div className="gradient-edge-bottom h-80" />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}