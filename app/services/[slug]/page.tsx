import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components/site-shell";
import { getService, services } from "../service-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  return {
    title: service ? `${service.shortTitle} | EDEC` : "Service | EDEC",
    description: service?.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8FAF3] text-slate-900">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-[#24320F]/10 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,_rgba(144,192,48,0.18),_transparent_36%),radial-gradient(circle_at_92%_78%,_rgba(128,176,64,0.12),_transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-8">
          <div>
            <Link href="/services" className="inline-flex items-center text-sm font-semibold text-[#70A030] transition hover:text-[#24320F]">
              <span aria-hidden="true" className="mr-2">←</span> Tous les services
            </Link>
            <div className="mt-8 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#90C030]/15 text-sm font-black text-[#70A030]">{service.number}</span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#70A030]">Expertise EDEC</span>
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.055em] text-[#24320F] sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{service.summary}</p>
          </div>

          <div className="rounded-[28px] border border-[#24320F]/10 bg-[#24320F] p-6 text-white shadow-[0_24px_60px_rgba(36,50,15,0.15)] sm:p-8">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#A0C040]">Etes-vous concerné ?</div>
            <p className="mt-4 text-base leading-8 text-white/80">{service.concerned}</p>
            <Link href="/contact" className="mt-7 inline-flex items-center rounded-full bg-[#90C030] px-5 py-3 text-sm font-bold text-[#24320F] transition hover:bg-[#A0C040]">
              Parler à un expert <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <span className="inline-flex rounded-full border border-[#80B040]/30 bg-[#90C030]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#24320F]">Comprendre la mission</span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-[#24320F] sm:text-4xl">Une expertise pensée pour décider avec justesse.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">{service.definition}</p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex rounded-full border border-[#80B040]/30 bg-[#90C030]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#24320F]">Déroulement</span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-[#24320F] sm:text-4xl">Les étapes de notre intervention</h2>
            <div className="mt-8 space-y-3">
              {service.steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-[#24320F]/10 bg-white p-4 shadow-[0_12px_35px_rgba(36,50,15,0.04)] sm:p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#90C030]/15 text-xs font-black text-[#70A030]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="pt-1 text-sm font-semibold leading-6 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-[28px] bg-[#90C030]/[0.12] p-6 sm:p-8 lg:sticky lg:top-28">
            <span className="inline-flex rounded-full border border-[#80B040]/30 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#24320F]">Ce que vous recevez</span>
            <h2 className="mt-5 text-2xl font-black tracking-[-0.04em] text-[#24320F]">Des livrables directement exploitables.</h2>
            <ul className="mt-6 space-y-4">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#90C030] text-xs font-black text-[#24320F]">✓</span>
                  {deliverable}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#24320F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#40551D]">
              Demander un accompagnement
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-[#24320F] px-4 py-16 text-center text-white sm:px-6 lg:py-20">
        <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-[-0.05em] sm:text-4xl">Construisons une réponse adaptée à votre projet.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">Notre équipe vous aide à clarifier vos obligations, prioriser vos actions et sécuriser la suite de vos opérations.</p>
        <Link href="/contact" className="mt-8 inline-flex items-center rounded-full bg-[#90C030] px-6 py-3 text-sm font-bold text-[#24320F] transition hover:bg-[#A0C040]">Nous contacter</Link>
      </section>

      <SiteFooter />
    </main>
  );
}
