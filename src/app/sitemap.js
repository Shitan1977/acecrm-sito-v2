export default function sitemap() {
  return [
    { url: "https://acecrm.it/", changeFrequency: "monthly", priority: 1 },
    { url: "https://acecrm.it/negozio", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://acecrm.it/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
    { url: "https://acecrm.it/cookie-policy", changeFrequency: "yearly", priority: 0.3 },
    { url: "https://acecrm.it/termini-condizioni", changeFrequency: "yearly", priority: 0.3 },
  ];
}
