import Link from "next/link";
import { Reveal } from "../components/motion";
import { PageHero, SectionIntro, SiteFooter, SiteHeader } from "../components/site-shell";
import { services } from "./service-data";

const serviceImages = [
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1511497584788-8767601113f4?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF3] text-slate-900">
      <SiteHeader />

      <PageHero
        badge="Services"
        title="Des services de qualité à la portée de tous"
        description="EDEC accompagne les organisations dans les domaines de l’environnement, de la sécurité, de la conformité et de la formation, avec des solutions adaptées à chaque contexte."
        image="/images/hero/slide-4.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Nos prestations"
          title="Une expertise globale à forte valeur ajoutée"
          description="Nous intervenons sur des missions de conseil, d’étude, d’audit, de sensibilisation et de formation, à l’échelle de projets publics et privés, locaux ou structurés."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.07} hover>
            <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#24320F]/10 bg-white shadow-[0_20px_60px_rgba(36,50,15,0.05)] transition duration-300 hover:shadow-[0_30px_80px_rgba(36,50,15,0.1)]">
              <div
                role="img"
                aria-label={`Illustration : ${service.shortTitle}`}
                className="relative h-48 overflow-hidden bg-cover bg-center sm:h-56"
                style={{ backgroundImage: `url(${serviceImages[index]})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#24320F]/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  {service.number}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{service.summary}</p>
                <Link href={`/services/${service.slug}`} className="mt-6 inline-flex w-fit items-center rounded-full border border-[#80B040]/30 px-4 py-2 text-sm font-bold text-[#24320F] transition hover:border-[#90C030] hover:bg-[#90C030]/10">
                  Consulter <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </div>
            </article>
            </Reveal>
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
              <Reveal key={item.step} delay={Number(item.step) * 0.06} hover>
              <div className="h-full rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#A0C040]/40">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#A0C040]">{item.step}</div>
                <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
              </Reveal>
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
