export default function CallToAction() {
  return (
    <section
      id="contatti"
      className="section-dark text-light pt-60 pb-50 relative overflow-hidden ace-final-cta"
    >
      <div className="ace-final-cta-glow" />

      <div className="container relative z-2">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <div className="subtitle ace-final-cta-label">
              Scopri AceCRM
            </div>

            <h2 className="mb-2">
              Pronto a semplificare la gestione della tua impresa?
            </h2>

            <p className="mb-0">
              Esplora il gestionale con la demo oppure raccontaci le
              esigenze della tua attività: troveremo insieme la
              configurazione più adatta.
            </p>
          </div>

          <div className="col-lg-5">
            <div className="ace-final-cta-actions">
              <a
                className="btn-main ace-cta-primary"
                href="https://demo.acecrm.it"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prova la demo
              </a>

              <a
                className="btn-main ace-cta-secondary"
                href="tel:+393482352185"
                aria-label="Chiama AceCRM al 348 235 2185"
              >
                <i
                  className="icofont-phone me-2"
                  aria-hidden="true"
                />
                348 235 2185
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}