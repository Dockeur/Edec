import Link from "next/link";
import { PageHero, SectionIntro, SiteFooter, SiteHeader } from "../components/site-shell";

const values = [
  {
    title: "Professionnalisme",
    description:
      "Une équipe de professionnels au service d’un meilleur rapport entre développement, conformité et gestion des risques.",
  },
  {
    title: "Légalité & rigueur",
    description:
      "EDEC associe droit, légalité et professionnalisme pour accompagner les projets dans le respect des cadres réglementaires.",
  },
  {
    title: "Développement durable",
    description:
      "Une approche qui met la durabilité au centre des décisions et des actions de terrain pour une évolution responsable.",
  },
];

const pillars = [
  "Études d’impact environnemental et social",
  "Audit environnemental et social",
  "Conformité réglementaire",
  "Suivi de projets et accompagnement des acteurs",
  "Sensibilisation communautaire",
  "Formation QHSE",
];

export default function PresentationPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF3] text-slate-900">
      <SiteHeader />

      <PageHero
        badge="Présentation"
        title="Une équipe de professionnels au service de la qualité environnementale"
        description="Environment Development Engineering Consulting (EDEC), nous mettons nos experts à votre disposition afin de vous fournir des services de qualité."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Notre identité"
          title="Nous allions droit, légalité et professionnalisme pour vous servir"
          description="Le bureau repose sur un noyau de personnel permanent appuyé par des consultants extérieurs qualifiés, afin de garantir un accompagnement sérieux, technique et orienté résultats."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {values.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-[#80B040]/20 bg-white p-6 shadow-[0_20px_60px_rgba(36,50,15,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(36,50,15,0.1)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#90C030]/15 text-lg text-[#70A030]">✓</div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#24320F] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="overflow-hidden rounded-[30px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Consultants EDEC"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <SectionIntro
              eyebrow="Vision & Mission"
              title="Un cabinet d’ingénierie en Q.H.S.E d’excellence"
              description=""
              inverse
            />
            <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">
              <p>
                <span className="font-bold text-white">Vision :</span> Être un Cabinet d’Ingénierie en Q.H.S.E d’excellence offrant des prestations de qualité en matière d’études, d’audits, d’accompagnement et de sensibilisation.
              </p>
              <p>
                <span className="font-bold text-white">Mission :</span> Contribuer activement à l’émergence d’un développement durable au Cameroun, en mettant à la disposition des acteurs publics et privés des solutions pertinentes et performantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Nos domaines"
          title="Des compétences à la mesure des enjeux environnementaux et sociaux"
          description="Notre cabinet intervient dans les domaines clés du développement durable : conformité, évaluation, sécurité, sensibilisation, formation et accompagnement de terrain."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item) => (
            <div key={item} className="rounded-[24px] border border-[#24320F]/10 bg-white p-5 shadow-[0_16px_45px_rgba(36,50,15,0.04)]">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#90C030]/15 text-[#70A030]">•</div>
              <div className="text-lg font-semibold text-slate-900">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-9 text-slate-700">
            “EDEC est le partenaire de confiance pour les organisations qui veulent bâtir des projets sûrs, conformes et durables, tout en laissant une place réelle à la qualité, à la responsabilité et à l’humain.”
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/services" className="inline-flex items-center justify-center rounded-full bg-[#90C030] px-6 py-3 text-sm font-bold text-[#24320F] transition hover:bg-[#A0C040]">
              Voir nos services
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#24320F]/15 bg-white px-6 py-3 text-sm font-semibold text-[#24320F] transition hover:border-[#90C030] hover:bg-[#90C030]/5">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
