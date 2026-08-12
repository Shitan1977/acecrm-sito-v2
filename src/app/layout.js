import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://acecrm.it"),
  title: {
    default: "AceCRM | Gestionale CRM completo per aziende e professionisti",
    template: "%s | AceCRM",
  },
  description:
    "AceCRM è il gestionale CRM completo per organizzare clienti, vendite, attività, documenti e processi aziendali in un'unica piattaforma.",
  keywords: [
    "CRM",
    "gestionale CRM",
    "software gestionale",
    "gestione clienti",
    "gestionale aziende",
    "AceCRM",
  ],
  authors: [{ name: "AceCRM" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link
          rel="stylesheet"
          href="/cyberguard/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/cyberguard/css/plugins.css"
        />
        <link
          rel="stylesheet"
          href="/cyberguard/css/swiper.css"
        />
        <link
          rel="stylesheet"
          href="/cyberguard/css/style.css"
        />
        <link
          rel="stylesheet"
          href="/cyberguard/css/colors/scheme-1.css"
        />
        <link
          rel="stylesheet"
          href="/cyberguard/css/custom-swiper-1.css"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}