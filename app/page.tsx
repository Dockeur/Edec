import type { ReactNode } from "react";
import Link from "next/link";
import HomeSlides from "./components/home-slides";
import { Reveal } from "./components/motion";
import { SiteHeader } from "./components/site-shell";

const services = [
  {
    title: "Études d’impact environnemental et social",
    text: "Diagnostic précis et recommandations stratégiques pour sécuriser les projets et anticiper les impacts environnementaux et sociaux.",
  },
  {
    title: "Audits environnementaux et sociaux",
    text: "Évaluation des performances, conformité réglementaire et identification des points de vigilance dans les opérations existantes.",
  },
  {
    title: "Notice d’impact environnemental",
    text: "Appui à la préparation des dossiers administratifs avec une approche claire, méthodique et conforme aux exigences du cadre légal.",
  },
  {
    title: "PGES et mise en œuvre",
    text: "Planification et accompagnement de la mise en œuvre des mesures de gestion environnementale et sociale, de leur suivi et de leur performance.",
  },
  {
    title: "Sensibilisation communautaire",
    text: "Campagnes d’information et de sensibilisation pour renforcer la compréhension, l’adhésion et la concertation autour des projets.",
  },
  {
    title: "Études de dangers et plans d’urgence",
    text: "Identification des risques, élaboration des plans d’action et préparation de l’entreprise à la gestion des situations critiques.",
  },
];

const serviceImages = [
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1511497584788-8767601113f4?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1000&q=85",
];

const process = [
  { step: "01", title: "Analyse du contexte", text: "Étude du projet, du cadre réglementaire et des enjeux environnementaux et sociaux." },
  { step: "02", title: "Diagnostic & recommandations", text: "Évaluation des impacts, risques et leviers d’amélioration pour une meilleure décision." },
  { step: "03", title: "Plan d’action", text: "Mise en place d’un cadre opérationnel clair, réaliste et conforme aux exigences applicables." },
  { step: "04", title: "Suivi & accompagnement", text: "Aide à la mise en œuvre, au dépôt des dossiers et à la performance continue." },
];

const faqs = [
  { question: "Quel est le cœur de métier d’EDEC ?", answer: "EDEC intervient dans l’ingénierie environnementale, la QHSE, les études d’impact, les audits, les formations et l’accompagnement à la conformité." },
  { question: "EDEC accompagne-t-il les entreprises privées ?", answer: "Oui. Le cabinet accompagne aussi bien les entreprises, les collectivités, les promoteurs et les structures publiques dans leurs projets et leurs obligations réglementaires." },
  { question: "Proposez-vous des formations ?", answer: "Oui. EDEC dispense des formations en QHSE, environnement, sécurité et management de la conformité, adaptées au contexte des organisations." },
  { question: "Comment prendre contact ?", answer: "Vous pouvez nous écrire ou nous appeler directement via les coordonnées affichées dans la section contact de ce site." },
];

