import { useLayoutEffect, useState } from "react";
import { SITE_TITLE } from "./siteMeta.js";

/* Palette : bleu principal #2563EB (blue-600), blanc #FFFFFF, gris clair #F3F4F6 (gray-100), texte #374151 (gray-700) */

function ProfilePhoto({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className="flex h-44 w-44 shrink-0 items-center justify-center rounded-full border-4 border-white bg-blue-100 text-2xl font-bold tracking-tight text-blue-800 shadow-md ring-2 ring-blue-100"
        aria-hidden
      >
        RC
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      width={176}
      height={176}
      onError={() => setFailed(true)}
      className="h-44 w-44 shrink-0 rounded-full border-4 border-white object-cover object-[50%_32%] shadow-md ring-2 ring-blue-100"
      loading="lazy"
      decoding="async"
    />
  );
}

function ProjectCard({ project }) {
  const isProfessional = project.title === "Soccer 5 City";

  return (
    <article
      className={`group overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl ${
        isProfessional
          ? "border-blue-200 md:col-span-2 xl:col-span-3"
          : "border-gray-200"
      }`}
    >
      <div
        className={
          isProfessional
            ? "grid lg:grid-cols-[1.35fr_0.65fr]"
            : "flex h-full flex-col"
        }
      >
        {/* Image du projet */}
        <div
          className={`relative overflow-hidden bg-gray-100 ${
            isProfessional ? "min-h-[260px] lg:min-h-[280px]" : "h-52"
          }`}
        >
          {project.previewImage ? (
            <img
              src={project.previewImage}
              alt={`Aperçu du projet ${project.title}`}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 px-6 text-center">
              <p className="text-2xl font-bold text-white">{project.title}</p>
            </div>
          )}

          {isProfessional && (
            <div className="absolute left-4 top-4">
              <span className="rounded-full border border-white/30 bg-gray-900/80 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-sm">
                Projet professionnel
              </span>
            </div>
          )}
        </div>

        {/* Informations du projet */}
        <div
          className={`flex flex-1 flex-col ${
            isProfessional ? "justify-center p-6 sm:p-8 lg:p-10" : "p-6"
          }`}
        >
          {isProfessional && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              Réalisé chez Agence Markets Power
            </p>
          )}

          <h3
            className={`font-bold text-gray-900 ${
              isProfessional ? "mt-3 text-2xl sm:text-3xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              >
                Démo
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
export default function Portfolio() {
  useLayoutEffect(() => {
    document.title = SITE_TITLE;
  }, []);

  /* Projets GitHub : dépôts publics (étoilés) ; AfrikaMarket (repo ProjetMobileAvance) en Frontend - Mobile. */
  const projectSections = [
    {
      id: "professional",
      title: "Projet professionnel",
      blurb: "Projet réalisé durant mon stage chez Agence Markets Power.",

      projects: [
        {
          title: "Soccer 5 City",

          description:
            "Plateforme web de réservation de terrains sportifs et d'organisation d'événements.",

          tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Prisma",
            "Supabase",
            "PostgreSQL",
            "Vercel",
          ],

          github: "https://github.com/Marketspower/Soccercity5.git",

          liveUrl: "https://soccercity5-git-main-soccer-city.vercel.app/",

          previewImage: "/projects/soccer5-city.png",
        },
      ],
    },

    {
      id: "frontend-mobile",

      title: "Autres projets",

      blurb: "Applications web, mobiles et projets académiques.",

      id: "frontend-mobile",
      title: "Frontend - Mobile",
      blurb:
        "Interfaces web (HTML, JavaScript) et application mobile avec navigation et UI soignée.",
      projects: [
        {
          title: "AfrikaMarket",
          description:
            "Application de commande en ligne AfrikaMarket : navigation multi-écrans, interface mobile et parcours utilisateur pour la marketplace.",
          tech: ["Mobile", "UI", "React"],
          github: "https://github.com/Rassiatou/ProjetMobileAvance",
          previewImage: "/projects/afrikamarket.png",
        },
        {
          title: "livresGourmands",
          description:
            "Application web en JavaScript ; démo en ligne sur Vercel autour de contenus « livres gourmands ».",
          tech: ["JavaScript", "Vercel"],
          github: "https://github.com/Rassiatou/livresGourmands",
          liveUrl:
            "https://livres-gourmands-git-main-rassiatous-projects.vercel.app",
          previewImage: "/projects/livres-gourmands.png",
        },
        {
          title: "Blog-Jeux",
          description:
            "Projet de programmation web avancée : blog thématique jeux, navigation et pages structurées en HTML.",
          tech: ["HTML", "Web"],
          github: "https://github.com/Rassiatou/Blog-Jeux",
          liveUrl: "https://blog-jeux-video.vercel.app",
          previewImage: "/projects/blog-jeux.png",
        },
      ],
    },
    {
      id: "backend",
      title: "Backend & données",
      blurb:
        "Applications liées aux bases de données et à la couche données / logique métier (SQL Server, C#).",
      projects: [
        {
          title: "Gestion-Bibliotheque2-Sqlserver",
          description:
            "Travail de gestion de bibliothèque avec SQL Server : modèle de données et base du projet (application console).",
          tech: ["SQL Server", "Base de données"],
          github:
            "https://github.com/Rassiatou/Gestion-Bibliotheque2-Sqlserver",
          previewImage: "/projects/bibliotheque2.png",
        },
        {
          title: "Gestion-Bibliotheque3-Sqlserver",
          description:
            "Projet C# associé à SQL Server : gestion de bibliothèque, persistance et opérations sur les données (Windows Form).",
          tech: ["C#", "SQL Server"],
          github:
            "https://github.com/Rassiatou/Gestion-Bibliotheque3-Sqlserver",
          previewImage: "/projects/bibliotheque3.png",
        },
      ],
    },
    {
      id: "autres",
      title: "Autres",
      blurb: "C++, objets connectés et logique hors navigateur classique.",
      projects: [
        {
          title: "Gestion-hotel",
          description:
            "Projet de gestion hôtelière en C++ : structures de données et logique de traitement.",
          tech: ["C++"],
          github: "https://github.com/Rassiatou/Gestion-hotel",
          previewImage: "/projects/gestion-hotel.png",
        },
        {
          title: "ESP32 Maison connectée",
          description:
            "Prototype sur breadboard : carte ESP32, écran OLED (I2C), connexion WiFi, lecture analogique (potentiomètre) et saisie via clavier matriciel 4×4, avec retour d’état sur l’afficheur.",
          tech: ["ESP32", "IoT", "C++"],
          github: "https://github.com/Rassiatou/ProjetObjectConnecte1",
          previewImage: "/projects/esp32-maison-connectee.png",
        },
      ],
    },
  ];

  const skills = {
    Frontend: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
    ],
    Backend: ["Node.js", "Express", "API REST", "JWT", "Python"],
    "Base de données": ["MySQL", "PostgreSQL", "Supabase", "SQL"],
    Outils: ["Git", "GitHub", "Jira"],
  };

  const cvDeveloppeusePdf = "/cv/Cv_Rassiatou_Coulibaly.pdf?v=20260416-1";
  const linkedinPhotoUrl = import.meta.env.VITE_PROFILE_PHOTO_URL?.trim();
  const profilePhotoSrc = linkedinPhotoUrl || "/photo-profile.png";

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gray-100 text-gray-700 selection:bg-blue-100 selection:text-gray-900">
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gray-100" />
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-blue-600/[0.08] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-600/[0.06] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-12 lg:py-20">
        <header className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
          {/* Décoration de fond */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
            <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
          </div>

          <div className="relative grid gap-10 p-6 sm:p-8 md:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-14">
            {/* Partie gauche */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold text-green-700 sm:text-sm">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Disponible pour un poste junior
                </span>

                <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 sm:text-sm">
                  Montréal, Québec
                </span>
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
                Bonjour, je suis
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl">
                Rassiatou
                <span className="block text-blue-600">Coulibaly</span>
              </h1>

              <h2 className="mt-6 text-xl font-semibold text-gray-800 sm:text-2xl">
                Développeuse Web Full Stack Junior
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                Diplômée en Techniques de l’informatique, je conçois des
                applications web modernes, responsives et centrées sur
                l’utilisateur. Mon stage chez Agence Markets Power m’a permis de
                participer au développement d’un projet professionnel avec
                React, Next.js, Node.js et PostgreSQL.
              </p>

              {/* Technologies principales */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "PostgreSQL",
                  "Tailwind CSS",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Boutons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#projects"
                  className="btn-motion inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-800 sm:w-auto"
                >
                  Voir mes projets
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </a>

                <a
                  href={cvDeveloppeusePdf}
                  download="Cv_Rassiatou_Coulibaly.pdf"
                  className="btn-motion inline-flex w-full items-center justify-center rounded-2xl border-2 border-blue-600 bg-white px-6 py-3.5 text-sm font-semibold text-blue-600 transition hover:-translate-y-0.5 hover:bg-blue-50 hover:text-blue-800 sm:w-auto"
                >
                  Télécharger mon CV
                  <span className="ml-2" aria-hidden="true">
                    ↓
                  </span>
                </a>

                <a
                  href="#contact"
                  className="btn-motion inline-flex w-full items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 sm:w-auto"
                >
                  Me contacter
                </a>
              </div>
            </div>

            {/* Partie droite */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-100 to-blue-50 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-6 shadow-xl shadow-gray-200/70 sm:p-8">
                <div className="flex justify-center">
                  <div className="rounded-full bg-white p-2 shadow-lg">
                    <ProfilePhoto
                      src={profilePhotoSrc}
                      alt="Portrait de Rassiatou Coulibaly"
                    />
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-950">
                    Rassiatou Coulibaly
                  </h3>

                  <p className="mt-2 text-sm font-medium text-blue-600">
                    Développeuse Web Full Stack
                  </p>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Expérience
                    </p>
                    <p className="mt-2 text-sm font-bold text-gray-900">
                      Stage Full Stack
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Projet vedette
                    </p>
                    <p className="mt-2 text-sm font-bold text-gray-900">
                      Soccer 5 City
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <p className="text-center text-sm leading-6 text-blue-800">
                    À la recherche d’une première opportunité professionnelle en
                    développement web.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="cv"
          aria-labelledby="cv-heading"
          className="mt-16 scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 md:mt-20 md:p-10 lg:mt-24"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">CV</p>
          <h2
            id="cv-heading"
            className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl"
          >
            Curriculum vitæ
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-700">
            Téléchargez mon CV au format PDF (parcours technique, formation et
            projets orientés développement web).
          </p>
          <a
            href={cvDeveloppeusePdf}
            download="Cv_Rassiatou_Coulibaly.pdf"
            className="btn-motion mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/30 hover:bg-blue-800 hover:shadow-blue-800/25 sm:w-auto"
          >
            Télécharger le PDF
            <span aria-hidden>↓</span>
          </a>
        </section>

        <section className="mt-16 grid gap-8 md:mt-20 md:grid-cols-3 lg:mt-24 lg:gap-10">
          {[
            {
              title: "Interfaces modernes",
              text: "Création d’expériences claires, responsive et centrées utilisateur.",
            },
            {
              title: "Vision fullstack",
              text: "Compréhension du frontend, du backend, des API et des bases de données.",
            },
            {
              title: "Travail d’équipe",
              text: "Organisation des tâches avec Git, GitHub et Jira dans un cadre collaboratif.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        <section
          id="projects"
          className="mt-20 md:mt-24 lg:mt-28"
          aria-label="Projets par catégorie"
        >
          <div className="mb-12 flex flex-col gap-8 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Rassiatou Coulibaly — Portfolio
              </p>
              <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                Projets
              </h2>
            </div>
            <p className="max-w-xl text-sm text-gray-700">
              Découvrez une sélection de projets réalisés en contexte
              professionnel et académique, illustrant mes compétences en
              développement frontend, backend et full stack.
            </p>
          </div>

          <nav
            className="mb-14 flex flex-wrap gap-3 border-b border-gray-200 pb-8 md:mb-16"
            aria-label="Accès rapide aux catégories de projets"
          >
            {projectSections.map((section) => (
              <a
                key={section.id}
                href={`#projects-${section.id}`}
                className="rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-800 hover:shadow-md sm:px-4 sm:text-sm"
              >
                {section.title}
              </a>
            ))}
          </nav>

          <div className="space-y-20 md:space-y-24">
            {projectSections.map((section) => (
              <section
                key={section.id}
                id={`projects-${section.id}`}
                className="scroll-mt-28"
                aria-labelledby={`projects-heading-${section.id}`}
              >
                <div className="mb-8 md:mb-10">
                  <h3
                    id={`projects-heading-${section.id}`}
                    className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl"
                  >
                    {section.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-700">
                    {section.blurb}
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {section.projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 md:mt-24 md:gap-10 lg:mt-28 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              À propos
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Mon profil
            </h2>
            <p className="mt-5 text-sm leading-7 text-gray-700">
              Développeuse Web Full Stack junior diplômée en Techniques de
              l'informatique, je conçois des applications web modernes,
              performantes et centrées sur l'utilisateur.
            </p>
            <p className="mt-4 text-sm leading-7 text-gray-700">
              Mon stage chez Agence Markets Power m'a permis de participer au
              développement d'une application web professionnelle avec React,
              Next.js, Node.js et PostgreSQL. Aujourd'hui, je recherche un poste
              de développeuse web junior afin de continuer à développer mes
              compétences et contribuer à des projets concrets.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Compétences
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Stack technique
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                >
                  <h3 className="text-base font-semibold text-gray-900">
                    {category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 md:mt-24 md:p-10 lg:mt-28">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Parcours
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Évolution</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                year: "2024",
                text: "Premiers projets en programmation, dont une application console en C++.",
              },
              {
                year: "2025",
                text: "Développement web avec HTML, CSS, JavaScript et projets orientés interface utilisateur.",
              },
              {
                year: "2026",
                text: "Projets plus complets avec React, Next.js, Node.js, API REST, MySQL et travail collaboratif.",
              },
            ].map((step) => (
              <div
                key={step.year}
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:border-blue-300 hover:shadow-md"
              >
                <p className="text-2xl font-bold text-blue-600 transition-colors duration-200 group-hover:text-blue-800">
                  {step.year}
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mt-20 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 md:mt-24 md:p-10 lg:mt-28"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Travaillons ensemble
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-700">
            Je suis actuellement à la recherche d'un poste de développeuse web
            junior. N'hésitez pas à me contacter pour discuter d'une opportunité
            professionnelle ou d'un projet.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            <a
              href="mailto:assyacoulibaly225@gmail.com"
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md"
            >
              <p className="text-sm text-gray-500">Email</p>
              <p className="mt-2 break-all font-semibold text-gray-900 transition-colors duration-200 group-hover:text-blue-800">
                assyacoulibaly225@gmail.com
              </p>
            </a>
            <a
              href="https://github.com/Rassiatou"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md"
            >
              <p className="text-sm text-gray-500">GitHub</p>
              <p className="mt-2 break-all font-semibold text-blue-600 transition-colors duration-200 group-hover:text-blue-800">
                github.com/Rassiatou
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/rassiatou-coulibaly-90349b236/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md"
            >
              <p className="text-sm text-gray-500">LinkedIn</p>
              <p className="mt-2 font-semibold text-blue-600 transition-colors duration-200 group-hover:text-blue-800">
                Voir mon profil
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
