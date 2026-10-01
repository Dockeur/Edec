import Link from "next/link";
import { PageHero, SectionIntro, SiteFooter, SiteHeader } from "../components/site-shell";
import { services } from "./service-data";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF3] text-slate-900">
      <SiteHeader />

      <PageHero
        badge="Services"
        title="Des services de qualité à la portée de tous"
        description="EDEC accompagne les organisations dans les domaines de l’environnement, de la sécurité, de la conformité et de la formation, avec des solutions adaptées à chaque contexte."
        image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Nos prestations"
          title="Une expertise globale à forte valeur ajoutée"
          description="Nous intervenons sur des missions de conseil, d’étude, d’audit, de sensibilisation et de formation, à l’échelle de projets publics et privés, locaux ou structurés."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="group flex flex-col rounded-[28px] border border-[#24320F]/10 bg-white p-6 shadow-[0_20px_60px_rgba(36,50,15,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(36,50,15,0.1)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#90C030]/15 text-lg font-bold text-[#70A030]">
                {service.number}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.summary}</p>
              <Link href={`/services/${service.slug}`} className="mt-6 inline-flex w-fit items-center rounded-full border border-[#80B040]/30 px-4 py-2 text-sm font-bold text-[#24320F] transition hover:border-[#90C030] hover:bg-[#90C030]/10">
                Consulter <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#24320F] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Notre approche"
            title="Une méthode de travail simple, claire et efficace"
            description=""
            inverse
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { step: "01", title: "Analyse du contexte", text: "Étude du projet, des enjeux et du cadre réglementaire." },
              { step: "02", title: "Diagnostic", text: "Évaluation des impacts, risques, besoins et opportunités." },
              { step: "03", title: "Plan d’action", text: "Définition d’actions adaptées et concrètes pour le terrain." },
              { step: "04", title: "Suivi", text: "Accompagnement, mise en œuvre et sécurisation du projet." },
            ].map((item) => (
              <div key={item.step} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#A0C040]/40">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#A0C040]">{item.step}</div>
                <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-2xl font-semibold leading-relaxed text-slate-900">
          “Nous mettons notre expertise au service d’un développement responsable, en associant qualité, conformité, sécurité et durabilité.”
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#90C030] px-6 py-3 text-sm font-bold text-[#24320F] transition hover:bg-[#A0C040]">
            Demander un devis
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
