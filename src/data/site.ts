// Toutes les infos du site sont ici : modifie ce fichier pour mettre à jour le contenu.
// Source : vault Obsidian (github.com/AxASam-afk/Vault-Obsidian) et CV.

export const site = {
  name: "Samuel Lepinay",
  initials: "SL",
  url: "https://porte-folio-sand.vercel.app",
  status: "Recherche d'alternance · Disponible immédiatement",
  heroGradient: "Faire tourner",
  heroRest: "et sécuriser les systèmes",
  intro:
    "Étudiant en Bachelor Informatique, Systèmes & Cybersécurité à l'ESGI Toulouse. Stage en support IT chez Adera, CTF sur Root-Me et TryHackMe : je cherche une alternance en support IT, réseau, cybersécurité ou développement web.",
  email: "samuellepinay54@gmail.com",
  linkedin: "https://www.linkedin.com/in/samuel-lepinay/",
  github: "https://github.com/AxASam-afk",
  vault: "https://github.com/AxASam-afk/Vault-Obsidian",
  // Dépose ton CV dans public/cv.pdf
  cvUrl: "/cv.pdf",
};

const vaultFile = (path: string) => `${site.vault}/blob/main/${encodeURI(path)}`;

export const nav = [
  { label: "Projets", href: "/#projets" },
  { label: "Parcours", href: "/#parcours" },
  { label: "Contact", href: "/#contact" },
];

export const skills = ["Linux", "Packet Tracer", "Python", "Java", "C", "SQL", "Next.js", "Figma"];

export type Link = { label: string; href: string };

export type Project = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  visual?: "network" | "sus";
  tags: string[];
  context: string;
  work: string[];
  results: string[];
  image?: { src: string; alt: string; width: number; height: number; caption: string };
  links: Link[];
};

