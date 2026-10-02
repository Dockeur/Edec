"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslate } from "./language-switcher";

const projects = [
  {
    id: "brasaf-eies",
    client: "BRASAF",
    category: "Agroalimentaire",
    title: "Étude d’impact environnemental et social détaillée du projet de construction des Brasseries Samuel FOYOU à Douala",
    photos: [
      { src: "/images/projects/brasaf-eies-1.jpg", caption: "Réunion de clôture des consultations publiques" },
      { src: "/images/projects/brasaf-eies-2.png", caption: "Visite du site par les riverains" },
    ],
  },
  {
    id: "brasaf-dangers",
    client: "BRASAF",
    category: "Agroalimentaire",
    title: "Étude de dangers et plan d’urgence des Brasseries Samuel FOYOU à Douala",
    photos: [
      { src: "/images/projects/brasaf-danger-1.jpg", caption: "Visite du site et collecte des données" },
      { src: "/images/projects/brasaf-danger-2.jpg", caption: "Étude de terrain" },
    ],
  },
  {
    id: "cicc-premiers-secours",
    client: "CICC",
    category: "Agroalimentaire",
    title: "Formation du personnel du Conseil Interprofessionnel du Cacao et du Café aux soins de premiers secours",
    photos: [
      { src: "/images/projects/cicc-formation-1.png", caption: "Formation aux soins de premiers secours" },
      { src: "/images/projects/cicc-formation-2.jpg", caption: "Mise en pratique des gestes de secours" },
    ],
  },
  {
    id: "soleil-plasturgie",
    client: "SOLEIL Cameroun",
    category: "Plasturgie",
    title: "Visite du site par les riverains et collecte des données",
    photos: [
      { src: "/images/projects/soleil-plasturgie-1.jpg", caption: "Visite du site" },
      { src: "/images/projects/soleil-plasturgie-2.jpg", caption: "Visite du site par les riverains et collecte des données" },
    ],
  },
  {
    id: "routdaf-sensibilisation",
    client: "Routd’Af",
    category: "BTP",
    title: "Sensibilisation de la population",
    photos: [{ src: "/images/projects/routdaf-sensibilisation.jpg", caption: "Sensibilisation de la population" }],
  },
  {
    id: "routdaf-ouvrages",
    client: "Routd’Af",
    category: "BTP",
    title: "Construction des ouvrages",
    photos: [{ src: "/images/projects/routdaf-ouvrages.jpg", caption: "Construction des ouvrages" }],
  },
  {
    id: "routdaf-retrocession",
    client: "Routd’Af",
    category: "BTP",
    title: "Rétrocession du matériel d’hygiène et de salubrité",
    photos: [{ src: "/images/projects/routdaf-retrocession.jpg", caption: "Rétrocession du matériel d’hygiène et de salubrité" }],
  },
  {
    id: "routdaf-seminaire",
    client: "Routd’Af",
    category: "BTP",
    title: "Séminaire de formation et rétrocession de dons",
    photos: [
      { src: "/images/projects/routdaf-seminaire-1.jpg", caption: "Séminaire de formation" },
      { src: "/images/projects/routdaf-seminaire-2.jpg", caption: "Rétrocession de dons" },
    ],
  },
  {
    id: "nkongsamba",
    client: "Mairie de la ville de Nkongsamba",
    category: "Administration",
    title: "Notice d’impact environnemental du projet de construction du complexe commercial – Phase I de Nkongsamba",
    photos: [
      { src: "/images/projects/nkongsamba-visite.jpg", caption: "Visite du site et collecte des données" },
      { src: "/images/projects/nkongsamba-maire.jpg", caption: "Entretien avec le Maire de la Ville de Nkongsamba" },
    ],
  },
  {
    id: "hysacam",
    client: "Hysacam",
    category: "Assainissement",
    title: "Audit environnemental et social des installations et activités de l’Agence Hysacam de la ville d’Edéa",
    photos: [
      { src: "/images/projects/hysacam-collecte.jpg", caption: "Collecte des données" },
      { src: "/images/projects/hysacam-mairie.jpg", caption: "Entretien avec le maire de la commune d’Edéa 1er" },
    ],
  },
  {
    id: "ibis-hotel",
    client: "Ibis hôtel",
    category: "Tourisme",
    title: "Audit environnemental et social des installations et activités",
    photos: [
      { src: "/images/projects/ibis-mintoul.jpg", caption: "Entretien avec le délégué départemental du MINTOUL" },
      { src: "/images/projects/ibis-chefferie.jpg", caption: "Entretien à la chefferie du Canton Bell" },
    ],
  },
  {
    id: "tresor-hotel",
    client: "Complexe TRESOR hôtel",
    category: "Tourisme",
    title: "Consultations publiques et visite du site",
    photos: [
      { src: "/images/projects/tresor-consultation.jpg", caption: "Intervention du Sous-Préfet à la réunion de clôture des consultations publiques" },
      { src: "/images/projects/tresor-visite.jpg", caption: "Visite du site" },
    ],
  },
  {
    id: "halliburton",
    client: "HALLIBURTON",
    category: "Parapétrolière",
    title: "Audit environnemental et social",
    photos: [
      { src: "/images/projects/halliburton-visite.jpg", caption: "Visite du site et collecte de données" },
      { src: "/images/projects/halliburton-site.jpg", caption: "Évaluation environnementale du site" },
    ],
  },
];

