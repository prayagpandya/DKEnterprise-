import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

import { AlternatingSection } from "@/components/AlternatingSection";
import { HeroCarousel } from "@/components/HeroCarousel";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsSection } from "@/components/StatsSection";
import { TabbedShowcase } from "@/components/TabbedShowcase";
import {
  companyStats,
  heroSlides,
  sustainabilityHighlights,
} from "@/lib/home-data";
import { getAbsoluteUrl } from "@/lib/utils";
import { services } from "@/lib/services-data";
import { sectors } from "@/lib/sectors-data";
import { SectorCarousel } from "@/components/SectorCarousel";
import Saperator from "@/components/Saperator";
import { ContactStrap } from "@/components/ContactStrap";

const servicesForCarousel = services.map((service) => ({
  tag: "Service",
  title: service.title,
  description: service.description.split(". ").slice(0, 3).join(". ") + "...",
  image: service.thumbnailImage || service.image,
  href: `/services/${service.slug}`,
}));

const sectorsForCarousel = sectors.map((sector) => ({
  tag: "Sector",
  title: sector.title,
  description: sector.description.split(". ").slice(0, 3).join(". ") + "...",
  image: sector.thumbnailImage || sector.image,
  href: `/sectors/${sector.slug}`,
}));
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DK Enterprise",
  url: getAbsoluteUrl(),
  description:
    "DK Enterprise delivers integrated facility management, security services, and environmental support across critical sectors.",
  areaServed: "India",
  knowsAbout: [
    "Facility Management",
    "Security Services",
    "Environmental Support",
    "Integrated Operations",
  ],
};

export default function HomePage() {
  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroCarousel slides={heroSlides} />
      <StatsSection stats={companyStats} />
      <Saperator />
      <TabbedShowcase />
      <Saperator />

      <section className="section-padding bg-slate-50">
        <div className="container-shell">
          <SectionHeading
            kicker="Our Services"
            title="Comprehensive solutions for complex environments."
            align="center"
          />
          <SectorCarousel sectors={servicesForCarousel} />
        </div>
      </section>

      {/* <section className="section-padding">
        <div className="container-shell">
          <SectionHeading
            kicker="Sectors We Serve"
            title="Tailored expertise for critical industry verticals."
            align="center"
          />
          <SectorCarousel sectors={sectorsForCarousel} />
        </div>
      </section> */}
       <ContactStrap />
    </PageTransition>
  );
}
