import LegalPage, { OwnerBlock, Todo } from "@/components/LegalPage";

export const metadata = {
  title: "Cookie Policy",
  description: "Informazioni sull’uso dei cookie e di tecnologie simili sul sito AceCRM.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="16 ottobre 2026">
      <p>
        Questa pagina spiega cosa sono i cookie e come vengono utilizzati sul sito acecrm.it,
        in conformità al Provvedimento del Garante Privacy dell’8 maggio 2014 e alle Linee guida
        del 10 giugno 2021.
      </p>

      <h2>Titolare del trattamento</h2>
      <OwnerBlock />

      <h2>Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che i siti salvano sul dispositivo dell’utente per
        farlo funzionare correttamente, ricordare le preferenze o raccogliere statistiche.
      </p>

      <h2>Cookie tecnici</h2>
      <p>
        Sono necessari al funzionamento del sito e non richiedono consenso. Il sito utilizza
        cookie tecnici <Todo>elencare nome e durata, se presenti</Todo>.
      </p>

      <h2>Cookie analitici e di profilazione</h2>
      <p>
        <Todo>Indicare se il sito usa strumenti come Google Analytics o Meta Pixel. Se sì, questi cookie vengono installati solo dopo il consenso dell’utente tramite il banner cookie. Se no, sostituire con: “Il sito non utilizza cookie analitici né di profilazione.”</Todo>
      </p>

      <h2>Servizi di terze parti</h2>
      <p>
        <Todo>Elencare eventuali contenuti incorporati (font, mappe, video) che possono impostare cookie, con link alle rispettive informative</Todo>.
      </p>

      <h2>Come gestire o disattivare i cookie</h2>
      <p>
        Puoi bloccare o eliminare i cookie dalle impostazioni del tuo browser:{" "}
        <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a>,{" "}
        <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">Firefox</a>,{" "}
        <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a>,{" "}
        <a href="https://support.microsoft.com/it-it/microsoft-edge" target="_blank" rel="noopener noreferrer">Edge</a>.
        Disattivare i cookie tecnici può compromettere il funzionamento del sito.
      </p>

      <h2>Altre informazioni</h2>
      <p>
        Per il trattamento dei dati personali consulta la <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
