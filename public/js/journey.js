// Entries of the journey section on the homepage, sorted newest first by home.js.
//
//   date        YYYY-MM-DD
//   end         optional end date, for things that lasted several days
//   inProgress  true instead of a date for a project still in progress (shown first)
//   title       short title, titleEn for the English one if it differs
//   fr, en      description (falls back to fr when en is missing)
//   link        optional link to the site or the repo
//   steps       optional list of smaller steps, same fields, folded under the entry
//   collapsed   true to hide the entry behind the "Show more" button

const JOURNEY = [
  {
    collapsed: true,
    date: "2023-01-30",
    title: "Simplon",
    fr: "Début de ma formation de développeur web.",
    en: "Start of my web developer course.",
    steps: [
      {
        date: "2022-12-05",
        end: "2022-12-09",
        fr: "Une semaine de présélection, et la découverte du code.",
        en: "A week of pre-selection, and discovering code.",
      },
    ],
  },
  {
    date: "2023-09-22",
    title: "Diplôme RNCP 5",
    titleEn: "RNCP 5 diploma",
    fr: "Développeur web et web mobile.",
    en: "Web and mobile web developer.",
    steps: [
      {
        date: "2023-03-16",
        fr: "AlloSimplon : un catalogue de films avec comptes, notes, commentaires et administration.",
        en: "AlloSimplon: a film catalogue with accounts, ratings, comments and an admin area.",
        link: "https://github.com/Nabil080/allosimplon",
      },
      {
        date: "2023-04-07",
        fr: "OOP Fight : des combats de personnages, pour apprendre la programmation objet en PHP.",
        en: "OOP Fight: character battles, to learn object-oriented programming in PHP.",
        link: "https://github.com/Nabil080/OOP-Fight",
      },
      {
        date: "2023-04-18",
        fr: "Un suivi du Covid avec les données mondiales du jour et des graphiques.",
        en: "A Covid tracker with daily global data and charts.",
        link: "https://github.com/Nabil080/covid-tracker",
      },
      {
        date: "2023-04-21",
        fr: "Le moteur d'un blog, à partir d'un simple gabarit statique.",
        en: "The engine of a blog, built from a plain static template.",
        link: "https://github.com/Nabil080/Blog-backend",
      },
      {
        date: "2023-04-28",
        fr: "En groupe : un site pour l'école, resté inachevé faute de temps.",
        en: "As a group: a website for the school, left unfinished for lack of time.",
        link: "https://github.com/Nabil080/simplon-charleville",
      },
      {
        date: "2023-06-13",
        fr: "Un outil qui récupère les fiches produits d'un distributeur et les exporte vers Excel.",
        en: "A tool that collects a distributor's product pages and exports them to Excel.",
      },
      {
        date: "2023-06-14",
        fr: "Un prototype qui affiche les publications d'une page Facebook sur un site.",
        en: "A prototype that shows a Facebook page's posts on a website.",
        link: "https://github.com/Nabil080/FbPageViewer",
      },
      {
        date: "2023-07-18",
        fr: "Un site pour un camping : réservation en ligne, boutique et gestion, avec Symfony.",
        en: "A website for a campsite: online booking, a shop and management tools, with Symfony.",
      },
      {
        date: "2023-11-21",
        fr: "En stage : une application de gestion de camping, personnalisable.",
        en: "On an internship: a customizable campsite management app.",
        link: "https://github.com/Nabil080/applicamping",
      },
    ],
  },
  {
    collapsed: true,
    date: "2024-03-11",
    end: "2024-04-07",
    title: "Piscine de l'école 42",
    titleEn: "42 school piscine",
    fr: "Quatre semaines de sélection.",
    en: "Four weeks of selection.",
    steps: [
      {
        date: "2024-05-13",
        fr: "Accepté à 42, et rentrée.",
        en: "Accepted at 42, and first day.",
      },
    ],
  },
  {
    date: "2025-05-25",
    title: "École 42",
    titleEn: "42 school",
    fr: "Tronc commun terminé, jusqu'à Transcendance.",
    en: "Common core completed, all the way to Transcendence.",
    steps: [
      {
        date: "2024-05-15",
        fr: "libft : refaire une partie de la bibliothèque standard du C.",
        en: "libft: rebuilding part of the C standard library.",
        link: "https://github.com/Nabil080/libft",
      },
      {
        date: "2024-06-13",
        fr: "push_swap : un algorithme de tri avec un jeu d'opérations imposé.",
        en: "push_swap: a sorting algorithm with a fixed set of operations.",
        link: "https://github.com/Nabil080/push_swap",
      },
      {
        date: "2024-06-23",
        fr: "FdF : un rendu 3D en fil de fer.",
        en: "FdF: a 3D wireframe renderer.",
        link: "https://github.com/Nabil080/FdF",
      },
      {
        date: "2024-09-03",
        fr: "philosophers : une simulation pour apprendre le multithreading.",
        en: "philosophers: a simulation to learn multithreading.",
        link: "https://github.com/Nabil080/philosophers",
      },
      {
        date: "2024-09-27",
        fr: "minishell : un petit shell Unix.",
        en: "minishell: a small Unix shell.",
        link: "https://github.com/Nabil080/minishell",
      },
      {
        date: "2024-10-20",
        fr: "cub3D : un moteur de raycasting.",
        en: "cub3D: a raycasting engine.",
        link: "https://github.com/Nabil080/cub3d",
      },
      {
        date: "2025-01-13",
        fr: "ircServ : un serveur IRC en C++.",
        en: "ircServ: an IRC server in C++.",
        link: "https://github.com/Nabil080/ircServ",
      },
      {
        date: "2025-05-06",
        fr: "KingPong : Pong dans le navigateur, avec le jeu en ligne et des fonctions sociales.",
        en: "KingPong: Pong in the browser, with online play and social features.",
        link: "https://github.com/Nabil080/KingPong",
      },
      {
        date: "2025-06-22",
        fr: "À côté : autobear.nvim, une petite extension pour Neovim.",
        en: "On the side: autobear.nvim, a small Neovim extension.",
        link: "https://github.com/Nabil080/autobear.nvim",
      },
    ],
  },
  {
    date: "2025-10-28",
    title: "Le jeu vidéo",
    titleEn: "Video games",
    fr: "Une passion naissante, qui a mené à plusieurs projets.",
    en: "A growing passion, which led to several projects.",
    link: "https://kozumagames.itch.io",
    steps: [
      {
        date: "2025-10-28",
        fr: "Premiers pas sur Godot : Pong lance mon 20 Games Challenge.",
        en: "First steps on Godot: Pong starts my 20 Games Challenge.",
      },
      {
        date: "2025-10-31",
        fr: "Breakout et Flappy Bird.",
        en: "Breakout and Flappy Bird.",
      },
      {
        date: "2025-11-04",
        fr: "Jetpack Joyride, Space Invaders et Asteroids.",
        en: "Jetpack Joyride, Space Invaders and Asteroids.",
      },
      {
        date: "2026-01-08",
        fr: "Première game jam : Dungeon Collapse, en collaboration.",
        en: "First game jam: Dungeon Collapse, as a collaboration.",
      },
      {
        date: "2026-02-03",
        fr: "MagicHell, un remake pour la Remake Game Learn Jam. Et Pac-Man.",
        en: "MagicHell, a remake for the Remake Game Learn Jam. And Pac-Man.",
      },
      {
        date: "2026-05-18",
        fr: "Super Mario Bros, sixième jeu du challenge.",
        en: "Super Mario Bros, the challenge's sixth game.",
      },
    ],
  },
  {
    date: "2026-10-13",
    title: "Kozuma",
    fr: "Création de ma micro-entreprise, et début des projets pro.",
    en: "Founding my own business, and the start of professional projects.",
    steps: [
      {
        date: "2026-10-13",
        fr: "Première page de kozuma.studio.",
        en: "First page of kozuma.studio.",
      },
      {
        date: "2026-10-14",
        fr: "Le logo |< trouve sa place.",
        en: "The |< logo finds its place.",
      },
      {
        date: "2026-10-15",
        fr: "Les prototypes de jeux rejoignent le site.",
        en: "The game prototypes join the site.",
        link: "https://kozumagames.itch.io",
      },
    ],
  },
  {
    date: "2026-11-27",
    title: "Rewind",
    fr: "Sortie sur Google Play. Ton année en photos, en stories, sans que rien ne quitte ton téléphone.",
    en: "Out on Google Play. Your year in photos, as story cards, with nothing leaving your phone.",
    link: "https://rewind.kozuma.studio/",
    steps: [
      {
        date: "2026-10-13",
        fr: "Passage en test.",
        en: "Testing begins.",
      },
      {
        date: "2026-10-10",
        fr: "Naissance de l'idée, et un premier test : peut-on tout calculer sur le téléphone ?",
        en: "The idea is born, with a first test: can it all be worked out on the phone?",
      },
      {
        date: "2026-10-10",
        fr: "Les lieux, les couleurs et le type de photographe, analysés sans rien envoyer.",
        en: "Places, colours and photographer type, analysed without sending anything.",
      },
      {
        date: "2026-10-10",
        fr: "Les cartes et le lecteur de stories, à partager en image.",
        en: "The cards and the story player, to share as images.",
      },
      {
        date: "2026-10-10",
        fr: "Rewind a son site, et sa politique de confidentialité.",
        en: "Rewind gets its site and its privacy policy.",
        link: "https://rewind.kozuma.studio/",
      },
      {
        date: "2026-10-11",
        fr: "La musique de fond arrive dans les stories.",
        en: "Background music comes to the stories.",
      },
      {
        date: "2026-10-12",
        fr: "Les années passées, accessibles depuis l'accueil.",
        en: "Past years, available from the home screen.",
      },
    ],
  },
  {
    inProgress: true,
    title: "TierLore",
    fr: "Des tier lists d'anime qui ne spoilent rien.",
    en: "Anime tier lists that spoil nothing.",
    link: "https://tierlore.com/",
    steps: [
      {
        date: "2026-10-15",
        fr: "Première mise en ligne.",
        en: "First time online.",
      },
      {
        date: "2026-10-06",
        fr: "Naissance de l'idée : une première tier list, sur les tenues des personnages de Bleach.",
        en: "The idea is born: a first tier list, on the outfits of Bleach's characters.",
      },
      {
        date: "2026-10-15",
        fr: "Un premier prototype minimaliste, pour en parler avec des créateurs.",
        en: "A first minimal prototype, to talk it through with creators.",
      },
      {
        date: "2026-10-19",
        fr: "L'algorithme de récupération des données, qui croise plusieurs sources.",
        en: "The data collection algorithm, which cross-checks several sources.",
      },
      {
        date: "2026-10-22",
        fr: "L'accueil devient le catalogue.",
        en: "The home page becomes the catalogue.",
      },
      {
        date: "2026-10-26",
        fr: "Un sondage pour choisir le design, entre trois directions.",
        en: "A survey to choose the design, between three directions.",
      },
    ],
  },
  {
    inProgress: true,
    title: "Wheatfall",
    fr: "Un jeu vidéo, à venir sur Steam.",
    en: "A video game, coming to Steam.",
  },
];
