import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeSlides from "./components/home-slides";
import MobileNav from "./components/mobile-nav";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Présentation", href: "/presentation" },
  { label: "Services", href: "/services" },
  { label: "Réalisation", href: "#realisations" },
  { label: "Contact", href: "/contact" },
];

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
      <header id="accueil" className="sticky top-0 z-50 border-b border-[#24320F]/10 bg-[#F8FAF3]/95 shadow-[0_8px_32px_rgba(36,50,15,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/edec.png"
              alt="Logo EDEC"
              width={144}
              height={56}
              className="h-12 w-28 object-contain sm:h-14 sm:w-36"
              sizes="(max-width: 640px) 112px, 144px"
            />
          </Link>

          <nav className="hidden items-center gap-5 text-[11px] font-medium text-[#24320F] sm:gap-6 sm:text-sm md:flex md:gap-7">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="whitespace-nowrap py-1 transition-colors hover:text-[#70A030]">
                {item.label}
              </Link>
            ))}
          </nav>

          <MobileNav items={navItems} />

          <Link
            href="/contact"
            className="hidden items-center justify-center rounded-full bg-[#90C030] px-4 py-2.5 text-xs font-bold text-[#24320F] shadow-[0_8px_24px_rgba(144,192,48,0.22)] transition hover:-translate-y-0.5 hover:bg-[#A0C040] sm:inline-flex sm:text-sm"
          >
            Demander un devis
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,_rgba(144,192,48,0.18),_transparent_35%),radial-gradient(circle_at_90%_78%,_rgba(128,176,64,0.12),_transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <HomeSlides />
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-36 w-36 rounded-full bg-[#A0C040]/40 blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-[#90C030]/45 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-[#24320F]/10 bg-white p-2.5 shadow-[0_30px_80px_rgba(36,50,15,0.14)] sm:p-3">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Équipe en réunion de travail"
                className="h-[330px] w-full rounded-[24px] object-cover sm:h-[420px] lg:h-[500px]"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-[24px] border border-white/20 bg-slate-950/60 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between text-white/80">
                  <span className="text-xs uppercase tracking-[0.2em]">EDEC</span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em]">
                    QHSE
                  </span>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-100">
                  <div>Études d’impact environnemental et social</div>
                  <div>Audits environnementaux et conformité réglementaire</div>
                  <div>Formation QHSE et sensibilisation communautaire</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          ].map((item) => (
            <article key={item.acronym} className="rounded-[26px] border border-[#80B040]/20 bg-white p-6 shadow-[0_18px_45px_rgba(36,50,15,0.05)]">
              <div className="inline-flex rounded-full bg-[#90C030]/15 px-3 py-1 text-xs font-bold tracking-[0.16em] text-[#24320F]">
                {item.acronym}
              </div>
              <h3 className="mt-5 text-base font-bold leading-7 text-[#24320F]">{item.ministry}</h3>
              <p className="mt-4 border-t border-[#24320F]/10 pt-4 text-sm leading-7 text-slate-600">
                EDEC est agréé pour {item.scope}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="presentation" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[30px] border border-[#80B040]/20 bg-white p-8 shadow-[0_24px_60px_rgba(36,50,15,0.05)] sm:p-10">
            <Badge>Notre identité</Badge>
            <h2 className="mt-6 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
              Un bureau d’expertise au service de la conformité et de la durabilité.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              EDEC allie droit, légalité et professionnalisme pour accompagner les organisations dans leurs projets, leurs obligations environnementales et leurs ambitions de développement durable.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Reposant sur un noyau de personnel permanent appuyé par des consultants extérieurs qualifiés, le cabinet met à disposition des experts capables d’apporter des réponses concrètes et adaptées.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#90C030]/[0.1] p-4">
                <div className="text-sm font-bold text-[#24320F]">Expertise</div>
                <p className="mt-2 text-sm text-slate-600">Approche technique, réglementaire et opérationnelle.</p>
              </div>
              <div className="rounded-2xl bg-[#24320F] p-4 text-white">
                <div className="text-sm font-bold">Confiance</div>
                <p className="mt-2 text-sm text-slate-200">Des prestations structurées et un accompagnement de proximité.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Évaluation environnementale",
              "QHSE & conformité",
              "Études de dangers",
              "Formation des acteurs",
              "Sensibilisation & communication",
              "Pilotage de projets durables",
            ].map((item) => (
              <div key={item} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.03)] transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,23,42,0.06)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#90C030]/15 text-lg text-[#70A030]">✓</div>
                <h3 className="text-lg font-bold text-slate-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="realisations" className="bg-[#24320F] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge inverse>Nos services</Badge>
            <h2 className="mt-6 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
              Des prestations pensées pour la performance, la conformité et la durabilité.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#A0C040]/50 hover:bg-white/[0.07]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#90C030]/15 text-lg font-bold text-[#A0C040]">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{service.text}</p>
              </article>
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
              <div key={item.step} className="rounded-[28px] border border-[#80B040]/20 bg-white p-6 shadow-[0_20px_50px_rgba(36,50,15,0.04)]">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#70A030]">{item.step}</div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
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
              <article key={item.title} className="rounded-[26px] border border-[#80B040]/20 bg-[#F8FAF3] p-6 shadow-[0_18px_45px_rgba(36,50,15,0.04)]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#90C030]/15 text-sm font-bold text-[#70A030]">0{index + 1}</div>
                <h3 className="text-xl font-bold text-[#24320F]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
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
            ].map((item) => (
              <div key={item} className="rounded-[24px] border border-[#80B040]/20 bg-white p-5 shadow-[0_18px_50px_rgba(36,50,15,0.05)]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#90C030]/15 text-[#70A030]">+</div>
                <div className="text-lg font-bold text-slate-900">{item}</div>
              </div>
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
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-base font-semibold text-white">{faq.question}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{faq.answer}</p>
                </div>
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
          <div className="font-semibold text-slate-800">© 2025 EDEC. Tous droits réservés.</div>
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
