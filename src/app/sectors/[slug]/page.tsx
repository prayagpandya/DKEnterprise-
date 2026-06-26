import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { getSectorBySlug } from "@/lib/content";
import { sectors } from "@/lib/sectors-data";
import { PageHero } from "@/components/PageHero";
import { ContactStrap } from "@/components/ContactStrap";
import { StatsSection } from "@/components/StatsSection";

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const sector = getSectorBySlug(params.slug);

  if (!sector) return { title: "Sector Not Found" };

  return {
    title: sector.title,
    description: sector.description,
  };
}

export default function SectorPage({ params }: { params: { slug: string } }) {
  const sector = getSectorBySlug(params.slug);

  if (!sector) notFound();

  return (
    <PageTransition>
      {/* ✅ HERO */}
      <PageHero title={sector.title} image={sector.image} />

      {/* ✅ STATS */}
      <StatsSection stats={sector.stats} />

      {/* ✅ INTRODUCTION SECTION (Modern 2-Column or Refined Left-Aligned) */}
      <section className="py-20  bg-white overflow-hidden">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="space-y-6">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                    Sector Overview
                  </span>
                  <h2 className="text-3xl md:text-5xl font-medium text-slate-900 leading-[1.15]">
                    {sector.title.includes("Solutions") ? sector.title.replace("Solutions", "") : sector.title} 
                    <span className="block text-primary">Service Excellence</span>
                  </h2>
                </div>
              </Reveal>
            </div>
            
            <div className="lg:col-span-7 lg:pl-12 border-l border-slate-100">
              <Reveal delay={0.2}>
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg md:text-xl">
                  {sector.description.split('\n\n').map((paragraph, i) => (
                    <p key={i}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ ALTERNATING FEATURE SECTIONS */}
      <div className="space-y-0">
        {sector.features.map((feature, index) => (
          <section 
            key={feature.title} 
            className={`py-20  ${index % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}
          >
            <div className="container-shell">
              <div className={`grid gap-16 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                {/* Image Section */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Reveal delay={0.2}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-2xl group">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Reveal>
                </div>

                {/* Content Section */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} space-y-8`}>
                  <Reveal>
                    <div className="space-y-6">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary font-medium text-xl">
                        0{index + 1}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
                        {feature.title}
                      </h3>
                      <div className="text-slate-600 leading-relaxed text-lg space-y-4">
                        {feature.description.split('\n\n').map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                      {feature.cta && (
                        <div className="pt-4">
                          <Link 
                            href="/contact-us" 
                            className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-primary hover:shadow-xl hover:-translate-y-1 active:scale-95 group"
                          >
                            {feature.cta}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ✅ WHY CHOOSE SECTION (Premium Cards) */}
      <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1),transparent_70%)]" />
        
        <div className="container-shell relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-primary font-medium tracking-widest uppercase text-sm">Why Choose Us</span>
                  <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                    {sector.kicker}
                  </h2>
                </div>
                <p className="text-slate-400 text-xl leading-relaxed">
                  DK Enterprise is committed to delivering reliable and compliant services. Our experience and structured approach ensure consistent performance across all facilities.
                </p>
                <div className="pt-6">
                  <Link href="/contact-us" className="text-primary font-medium flex items-center gap-2 hover:gap-4 transition-all">
                    Discuss your requirements <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid gap-6">
                {sector.advantages.map((advantage, index) => (
                  <div key={index} className="group flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:border-primary/50">
                    <div className="h-14 w-14 shrink-0 rounded-2xl bg-primary/20 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <span className="text-slate-200 text-lg md:text-xl font-medium">{advantage}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ✅ CLOSING CTA (Modern & Centered) */}
      {sector.closingCTA && (
        <section className="py-24 md:py-40 relative">
          <div className="container-shell">
            <Reveal>
              <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-20 text-center space-y-10 shadow-3xl relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

                <div className="relative z-10 space-y-6">
                  <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight">
                    {sector.closingCTA.title}
                  </h2>
                  <p className="text-slate-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                    {sector.closingCTA.description}
                  </p>
                </div>
                
                <div className="relative z-10 pt-4">
                  <Link 
                    href="/contact-us" 
                    className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-5 text-xl font-medium text-white transition-all hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 active:scale-95"
                  >
                    {sector.closingCTA.buttonText}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <ContactStrap />
    </PageTransition>
  );
}
