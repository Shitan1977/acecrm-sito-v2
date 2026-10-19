import LegalPage, { OwnerBlock, Todo, owner } from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: "Informativa sul trattamento dei dati personali degli utenti del sito AceCRM.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="16 ottobre 2026">
      <p>
        Questa informativa descrive come vengono trattati i dati personali degli utenti che
        visitano il sito acecrm.it e che utilizzano i servizi AceCRM, ai sensi degli artt. 13 e
        14 del Regolamento UE 2016/679 (GDPR).
      </p>

      <h2>1. Titolare del trattamento</h2>
      <OwnerBlock />

      <h2>2. Dati trattati</h2>
      <ul>
        <li>Dati di navigazione (indirizzo IP, browser, pagine visitate), raccolti automaticamente.</li>
        <li>Dati forniti volontariamente tramite email, telefono o moduli di contatto e richiesta demo (nome, email, telefono, messaggio).</li>
        <li>Dati di accesso e di utilizzo della piattaforma AceCRM, per i clienti del servizio.</li>
      </ul>

      <h2>3. Finalità e base giuridica</h2>
      <ul>
        <li>Rispondere alle richieste di contatto e di demo (art. 6.1.b GDPR, misure precontrattuali).</li>
        <li>Erogare il servizio AceCRM e gestire il rapporto contrattuale (art. 6.1.b).</li>
        <li>Adempiere a obblighi di legge, fiscali e contabili (art. 6.1.c).</li>
        <li>Garantire la sicurezza del sito e prevenire abusi (legittimo interesse, art. 6.1.f).</li>
        <li>Invio di comunicazioni commerciali, solo previo consenso (art. 6.1.a).</li>
      </ul>

      <h2>4. Destinatari dei dati</h2>
      <p>
        I dati possono essere comunicati a fornitori che agiscono come responsabili del
        trattamento, ad esempio per hosting, posta elettronica e assistenza tecnica:{" "}
        <Todo>indicare i fornitori utilizzati</Todo>. I dati non vengono diffusi né venduti a terzi.
      </p>

      <h2>5. Tempi di conservazione</h2>
      <p>
        I dati di contatto sono conservati per il tempo necessario a gestire la richiesta; i dati
        contrattuali per la durata del rapporto e per i successivi termini di legge (di norma 10
        anni per i dati fiscali).
      </p>

      <h2>6. Diritti dell’interessato</h2>
      <p>
        Puoi chiedere in qualsiasi momento accesso, rettifica, cancellazione, limitazione,
        portabilità dei dati e opporti al trattamento, scrivendo a{" "}
        <a href={`mailto:${owner.email}`}>{owner.email}</a>. Hai inoltre il diritto di proporre
        reclamo al Garante per la protezione dei dati personali (
        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">garanteprivacy.it</a>).
      </p>

      <h2>7. Cookie</h2>
      <p>
        Per informazioni sui cookie consulta la <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>8. Modifiche</h2>
      <p>
        Questa informativa può essere aggiornata; la versione in vigore è sempre quella
        pubblicata su questa pagina.
      </p>
    </LegalPage>
  );
}
