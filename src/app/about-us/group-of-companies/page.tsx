import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { PageHero } from '@/components/PageHero';
import { PageTransition } from '@/components/PageTransition';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { groupCompanies } from '@/lib/about-data';
import { ContactStrap } from '@/components/ContactStrap';

export const metadata: Metadata = {
  title: 'Group of Companies',
  description: 'Explore the group businesses that expand the DK Enterprise service ecosystem.',
};

export default function GroupOfCompaniesPage() {
  return (
    <PageTransition>
      <PageHero
        kicker="Group of Companies"
        title="A broader ecosystem designed to support enterprise operations end to end."
        description="Our group structure allows us to bring specialist capabilities into integrated programs without losing governance, speed, or accountability."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-padding">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              align="center"
              kicker="Business Portfolio"
              title="Specialist brands that strengthen our delivery model."
              description="Together, these businesses create deeper capability across security, environmental support, engineering, and workplace operations."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto justify-center">
            {groupCompanies.map((company, index) => (
              <Reveal key={company.name} className="h-full" delay={index * 0.06}>
                <div className="card-surface overflow-hidden group flex flex-col h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={company.image}
                      alt={company.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">Group Company</p>
                      <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">{company.name}</h3>
                      <p className="mt-4 text-sm leading-6 text-slate-600">{company.description}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-primary-dark">
                      <span>Integrated Capability</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
       <ContactStrap />
    </PageTransition>
  );
}
