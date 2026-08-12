const advantages = [
  {
    number: "01",
    icon: "icofont-dashboard-web",
    title: "Un solo punto di controllo",
    description:
      "Clienti, ordini, contabilità, magazzino e attività aziendali finalmente collegati nella stessa piattaforma.",
  },
  {
    number: "02",
    icon: "icofont-layers",
    title: "Moduli scelti da te",
    description:
      "Attiva le funzionalità utili alla tua impresa e aggiungine altre quando il tuo business cresce.",
  },
  {
    number: "03",
    icon: "icofont-settings-alt",
    title: "Configurato sul tuo lavoro",
    description:
      "Ruoli, permessi, processi e strumenti vengono organizzati intorno alle esigenze reali della tua azienda.",
  },
  {
    number: "04",
    icon: "icofont-cloud",
    title: "Accessibile ovunque",
    description:
      "Lavora online da computer, tablet o smartphone e mantieni sempre aggiornate le informazioni aziendali.",
  },
  {
    number: "05",
    icon: "icofont-refresh",
    title: "Meno attività manuali",
    description:
      "Collega le diverse aree operative e riduci duplicazioni, passaggi ripetitivi ed errori nella gestione quotidiana.",
  },
  {
    number: "06",
    icon: "icofont-support",
    title: "Supporto dedicato",
    description:
      "Dalla configurazione iniziale all’utilizzo quotidiano, hai un riferimento con cui confrontarti.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="vantaggi"
      aria-label="Vantaggi di AceCRM"
      className="section-dark text-light relative ace-advantages"
      style={{
        backgroundImage:
          "url('/cyberguard/images/background/w1.webp')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="sw-overlay" />
      <div className="gradient-edge-top" />
      <div className="gradient-edge-bottom" />

      <div className="container relative z-2">
        <div className="row g-4 mb-4 justify-content-center">
          <div className="col-lg-7 text-center">
            <div className="subtitle mb-3">Perché AceCRM</div>

            <h2>
              Non devi adattarti al gestionale.
              <br />
              È il gestionale che si adatta a te.
            </h2>

            <p className="lead">
              AceCRM nasce per riunire il lavoro della tua impresa,
              semplificare i processi e offrirti soltanto gli
              strumenti di cui hai realmente bisogno.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid relative z-2">
        <div className="ace-testimonials-track ace-advantages-track">
          {advantages.map((advantage) => (
            <article
              className="bg-dark-2 rounded-1 p-30 ace-testimonial-card ace-advantage-card"
              key={advantage.number}
            >
              <div className="ace-advantage-top">
                <div className="ace-advantage-icon">
                  <i
                    className={advantage.icon}
                    aria-hidden="true"
                  />
                </div>

                <span className="ace-advantage-number">
                  {advantage.number}
                </span>
              </div>

              <h3 className="fs-22">{advantage.title}</h3>

              <p>{advantage.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}