const categories = ["Tous", ...Array.from(new Set(projects.map((project) => project.category)))];

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; caption: string; project: string } | null>(null);
  const t = useTranslate();
  const visibleProjects = activeCategory === "Tous"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    if (!selectedPhoto) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSelectedPhoto(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedPhoto]);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-8 border-b border-[#24320F]/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#70A030]">{t("Quelques réalisations")}</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#24320F] sm:text-4xl">{t("Des projets menés au plus près du terrain.")}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{t("Découvrez les missions conduites par EDEC aux côtés des entreprises, collectivités et acteurs locaux.")}</p>
          </div>
          <p className="text-sm font-semibold text-slate-500"><span className="text-2xl font-black text-[#24320F]">{visibleProjects.length.toString().padStart(2, "0")}</span> {t("projets affichés")}</p>
        </div>

        <div className="-mx-4 mt-7 flex gap-2 overflow-x-auto px-4 pb-3 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0" aria-label={t("Filtrer les réalisations")}>
          {categories.map((category) => {
            const count = category === "Tous" ? projects.length : projects.filter((project) => project.category === category).length;
            const active = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all ${active ? "border-[#24320F] bg-[#24320F] text-white shadow-lg shadow-[#24320F]/15" : "border-[#24320F]/10 bg-white text-slate-600 hover:border-[#80B040]/50 hover:text-[#24320F]"}`}
              >
                {t(category)}<span className={`text-xs ${active ? "text-[#C4E27A]" : "text-slate-400"}`}>{count.toString().padStart(2, "0")}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, delay: index * 0.025 }}
                className="group overflow-hidden rounded-[28px] border border-[#24320F]/10 bg-white shadow-[0_18px_55px_rgba(36,50,15,0.06)] transition-shadow hover:shadow-[0_28px_70px_rgba(36,50,15,0.13)]"
              >
                <div className="relative grid h-64 grid-cols-2 gap-1 overflow-hidden bg-[#E8EEDF]">
                  {project.photos.map((photo) => (
                    <button
                      key={photo.src}
                      type="button"
                      aria-label={t(`Agrandir : ${photo.caption || project.title}`)}
                      onClick={() => setSelectedPhoto({ ...photo, project: project.client })}
                      className={`group/photo relative min-h-0 overflow-hidden ${project.photos.length === 1 ? "col-span-2" : ""}`}
                    >
                      <Image src={photo.src} alt={t(photo.caption || project.title)} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover/photo:scale-105" />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50 transition-opacity group-hover/photo:opacity-90" />
                      {photo.caption && <span className="absolute inset-x-3 bottom-3 line-clamp-2 text-left text-xs font-semibold leading-5 text-white drop-shadow">{t(photo.caption)}</span>}
                    </button>
                  ))}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#70A030]">{t(project.client)}</p>
                    <span className="rounded-full bg-[#90C030]/10 px-3 py-1 text-[11px] font-semibold text-[#40551D]">{t(project.category)}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-7 text-[#24320F]">{t(project.title)}</h3>
                  <button
                    type="button"
                    onClick={() => setSelectedPhoto({ ...project.photos[0], project: project.client })}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#24320F] transition-colors hover:text-[#70A030]"
                  >
                    {t("Voir les photos")} <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#10190D]/90 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            role="dialog"
            aria-modal="true"
            aria-label={t(`Photo de réalisation ${selectedPhoto.project}`)}
          >
            <button type="button" aria-label={t("Fermer la photo")} className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl text-white hover:bg-white/20" onClick={() => setSelectedPhoto(null)}>×</button>
            <div className="relative h-[75vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
              <Image src={selectedPhoto.src} alt={t(selectedPhoto.caption || selectedPhoto.project)} fill sizes="90vw" className="rounded-2xl object-contain" />
              <p className="absolute -bottom-10 left-0 right-0 text-center text-sm font-medium text-white">{t(selectedPhoto.project)} · {t(selectedPhoto.caption)}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