export const projects: Project[] = [
  {
    slug: "platinum-ops",
    category: "UX / IHM · Projet ESGI",
    title: "Platinum Ops",
    summary:
      "Application web pour chasseurs de trophées PlayStation : maquettes Figma, interviews, personas et test utilisateur. Score SUS de 90/100.",
    visual: "sus",
    tags: ["Figma", "UX research", "SUS", "Nielsen"],
    context:
      "Platinum Ops est une application web destinée aux chasseurs de trophées PlayStation. Synchronisée avec le compte PSN, elle centralise la progression, la rareté des platines, le temps estimé et les guides pour décider quel jeu platiner et dans quel ordre. Un assistant IA répond aux blocages et coche les quêtes terminées, et un classement mondial permet de se comparer.",
    work: [
      "Préparation d'une interview utilisateur (8 questions) et construction de 6 personas aux profils volontairement différents.",
      "Conception des maquettes et d'un prototype interactif sur Figma (phases 1 et 2).",
      "Test sur prototype avec 5 participants : méthode think-aloud puis questionnaire SUS.",
      "Revue heuristique des écrans avec les 10 heuristiques de Nielsen, avec un niveau de gravité pour chaque constat.",
      "Liste priorisée de 13 changements pour l'itération suivante (priorité et effort).",
    ],
    results: [
      "Score SUS moyen de 90,0/100 (médiane 92,5), au-dessus du seuil « A » de 80,3.",
      "Points faibles identifiés : envie d'usage fréquent, surcharge d'information, absence de boutons retour.",
      "Limites assumées : 5 participants, prototype partiel, résultat indicatif.",
    ],
    image: {
      src: "/projets/platinum-ops-sus.png",
      alt: "Graphique en barres du score SUS des 5 participants : 95, 77,5, 90, 92,5 et 95, moyenne 90",
      width: 1120,
      height: 576,
      caption: "Score SUS par participant (n = 5)",
    },
    links: [
      { label: "Maquettes Figma — phase 1", href: "https://www.figma.com/design/COdOEBj6G6MlszESmAibdG/Maquette?node-id=0-1&t=oUALQaGYZrBurEue-1" },
      { label: "Maquettes Figma — phase 2", href: "https://www.figma.com/design/COdOEBj6G6MlszESmAibdG/Maquette?node-id=44-300&t=oUALQaGYZrBurEue-1" },
      { label: "Livrables complets sur GitHub", href: vaultFile("Modélisation/Platinum Ops — Livrables IHM.md") },
    ],
  },
  {
    slug: "tp-infrastructure-reseau",
    category: "Réseau · TP ESGI",
    title: "Réseau local sous Packet Tracer",
    summary:
      "Montage d'un LAN en étoile (switch + 3 postes), adressage IPv4, tests de connectivité, observation d'ARP et de la table MAC du switch.",
    visual: "network",
    tags: ["Cisco Packet Tracer", "IPv4", "ARP", "Switch"],
    context:
      "TP d'infrastructure : construire un petit réseau local sous Cisco Packet Tracer et observer comment les machines se trouvent et communiquent, de la couche 2 (adresses MAC) à la couche 3 (adresses IP).",
    work: [
      "Topologie en étoile : trois postes (PC-A, PC-B, PC-C) reliés au switch SW1 sur Fa0/1 à Fa0/3.",
      "Adressage IPv4 dans le réseau 192.168.10.0/24 (192.168.10.10, .20 et .30).",
      "Tests de connectivité par ping entre les postes : 4 paquets envoyés, 4 reçus, 0 % de perte.",
      "Relevé des adresses MAC avec ipconfig /all et analyse de la table ARP (arp -a, arp -d).",
      "Lecture et purge de la table MAC du switch (show mac address-table, clear mac address-table dynamic).",
    ],
    results: [
      "Communication directe entre les trois postes, sans routeur, car ils partagent le même réseau /24 et le même switch.",
      "Rôle d'ARP démontré : l'entrée IP ↔ MAC réapparaît dans le cache après un nouveau ping.",
      "Apprentissage dynamique des adresses MAC par le switch, port par port.",
    ],
    image: {
      src: "/projets/tp-infra-topologie.png",
      alt: "Schéma Packet Tracer : un switch 2960 relié à trois ordinateurs portables en étoile, adresses 192.168.10.10 à .30",
      width: 414,
      height: 308,
      caption: "Topologie en étoile sous Packet Tracer",
    },
    links: [{ label: "Compte rendu complet sur GitHub", href: vaultFile("Réseaux/TP_INFRA_SAMUEL_LEPINAY.md") }],
  },
  {
    slug: "travelnow",
    category: "Bases de données · Projet ESGI",
    title: "TravelNow — modélisation BDD",
    summary:
      "Modèle de données d'une application d'agence de voyage (utilisateurs, services, réservations, paiements) et requêtes SQL associées.",
    tags: ["MCD", "SQL", "Transactions"],
    context:
      "Modéliser la base de données d'une application de réservation de voyages : vols, hébergements et activités, avec réservations et paiements.",
    work: [
      "MCD avec 5 entités : Utilisateur, Service, Réservation, LigneReservation et Paiement, avec leurs cardinalités.",
      "Séparation Service / LigneReservation pour garder l'historique des prix même si le prix de base change.",
      "Cycle de vie des réservations (en option, confirmée, annulée) et paiements multiples (acompte, solde).",
      "Requêtes SQL côté agence (créer et modifier des services, réservations par période) et côté utilisateur (compte, réservation, annulation, paiement).",
      "Création d'une réservation dans une transaction, avec calcul du montant total à partir des lignes.",
    ],
    results: ["Rapport de modélisation complet avec justification des choix."],
    links: [{ label: "Rapport complet sur GitHub", href: vaultFile("Professionnel/rapport_travelnow.md") }],
  },
  {
    slug: "carnet-de-contacts",
    category: "Langage C · Projet ESGI",
    title: "Carnet de contacts en C",
    summary:
      "Programme en ligne de commande qui réunit tout le cours de C : structures, tableau dynamique, chaînes, fichiers et menu.",
    tags: ["C", "malloc / realloc", "Fichiers"],
    context:
      "Projet de synthèse du cours de langage C : écrire un carnet de contacts complet, sans limite de nombre de contacts, avec sauvegarde sur disque.",
    work: [
      "Ajouter, lister, rechercher (par morceau de nom) et supprimer des contacts.",
      "Tableau dynamique dont la capacité double avec realloc.",
      "Recherche avec strstr et suppression avec memmove.",
      "Sauvegarde dans contacts.txt (format nom;telephone) et chargement au démarrage avec fgets.",
      "Menu en switch dans une boucle do…while, avec gestion des erreurs.",
    ],
    results: ["Programme complet et commenté, disponible avec son code source."],
    links: [{ label: "Code et explications sur GitHub", href: vaultFile("Language C/Cours/Projet Carnet de Contacts.md") }],
  },
];

export const journey = [
  {
    period: "09/2026 → 07/2029",
    title: "Bachelor Informatique, Systèmes & Cybersécurité — ESGI Toulouse",
    detail: "En alternance. Objectif : poursuivre vers un Master en cybersécurité.",
  },
  {
    period: "05/2025 → 06/2025 · 2 mois",
    title: "Stage support SI — Adera",
    detail:
      "Support niveau 1/2 via tickets, diagnostic et résolution d'incidents, maintenance du parc (mises à jour, configurations, correctifs), sensibilisation à l'hygiène numérique.",
  },
  {
    period: "04/2024 → 10/2024",
    title: "Croupier — Casino Barrière",
    detail: "Accueil des clients, gestion des litiges mineurs, contrôle du matériel et respect strict des procédures de sécurité.",
  },
  {
    period: "2023 → 2024",
    title: "Baccalauréat — Lycée Raymond Naves",
    detail: "",
  },
];

export const languages = "Anglais intermédiaire · Espagnol débutant";
