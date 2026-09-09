/*
  ============================================================
  Pour ajouter ou modifier un projet :
  1. Dépose ton image dans le dossier assets/img/ (JPG ou PNG,
     1200px de large environ suffit — pas besoin de plus lourd).
  2. Copie un bloc { ... } ci-dessous et modifie les champs.
  3. Mets image: null tant que tu n'as pas encore le visuel —
     une case vide s'affichera à la place, avec le nom de
     fichier attendu, pour te rappeler de l'ajouter.
  4. Enregistre, puis fais git add / commit / push (voir le
     README) pour mettre le site en ligne à jour.
  ============================================================
*/

const PROJECTS = [
  {
    title: "Harmonya — Smart City & Golf",
    category: "Identité de marque",
    description: "Conception du logo, du monogramme et des déclinaisons couleur pour un projet immobilier haut de gamme.",
    tags: ["Logo", "Branding", "Illustrator"],
    image: "assets/img/harmonya.jpg",
  },
  {
    title: "Excellia Properties — Company Profile",
    category: "Print & mise en page",
    description: "Brochure institutionnelle : structuration de contenu, mise en page et déclinaison de la charte sur plusieurs supports.",
    tags: ["Print", "Mise en page", "InDesign"],
    image: "assets/img/excellia brand Identity.jpg",
  },
  {
    title: "Flyer / Affiche — à ajouter",
    category: "Print",
    description: "Ajoute ici l'un de tes flyers, affiches ou cartes de visite.",
    tags: ["Print", "Flyer"],
    image: null,
    expectedFile: "assets/img/print-1.jpg",
  },
  {
    title: "Carrousel réseaux sociaux — à ajouter",
    category: "Digital",
    description: "Ajoute ici un de tes carrousels Instagram/LinkedIn ou une publicité Meta.",
    tags: ["Réseaux sociaux", "Carrousel", "Meta Ads"],
    image: null,
    expectedFile: "assets/img/social-1.jpg",
  },
  {
    title: "Storytelling vidéo — Eufonie / SKIILLZ",
    category: "Bonus — vidéo & motion design",
    description: "Vidéos narratives et motion design produites pour ces marques. Ajoute un lien ou une vignette.",
    tags: ["Vidéo", "Motion design"],
    image: null,
    expectedFile: "assets/img/video-1.jpg",
  },
];
