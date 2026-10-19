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
        La demo su demo.acecrm.it ha scopo esplorativo e consente di provare il servizio prima
        dell’acquisto. L’accesso non è libero: per ottenere le credenziali occorre richiederle
        scrivendo a <a href="mailto:info@acecrm.it?subject=Richiesta%20demo%20ACECRM">info@acecrm.it</a>{" "}
        oppure chiamando il <a href="tel:+393482352185">348 235 2185</a>.
      </p>
      <p>
        La demo è gratuita e ha una durata di 30 giorni a decorrere dalla consegna delle
        credenziali. Alla scadenza l’accesso viene disattivato, salvo attivazione di un piano a
        pagamento. Le credenziali sono personali e non possono essere cedute a terzi.
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
        dati personali è descritto nella <a href="/privacy-policy">Privacy Policy</a>.
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
        non garantisce l’assenza di interruzioni per manutenzione o cause di forza maggiore.
      </p>

      <h2>10. Recesso e sospensione</h2>
      <p>
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
