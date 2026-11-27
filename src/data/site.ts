// Toutes les infos du site sont ici : modifie ce fichier pour mettre à jour le contenu.
// Les valeurs entre crochets [ ] sont à compléter.

export const site = {
  name: "Samuel Lepinay",
  initials: "SL",
  url: "https://porte-folio-sand.vercel.app",
  status: "Ouvert à une alternance · Toulouse",
  heroTitle: ["Admin sys.", "Réseaux."],
  heroAccent: "Sécurité.",
  intro:
    "Étudiant en Bachelor Systèmes & Cybersécurité à l'ESGI Toulouse. Je monte des infrastructures, je gère un parc et je fais des CTF pour apprendre à défendre.",
  email: "samuellepinay54@gmail.com",
  linkedin: "https://www.linkedin.com/in/samuel-lepinay/",
  github: "https://github.com/AxASam-afk",
  // Dépose ton CV dans public/cv.pdf
  cvUrl: "/cv.pdf",
};

export const nav = [
  { label: "Projets", href: "#projets" },
  { label: "Parcours", href: "#parcours" },
  { label: "Contact", href: "#contact" },
];

export const skills = ["Linux", "Cisco", "GLPI", "Python", "Java", "C", "SQL", "OSINT", "Next.js"];

export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  visual?: "network" | "glpi";
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    id: "dhcp-dns",
    category: "Réseau · TP ESGI",
    title: "Infrastructure DHCP / DNS",
    description:
      "Réseau ecole.local sous Packet Tracer : routeur 2911, serveur DHCP/DNS 192.168.1.30, serveur web et trois postes clients.",
    visual: "network",
    // link: { label: "Lire l'étude de cas", href: "https://github.com/AxASam-afk/..." },
  },
  {
    id: "glpi",
    category: "Systèmes · TP ESGI",
    title: "Gestion de parc — GLPI 12",
    description:
      "Inventaire, ticketing et suivi budgétaire, présentés à une DSI avec un plan d'action.",
    visual: "glpi",
  },
  {
    id: "ctf",
    category: "Cybersécurité · Perso",
    title: "CTF & writeups",
    description:
      "Challenges web, OSINT et Linux sur Root-Me. Méthode : reconnaissance → exploitation → remédiation.",
    link: { label: "Voir sur GitHub", href: "https://github.com/AxASam-afk" },
  },
  {
    id: "platinum-ops",
    category: "Développement · Perso",
    title: "Platinum Ops",
    description: "Appli de suivi de trophées PS5 : maquettes Figma, tests UX et assistant IA.",
  },
];

export const journey = [
  {
    period: "2026 → aujourd'hui",
    title: "Bachelor Systèmes & Cybersécurité — ESGI Toulouse",
    detail: "Réseaux, Linux, bases de données, algorithmique, C, développement web.",
  },
  {
    period: "[dates] · [durée]",
    title: "Stage support informatique — Adera",
    detail: "Tickets, diagnostic d'incidents, maintenance de l'infrastructure, sensibilisation des utilisateurs.",
  },
];

export const languages = "Anglais B2 · Espagnol B1";
