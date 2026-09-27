import Link from "next/link";

export const metadata = {
  title: "Gestionale per negozi e retail",
  description:
    "ACECRM Negozio riunisce prodotti, magazzino, barcode, clienti, cassa e ordini. Esplora la demo online e scopri la soluzione per il tuo negozio.",
  alternates: { canonical: "/negozio" },
  openGraph: {
    title: "ACECRM Negozio | Gestionale per negozi",
    description: "Prodotti, magazzino, cassa e clienti in un unico gestionale. Prova la demo online.",
    url: "https://acecrm.it/negozio",
  },
};

const areas = [
  { n: "01", title: "Prodotti e barcode", text: "Organizza il catalogo con categorie, listini, attributi e codici a barre." },
  { n: "02", title: "Magazzino", text: "Controlla disponibilità e movimenti dei prodotti dal gestionale." },
  { n: "03", title: "Cassa e vendite", text: "Segui le operazioni di vendita e i movimenti di cassa nello stesso ambiente." },
  { n: "04", title: "Clienti e ordini", text: "Tieni vicine le anagrafiche, gli ordini e le informazioni utili al lavoro quotidiano." },
];

const demoUrl = "https://demo.acecrm.it";
const contactUrl = "mailto:info@acecrm.it?subject=Richiesta%20demo%20ACECRM%20Negozio";

export default function NegozioPage() {
  return (
    <div className="ace-store">
      <header className="ace-store-nav">
        <div className="container ace-store-nav-inner">
          <Link href="/" aria-label="ACECRM, torna alla homepage">
            <img src="/logo-acecrm.png" alt="ACECRM" width="138" height="60" />
          </Link>
          <nav aria-label="Navigazione ACECRM Negozio">
            <Link href="/">Home</Link>
            <a href="#funzioni">Funzioni</a>
            <a href="#prezzo">Prezzo</a>
          </nav>
          <a className="ace-store-nav-cta" href={demoUrl} target="_blank" rel="noopener noreferrer">Apri la demo</a>
        </div>
      </header>

      <main>
        <section className="ace-store-hero">
          <div className="container ace-store-hero-grid">
            <div>
              <p className="ace-store-eyebrow">ACECRM / SOLUZIONE NEGOZIO</p>
              <h1>Il tuo negozio, <span>tutto sotto controllo.</span></h1>
              <p className="ace-store-lead">Prodotti, magazzino, vendite e clienti in un unico gestionale online. Esplora il demo Negozio e scopri come ACECRM si inserisce nel tuo lavoro quotidiano.</p>
              <div className="ace-store-actions">
                <a className="ace-store-button" href={demoUrl} target="_blank" rel="noopener noreferrer">Esplora il demo online <span aria-hidden="true">↗</span></a>
                <a className="ace-store-button ace-store-button-outline" href={contactUrl}>Prenota una demo guidata</a>
              </div>
              <p className="ace-store-note">Demo esplorativa online · Per un percorso guidato, scrivici.</p>
            </div>
            <div className="ace-store-visual" aria-label="Flusso di lavoro ACECRM Negozio">
              <p>UN FLUSSO PIÙ CHIARO</p>
              <ol>
                <li><span>01</span> Prodotto <b>Catalogo e barcode</b></li>
                <li><span>02</span> Magazzino <b>Disponibilità e movimenti</b></li>
                <li><span>03</span> Vendita <b>Cassa e ordini</b></li>
                <li><span>04</span> Cliente <b>Informazioni in un posto</b></li>
              </ol>
              <div className="ace-store-visual-foot">Dal prodotto alla vendita, senza perdere il filo.</div>
            </div>
          </div>
        </section>

        <section id="funzioni" className="ace-store-section">
          <div className="container">
            <p className="ace-store-eyebrow">IL LAVORO DI OGNI GIORNO</p>
            <h2>Una vista più chiara sul negozio.</h2>
            <p className="ace-store-section-intro">Parti dalle aree che usi davvero. Nel demo puoi vedere il gestionale e valutare con noi la configurazione adatta alla tua attività.</p>
            <div className="ace-store-cards">
              {areas.map((area) => <article key={area.n} className="ace-store-card"><span>{area.n}</span><h3>{area.title}</h3><p>{area.text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="prezzo" className="ace-store-offer">
          <div className="container ace-store-offer-grid">
            <div>
              <p className="ace-store-eyebrow">ACECRM NEGOZIO</p>
              <h2>Provalo sul tuo caso reale.</h2>
              <p>Entra nella demo online, poi raccontaci quanti prodotti, punti vendita e canali gestisci. Ti aiutiamo a capire quali moduli servono e come partire.</p>
            </div>
            <div className="ace-store-price">
              <p>Prezzo di lancio indicato</p>
              <strong>69 € <small>/ mese</small></strong>
              <p>La configurazione e gli eventuali servizi aggiuntivi vengono definiti nella proposta commerciale.</p>
              <a className="ace-store-button" href={demoUrl} target="_blank" rel="noopener noreferrer">Vai al demo Negozio <span aria-hidden="true">↗</span></a>
              <a className="ace-store-text-link" href={contactUrl}>Chiedi informazioni sull’attivazione</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="ace-store-footer"><div className="container"><span>© 2026 ACECRM</span><div><Link href="/">Tutte le soluzioni</Link><a href="mailto:info@acecrm.it">info@acecrm.it</a><a href="tel:+393482352185">348 235 2185</a></div></div></footer>
    </div>
  );
}
