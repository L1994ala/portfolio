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
    category: "Brand identity",
    description: "Design of the logo, monogram and color variations for a high-end real estate project.",
    tags: ["Logo", "Branding", "Illustrator"],
    image: "assets/img/harmonya logo.jpg",
  },
  {
    title: "Excellia Properties — Company Profile",
    category: "Print & layout",
    description: "Institutional brochure: structuring of content, layout and declination of the charter on several supports.",
    tags: ["Print", "Layout", "InDesign"],
    image: "assets/img/excellia brand Identity.jpg",
  },
  {
    title: "Large advertising poster - Harmonya",
    category: "Print",
    description: "Design project of a large advertising poster on behalf of the Harmonya project to be presented in some key points in Ivory Coast and Mauritius.",
    tags: ["Print", "Flyer"],
    image: "assets/img/Banner poster Harmonya.png",
  },
  {
    title: "Social media carousel",
    category: "Digital",
    description: "Carousel illustration for the Harmonya social network",
    tags: ["Social media", "Carrousel", "Meta Ads"],
    image: "assets/img/Carousel d'image Excellia CI.png",
  },
  {
    title: "Video presentation - Ocean Suite",
    category: "Bonus - video & motion design",
    description: "Narrative and motion design videos produced for the brand",
    tags: ["Video", "Motion design"],
    image: "assets/img/miniature OceanSuite.png",
    link: "https://youtu.be/cHIlJfmwlXw?si=Yd-MQCZPsXQFRP4N",
  },
];
