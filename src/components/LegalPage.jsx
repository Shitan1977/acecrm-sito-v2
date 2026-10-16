import Header from "./Header";
import Footer from "./Footer";

export const owner = {
  name: <span className="ace-legal-todo">[Ragione sociale]</span>,
  address: "III Trav. Arcangelo Astone, 29 – 80026 Casoria (NA)",
  vat: "07983261210",
  email: "info@freestyleweb.it",
};

export function Todo({ children }) {
  return <span className="ace-legal-todo">[{children}]</span>;
}

export function OwnerBlock() {
  return (
    <p>
      {owner.name}
      <br />
      {owner.address}
      <br />
      P.IVA {owner.vat}
      <br />
      Email: <a href={`mailto:${owner.email}`}>{owner.email}</a>
    </p>
  );
}

export default function LegalPage({ title, updated, children }) {
  return (
    <>
      <Header />
      <main className="ace-legal">
        <div className="container">
          <div className="ace-legal-card">
            <p className="ace-legal-eyebrow">ACECRM / INFORMAZIONI LEGALI</p>
            <h1>{title}</h1>
            <p className="ace-legal-updated">Ultimo aggiornamento: {updated}</p>
            {children}
          </div>
        </div>
      </main>
      <Footer home="/" />
    </>
  );
}
