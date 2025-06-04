export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  objective: string;
  approach: string;
  results: string;
  thumbUrl: string;
  imageUrls: string[];
}

export const projects: Project[] = [
  {
    id: "pac-cash-and-carry",
    title: "PAC Cash And Carry",
    tags: ["branding", "retail", "visual identity"],
    description: "Restyling completo dell'identità visiva per PAC Cash And Carry, con sviluppo di materiali promozionali e segnaletica interna.",
    objective: "Rinnovare l'immagine aziendale per aumentare la riconoscibilità e migliorare l'esperienza in-store.",
    approach: "Analisi del target e del posizionamento, creazione di un nuovo logo e palette colori, sviluppo di materiali coordinati.",
    results: "Incremento della brand awareness e feedback positivo dai clienti abituali e nuovi.",
    thumbUrl: "/images/pac_cash_and_carry.png",
    imageUrls: [
      "/images/portfolio/pac1.jpg",
      "/images/portfolio/pac2.jpg",
      "/images/portfolio/pac3.jpg"
    ]
  },
  {
    id: "io-e-mio-fratello-supermercati",
    title: "Io e mio fratello Supermercati",
    tags: ["web design", "e-commerce", "ux/ui"],
    description: "Progettazione e sviluppo del sito web per la catena 'Io e mio fratello Supermercati', con focus su usabilità e promozioni.",
    objective: "Offrire una piattaforma digitale intuitiva per la consultazione delle offerte e la fidelizzazione dei clienti.",
    approach: "Design mobile-first, interfaccia semplice e accessibile, integrazione di sistemi promozionali.",
    results: "Aumento delle visite online e incremento delle conversioni sulle offerte digitali.",
    thumbUrl: "/images/io_e_mio_fratello_supermercato.jpg",
    imageUrls: [
      "/images/portfolio/ioemiofratello1.jpg",
      "/images/portfolio/ioemiofratello2.jpg",
      "/images/portfolio/ioemiofratello3.jpg"
    ]
  },
  {
    id: "carrefour",
    title: "Carrefour",
    tags: ["packaging", "retail", "design"],
    description: "Sviluppo di packaging innovativi per la linea di prodotti Carrefour, con attenzione alla sostenibilità e all'impatto visivo sugli scaffali.",
    objective: "Differenziare i prodotti Carrefour attraverso un packaging distintivo e sostenibile.",
    approach: "Studio dei materiali eco-friendly, design accattivante e funzionale, test di usabilità sugli scaffali.",
    results: "Incremento delle vendite della linea e riconoscimenti per il design sostenibile.",
    thumbUrl: "/images/carrefour.jpg",
    imageUrls: [
      "/images/portfolio/carrefour1.jpg",
      "/images/portfolio/carrefour2.jpg"
    ]
  }
];