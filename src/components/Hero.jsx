export default function Hero() {
  return (
    <section
      id="section-intro"
      className="section-dark bg-dark text-light relative overflow-hidden"
      style={{
        backgroundImage:
          "url('/cyberguard/images/background/10.webp')",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container relative z-2">
        <div className="spacer-double sm-hide" />

        <div className="row g-4 gx-5 align-items-center">
          <div className="col-lg-6">
            <div className="subtitle s2 mb-3">
              Il gestionale modulare per la tua impresa
            </div>

            <h1>
              Più controllo.
              <br />
              Meno caos.
              <br />
              <span className="id-color">
                Un unico gestionale.
              </span>
            </h1>

            <p className="col-lg-10 mb-4">
              AceCRM riunisce clienti, appuntamenti, contabilità,
              magazzino, ordini e vendite in un’unica piattaforma
              semplice, completa e personalizzabile.
            </p>

            <a
              className="btn-main fx-slide mb-3 me-2"
              href="https://demo.acecrm.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Prova la demo</span>
            </a>

            <a
              className="btn-main btn-line fx-slide mb-3"
              href="#funzionalita"
            >
              <span>Scopri le funzionalità</span>
            </a>

            <div className="mt-3">
              <span className="me-3">
                <i className="icofont-check id-color me-1" />
                Modulare
              </span>

              <span className="me-3">
                <i className="icofont-check id-color me-1" />
                Personalizzabile
              </span>

              <span>
                <i className="icofont-check id-color me-1" />
                Accessibile online
              </span>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-6">
                  <img
      src="/acecrm/screens/hero/3.png"
      className="img-fluid rounded-1 mb-4 w-70 ms-30"
      alt="Gestione clienti, fornitori e collaboratori con AceCRM"
    />

             <img
  src="/acecrm/screens/hero/2.png"
  className="img-fluid rounded-1"
  alt="Contabilità e controllo finanziario con AceCRM"
/>
              </div>

              <div className="col-6">
                <div className="spacer-single sm-hide" />

             <img
  src="/acecrm/screens/hero/1.png"
  className="img-fluid rounded-1 mb-4"
  alt="Pianificazione di attività e operatori con AceCRM"
/>
              <img
 src="/acecrm/screens/hero/4.png"
  className="img-fluid rounded-1 w-70"
  alt="Gestione del magazzino e dei prodotti con AceCRM"
/>
              </div>
            </div>
          </div>
        </div>

        <div className="spacer-double" />
        <div className="spacer-double" />
      </div>

      <div className="gradient-edge-bottom" />
    </section>
  );
}