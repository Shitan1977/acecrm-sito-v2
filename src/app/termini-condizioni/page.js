import LegalPage, { OwnerBlock, Todo } from "@/components/LegalPage";

export const metadata = {
  title: "Termini e condizioni",
  description: "Termini e condizioni di utilizzo del sito e del servizio AceCRM.",
  alternates: { canonical: "/termini-condizioni" },
};

export default function TerminiCondizioniPage() {
  return (
    <LegalPage title="Termini e condizioni" updated="16 ottobre 2026">
      <p>
        Le presenti condizioni regolano l’utilizzo del sito acecrm.it e del servizio gestionale
        online AceCRM. Utilizzando il sito o il servizio accetti questi termini.
      </p>

      <h2>1. Fornitore del servizio</h2>
      <OwnerBlock />

      <h2>2. Oggetto</h2>
      <p>
        AceCRM è un gestionale modulare in modalità SaaS, accessibile online, per la gestione di
        clienti, contabilità, magazzino, ordini e vendite. Le funzionalità disponibili dipendono
        dai moduli e dal piano scelti.
      </p>

      <h2>3. Account e accesso</h2>
      <p>
        L’utente è responsabile della riservatezza delle proprie credenziali e delle attività
        svolte tramite il proprio account. Deve comunicare tempestivamente ogni uso non
        autorizzato.
      </p>

      <h2>4. Demo e prova</h2>
      <p>
        La demo su demo.acecrm.it ha scopo esplorativo. <Todo>Indicare eventuale periodo di prova gratuito e relative condizioni</Todo>.
      </p>

      <h2>5. Prezzi, fatturazione e rinnovo</h2>
      <p>
        <Todo>Indicare piani e prezzi (IVA esclusa), periodicità di fatturazione, modalità di pagamento, rinnovo automatico e modalità di disdetta</Todo>.
      </p>

      <h2>6. Uso consentito</h2>
      <p>
        È vietato utilizzare il servizio per attività illecite, tentare di accedere ad aree non
        autorizzate, compromettere la sicurezza o la disponibilità della piattaforma, o rivendere
        il servizio senza autorizzazione.
      </p>

      <h2>7. Dati dell’utente</h2>
      <p>
        I dati inseriti nella piattaforma restano di proprietà dell’utente. Il trattamento dei
        dati personali è descritto nella <a href="/privacy-policy">Privacy Policy</a>.{" "}
        <Todo>Se necessario, richiamare l’accordo di nomina a responsabile del trattamento</Todo>.
      </p>

      <h2>8. Proprietà intellettuale</h2>
      <p>
        Software, marchi, loghi, testi e grafica di AceCRM sono protetti dalle norme sul diritto
        d’autore e sulla proprietà intellettuale. Non è concessa alcuna licenza oltre al diritto
        d’uso del servizio durante il contratto.
      </p>

      <h2>9. Disponibilità e responsabilità</h2>
      <p>
        Il fornitore si impegna a mantenere il servizio disponibile con la dovuta diligenza, ma
        non garantisce l’assenza di interruzioni per manutenzione o cause di forza maggiore.{" "}
        <Todo>Indicare eventuale livello di servizio (uptime) e limiti di responsabilità</Todo>.
      </p>

      <h2>10. Recesso e sospensione</h2>
      <p>
        <Todo>Indicare condizioni di recesso e, se vendi a consumatori, il diritto di recesso di 14 giorni ex D.Lgs. 206/2005</Todo>.{" "}
        Il fornitore può sospendere il servizio in caso di violazione dei presenti termini o
        mancato pagamento.
      </p>

      <h2>11. Modifiche</h2>
      <p>
        I termini possono essere aggiornati; la versione in vigore è quella pubblicata su questa
        pagina.
      </p>

      <h2>12. Legge applicabile e foro competente</h2>
      <p>
        Il contratto è regolato dalla legge italiana. Foro competente: <Todo>es. Napoli / Napoli Nord</Todo>,
        salvo diversa disposizione inderogabile a tutela del consumatore.
      </p>
    </LegalPage>
  );
}
