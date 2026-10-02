import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../components/motion";
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

const partners = [
  { name: "Schlumberger", logo: "/images/partner-inline-1.jpg" },
  { name: "IBIS", logo: "/images/partner-inline-2.jpg" },
  { name: "Solpia", logo: "/images/partner-inline-3.jpg" },
  { name: "Routd’Af", logo: "/images/partner-inline-4.jpg" },
  { name: "Brasaf — Brasseries Samuel Foyou", logo: "/images/partner-inline-5.jpg" },
  { name: "Halliburton", logo: "/images/partner-inline-6.png" },
  { name: "Trésor Hôtel", logo: "/images/partner-inline-7.png" },
  { name: "CICC — Conseil Interprofessionnel Cacao & Café", logo: "/images/partner-inline-8.png" },
  { name: "Transimex", logo: "/images/partner-1.png" },
  { name: "Road Vision", logo: "/images/partner-2.png" },
  { name: "Commune de Dibombari", logo: "/images/partner-3.png" },
  { name: "Partenaire institutionnel", logo: "/images/partner-4.png" },
  { name: "Commune de Yingui", logo: "/images/partner-5.jpg" },
  { name: "Soleil Cameroun — Crystal", logo: "/images/partner-6.png" },
];

export default function PresentationPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF3] text-slate-900">
      <SiteHeader />

      <PageHero
        badge="Présentation"
        title="Un cabinet camerounais engagé pour un développement durable"
        description="Créé en décembre 2014, Environment Development Engineering Consulting accompagne les organisations avec des prestations d’études, de conseil, d’audit et de formation."
        image="/images/hero/slide-2.jpeg"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Le cabinet EDEC"
          title="Une SARL de droit camerounais, créée en décembre 2014"
          description="Environment Development Engineering Consulting (EDEC) mobilise ses équipes et des consultants qualifiés pour accompagner les acteurs publics et privés dans leurs enjeux environnementaux et QHSE."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {values.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} hover>
            <div className="h-full rounded-[28px] border border-[#80B040]/20 bg-white p-6 shadow-[0_20px_60px_rgba(36,50,15,0.05)] transition duration-300 hover:shadow-[0_28px_64px_rgba(36,50,15,0.1)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#90C030]/15 text-lg text-[#70A030]">✓</div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[#24320F]/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <SectionIntro
              eyebrow="Agréments ministériels"
              title="Une expertise reconnue par les autorités compétentes."
              description="EDEC est agréé pour intervenir dans plusieurs domaines réglementés."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { acronym: "MINEPDED", scope: "Évaluations environnementales" },
                { acronym: "MINMIDT", scope: "Études de dangers et plans d’urgence" },
                { acronym: "MINEFOP", scope: "Formations QHSE" },
              ].map((item, index) => (
                <Reveal key={item.acronym} delay={index * 0.08} hover>
                  <article className="h-full rounded-[24px] border border-[#80B040]/20 bg-[#F8FAF3] p-5">
                    <span className="inline-flex rounded-full bg-[#90C030]/15 px-3 py-1 text-xs font-black tracking-[0.14em] text-[#24320F]">{item.acronym}</span>
                    <p className="mt-4 text-sm font-semibold leading-6 text-slate-700">{item.scope}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#24320F] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-[30px] border border-white/10">
            <Image
              src="/images/hero/slide-4.jpg"
              alt="Expert EDEC en visite de sécurité sur un site industriel"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
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
                <span className="font-bold text-white">Notre vision :</span> Être un Cabinet d’Ingénierie en Q.H.S.E d’excellence offrant des prestations de qualité en matière d’études, conseils, audits et formation.
              </p>
              <p>
                <span className="font-bold text-white">Notre mission :</span> Contribuer activement à l’émergence d’un développement durable au Cameroun en apportant notre expertise dans nos domaines d’intervention.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <h3 className="font-bold text-white">Consultants & équipe</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Le bureau repose sur un noyau de personnel permanent, appuyé par des consultants extérieurs qualifiés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F8FAF3] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#70A030]">Ils nous ont fait confiance</span>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-[#24320F] sm:text-4xl">Des partenaires de secteurs variés.</h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">Collectivités et entreprises nous confient leurs enjeux d’environnement, de sécurité et de développement durable.</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {partners.map((partner, index) => (
              <Reveal key={partner.name} delay={index * 0.06}>
                <div className="flex h-32 items-center justify-center rounded-2xl border border-[#24320F]/[0.07] bg-white p-4 grayscale transition duration-300 hover:grayscale-0 sm:h-36">
                  <Image src={partner.logo} alt={`Logo ${partner.name}`} width={320} height={180} className="max-h-full max-w-full object-contain" />
                </div>
                <p className="mt-2 text-center text-xs font-medium text-slate-500">{partner.name}</p>
              </Reveal>
            ))}
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
          {pillars.map((item, index) => (
            <Reveal key={item} delay={index * 0.06} hover>
            <div className="h-full rounded-[24px] border border-[#24320F]/10 bg-white p-5 shadow-[0_16px_45px_rgba(36,50,15,0.04)]">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#90C030]/15 text-[#70A030]">•</div>
              <div className="text-lg font-semibold text-slate-900">{item}</div>
            </div>
            </Reveal>
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
