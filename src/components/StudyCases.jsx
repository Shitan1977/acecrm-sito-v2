const processes = [
  {
    number: "01",
    title: "Dal cliente all’incasso",
    description:
      "Gestisci anagrafica, offerta, ordine, pagamento e documenti senza cambiare piattaforma.",
    flow: "Cliente → Offerta → Ordine → Incasso",
    image: "/acecrm/processi/cliente-incasso.png",
    alt: "Processo AceCRM dal cliente all’offerta, ordine e incasso",
  },
  {
    number: "02",
    title: "Dal prodotto alla consegna",
    description:
      "Controlla catalogo, disponibilità, vendita e spedizione mantenendo ogni movimento sempre tracciato.",
    flow: "Prodotto → Magazzino → Vendita → Spedizione",
    image: "/acecrm/processi/prodotto-consegna.png",
    alt: "Processo AceCRM dal prodotto alla consegna",
  },
  {
    number: "03",
    title: "Dalla pianificazione al controllo",
    description:
      "Coordina appuntamenti, operatori, attività e scadenze con una visione completa del lavoro aziendale.",
    flow: "Calendario → Operatori → Attività → Controllo",
    image: "/acecrm/processi/pianificazione-controllo.png",
    alt: "Pianificazione di operatori, attività e scadenze con AceCRM",
  },
];

export default function StudyCases() {
  return (
    <section
      id="come-funziona"
      className="section-dark bg-dark text-light pb-0"
    >
      <div className="container">
        <div className="row g-4 justify-content-center mb-4">
          <div className="col-lg-7">
            <div className="text-center">
              <div className="subtitle">AceCRM in azione</div>

              <h2>
                Dal lavoro quotidiano a un flusso
                <br />
                semplice e organizzato.
              </h2>

              <p className="lead">
                Tre esempi concreti di come AceCRM collega
                informazioni, persone e attività, riducendo passaggi
                manuali e dati dispersi.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {processes.map((process) => (
            <div className="col-lg-4 col-sm-6" key={process.number}>
              <article className="hover rounded-1 overflow-hidden relative text-light text-center ace-process-card">
                <img
                  src={process.image}
                  className="hover-scale-1-1 w-100"
                  alt={process.alt}
                />

                <div className="ace-process-number">
                  {process.number}
                </div>

                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered ace-process-content">
                  <p>{process.description}</p>

                  <div className="ace-process-flow">
                    {process.flow}
                  </div>

                  <a className="btn-line" href="#contatti">
                    Scopri come funziona
                  </a>
                </div>

                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1 ace-process-overlay" />

                <div className="abs z-2 bottom-0 mb-3 w-100 px-3 text-center hover-op-0">
                  <h3 className="fs-20 mb-3">{process.title}</h3>
                </div>

                <div className="gradient-edge-bottom abs w-100 h-60 bottom-0" />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}