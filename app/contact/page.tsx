import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../components/site-shell";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF3] text-slate-900">
      <SiteHeader />

      <PageHero
        badge="Contact"
        title="Contactez EDEC pour votre prochain projet"
        description="Nous sommes à votre disposition pour vous écouter, comprendre vos besoins et vous proposer des solutions concrètes et adaptées à votre contexte."
        image="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-[#80B040]/20 bg-white p-8 shadow-[0_25px_70px_rgba(36,50,15,0.06)]">
            <h2 className="text-2xl font-black tracking-[-0.05em] text-slate-900">Informations de contact</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p><span className="font-bold text-slate-900">Tél. :</span> 698 576 620 / 233 370 208</p>
              <p><span className="font-bold text-slate-900">Email :</span> cabinet_edec@edec-engineering.com</p>
              <p><span className="font-bold text-slate-900">Adresse :</span> Beedi (Immeuble Saker, 3ème étage), Douala - Cameroun</p>
              <p><span className="font-bold text-slate-900">BP :</span> 24145</p>
            </div>

            <div className="mt-8 rounded-[24px] bg-[#90C030]/[0.1] p-5">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#70A030]">Disponibilité</div>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Nous vous répondons rapidement et sommes à l’écoute pour les projets, les demandes de consultation, les dossiers réglementaires et les formations.
              </p>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#24320F]/10 bg-white p-8 shadow-[0_25px_70px_rgba(36,50,15,0.06)]">
            <h2 className="text-2xl font-black tracking-[-0.05em] text-slate-900">Envoyer un message</h2>
            <form className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Nom complet</label>
                <input type="text" placeholder="Votre nom" className="w-full rounded-2xl border border-[#24320F]/15 bg-[#F8FAF3] px-4 py-3 text-slate-900 outline-none transition focus:border-[#70A030] focus:bg-white" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input type="email" placeholder="votre@email.com" className="w-full rounded-2xl border border-[#24320F]/15 bg-[#F8FAF3] px-4 py-3 text-slate-900 outline-none transition focus:border-[#70A030] focus:bg-white" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Objet</label>
                <input type="text" placeholder="Objet de votre demande" className="w-full rounded-2xl border border-[#24320F]/15 bg-[#F8FAF3] px-4 py-3 text-slate-900 outline-none transition focus:border-[#70A030] focus:bg-white" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea rows={5} placeholder="Décrivez votre besoin..." className="w-full rounded-2xl border border-[#24320F]/15 bg-[#F8FAF3] px-4 py-3 text-slate-900 outline-none transition focus:border-[#70A030] focus:bg-white" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[#90C030] px-6 py-3 text-sm font-bold text-[#24320F] shadow-[0_10px_28px_rgba(144,192,48,0.2)] transition hover:-translate-y-0.5 hover:bg-[#A0C040]">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[30px] bg-gradient-to-br from-[#24320F] to-[#40551D] p-8 text-white shadow-[0_30px_80px_rgba(36,50,15,0.2)] sm:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#A0C040]">EDEC</div>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white">Rejoignez EDEC dès aujourd’hui</h2>
              </div>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