function Badge({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] ${inverse ? "border-[#A0C040]/30 bg-[#90C030]/15 text-[#A0C040]" : "border-[#80B040]/30 bg-[#90C030]/10 text-[#24320F]"}`}>
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAF3] text-slate-900">
      <SiteHeader id="accueil" />

      <HomeSlides />

      <section aria-labelledby="agrement-title" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge>Agréments ministériels</Badge>
          <h2 id="agrement-title" className="mt-5 text-3xl font-bold tracking-[-0.045em] text-[#24320F] sm:text-4xl">
            Agréé par les ministères compétents pour ses domaines d’intervention.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            {
              acronym: "MINEPDED",
              ministry: "Ministère de l’Environnement, de la Protection de la Nature et du Développement durable",
              scope: "la réalisation des évaluations environnementales.",
            },
            {
              acronym: "MINMIDT",
              ministry: "Ministère des Mines, de l’Industrie et du Développement Technologique",
              scope: "la réalisation des études de dangers et des plans d’urgence.",
            },
            {
              acronym: "MINEFOP",
              ministry: "Ministère de l’Emploi et de la Formation Professionnelle",
              scope: "la réalisation des formations QHSE.",
            },
          ].map((item, index) => (
            <Reveal key={item.acronym} delay={index * 0.1} hover>
            <article className="h-full rounded-[26px] border border-[#80B040]/20 bg-white p-6 shadow-[0_18px_45px_rgba(36,50,15,0.05)]">
              <div className="inline-flex rounded-full bg-[#90C030]/15 px-3 py-1 text-xs font-bold tracking-[0.16em] text-[#24320F]">
                {item.acronym}
              </div>
              <h3 className="mt-5 text-base font-bold leading-7 text-[#24320F]">{item.ministry}</h3>
              <p className="mt-4 border-t border-[#24320F]/10 pt-4 text-sm leading-7 text-slate-600">
                EDEC est agréé pour {item.scope}
              </p>
            </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="presentation" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal direction="left" className="relative min-h-[430px] overflow-hidden rounded-[32px] bg-[#24320F] shadow-[0_30px_80px_rgba(36,50,15,0.16)] sm:min-h-[560px]">
            <div
              role="img"
              aria-label="Forêt tropicale, écosystème à préserver"
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14200c]/85 via-[#14200c]/10 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-6">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#C4E27A]">Sur le terrain, au Cameroun</div>
              <p className="mt-2 text-lg font-semibold">Des solutions concrètes pour des projets plus responsables.</p>
            </div>
            <div className="absolute right-5 top-5 rounded-full border border-white/30 bg-[#F8FAF3] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#24320F] shadow-lg sm:right-7 sm:top-7">
              Expertise EDEC
            </div>
          </Reveal>

          <Reveal direction="right" className="py-4 lg:py-8">
            <Badge>Notre identité</Badge>
            <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-[-0.055em] text-[#24320F] sm:text-5xl">
              Faire grandir les projets, sans oublier leur impact.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              EDEC accompagne entreprises et collectivités de l’étude à l’action, en associant expertise environnementale, conformité et présence de proximité.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Études & audits", "QHSE", "Accompagnement terrain"].map((item) => (
                <span key={item} className="rounded-full border border-[#80B040]/25 bg-white px-4 py-2 text-sm font-semibold text-[#24320F] shadow-sm">{item}</span>
              ))}
            </div>
            <Link href="/presentation" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#24320F] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#40551D]">
              Découvrir EDEC <span aria-hidden="true" className="text-lg">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="realisations" className="bg-[#24320F] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <Badge inverse>Nos expertises</Badge>
              <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-[-0.055em] text-white sm:text-5xl">
                Des actions utiles, du terrain aux décisions.
              </h2>
            </div>
            <Link href="/services" className="inline-flex w-fit items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#A0C040] hover:bg-white/10">
              Tous nos services <span aria-hidden="true" className="text-lg">→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.07} hover>
                <Link href="/services" className="group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[28px] border border-white/15 bg-[#40551D] p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:min-h-[390px]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${serviceImages[index]})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10190b]/95 via-[#10190b]/35 to-transparent transition-colors duration-500 group-hover:from-[#10190b]/90" />
                  <div className="relative z-10">
                    <span className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] backdrop-blur-sm">
                      Expertise 0{index + 1}
                    </span>
                    <h3 className="max-w-sm text-2xl font-bold leading-tight">{service.title}</h3>
                    <p className="mt-3 line-clamp-2 max-w-md text-sm leading-6 text-white/80">{service.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#C4E27A]">En savoir plus <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge>Notre méthode</Badge>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
              Une approche claire, rigoureuse et orientée résultats.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            Chaque mission est conçue pour transformer les enjeux en actions concrètes, avec une logique de conformité, de sécurité et de durabilité.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <Reveal key={item.step} delay={Number(item.step) * 0.06} hover>
              <div className="h-full rounded-[28px] border border-[#80B040]/20 bg-white p-6 shadow-[0_20px_50px_rgba(36,50,15,0.04)]">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#70A030]">{item.step}</div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="domaines" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge>Domaines d’intervention</Badge>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.045em] text-[#24320F] sm:text-4xl">
              Des compétences en Q.H.S.E et en développement durable.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Ingénierie Q.H.S.E",
                text: "Une équipe de professionnels et des experts mobilisés pour fournir des services de qualité en Q.H.S.E.",
              },
              {
                title: "Études et accompagnement",
                text: "Des prestations d’études et un accompagnement adaptés aux besoins des projets.",
              },
              {
                title: "Développement durable",
                text: "Un partenaire pour accompagner la transition vers un développement durable.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1} hover>
              <article className="h-full rounded-[26px] border border-[#80B040]/20 bg-[#F8FAF3] p-6 shadow-[0_18px_45px_rgba(36,50,15,0.04)]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#90C030]/15 text-sm font-bold text-[#70A030]">0{index + 1}</div>
                <h3 className="text-xl font-bold text-[#24320F]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="formations" className="bg-[#90C030]/[0.08] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <Badge>Formation</Badge>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
              Former pour mieux prévenir, mieux piloter et mieux agir.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              EDEC propose des formations en QHSE et environnement pour renforcer les compétences des équipes et rendre les organisations plus responsables, plus sûres et plus efficaces.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Formation QHSE",
              "Sensibilisation environnementale",
              "Prévention des risques",
              "Management de la conformité",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.08} hover>
              <div className="h-full rounded-[24px] border border-[#80B040]/20 bg-white p-5 shadow-[0_18px_50px_rgba(36,50,15,0.05)]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#90C030]/15 text-[#70A030]">+</div>
                <div className="text-lg font-bold text-slate-900">{item}</div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#24320F] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-white/4 p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <Badge inverse>FAQ</Badge>
                <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
                  Questions fréquentes.
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#90C030] px-5 py-3 text-sm font-bold text-[#24320F] transition hover:bg-[#A0C040]"
              >
                Parler à un expert
              </Link>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq, index) => (
                <Reveal key={faq.question} delay={index * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-base font-semibold text-white">{faq.question}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{faq.answer}</p>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-gradient-to-br from-[#24320F] to-[#40551D] p-8 text-white shadow-[0_30px_80px_rgba(36,50,15,0.2)] sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <Badge inverse>Contact</Badge>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
                Besoin d’un accompagnement sur votre projet ?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/75">
                EDEC vous aide à sécuriser vos décisions, renforcer votre conformité et construire des projets plus responsables et plus durables.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-sm uppercase tracking-[0.22em] text-[#A0C040]">Coordonnées</div>
              <div className="mt-5 space-y-4 text-sm text-white/80">
                <p>Tél. : 698 576 620 / 233 370 208</p>
                <p>Email : cabinet_edec@edec-engineering.com</p>
                <p>Adresse : Beedi, Immeuble Saker, 3e étage, Douala - Cameroun</p>
                <p>BP : 24145</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#24320F]/10 bg-[#F8FAF3]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="font-semibold text-slate-800">© 2023 EDEC. Tous droits réservés.</div>
          <div className="flex flex-wrap gap-5">
            <Link href="/" className="transition hover:text-[#70A030]">Accueil</Link>
            <Link href="/presentation" className="transition hover:text-[#70A030]">Présentation</Link>
            <Link href="/services" className="transition hover:text-[#70A030]">Services</Link>
            <Link href="/contact" className="transition hover:text-[#70A030]">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
