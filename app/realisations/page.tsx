import type { Metadata } from "next";
import ProjectsGallery from "../components/projects-gallery";
import { PageHero, SiteFooter, SiteHeader } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Nos réalisations | EDEC",
  description:
    "Découvrez les projets d’EDEC en environnement, QHSE, études d’impact, audits et accompagnement des organisations au Cameroun.",
};

export default function RealisationsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF3] text-slate-900">
      <SiteHeader />
      <PageHero
        badge="Nos réalisations"
        title="Des projets concrets, au plus près du terrain"
        description="Études, audits, formations et accompagnement : découvrez quelques missions menées par EDEC avec des entreprises, des collectivités et des acteurs locaux."
        image="/images/hero/slide-4.jpg"
      />
      <ProjectsGallery />
      <SiteFooter />
    </main>
  );
}
