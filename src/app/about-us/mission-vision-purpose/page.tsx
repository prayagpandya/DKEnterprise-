import type { Metadata } from 'next';

import { AlternatingSection } from '@/components/AlternatingSection';
import { PageHero } from '@/components/PageHero';
import { PageTransition } from '@/components/PageTransition';
import { missionVisionPurpose } from '@/lib/about-data';
import { ContactStrap } from '@/components/ContactStrap';

export const metadata: Metadata = {
  title: 'Mission, Vision & Purpose',
  description: 'Discover the mission, vision, and purpose that guide DK Enterprise.',
};

const images = [
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  '/assets/images/generated/our_mission.png',
  'https://images.unsplash.com/photo-1554734867-03c0049d7943?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
];

export default function MissionVisionPurposePage() {
  return (
    <PageTransition>
      <PageHero
        title="Our Guiding Principles"
        description="Defining the path forward for our partners and our people."
        image="/assets/images/hero_about.png"
      />

      <section className="section-padding">
        <div className="container-shell space-y-16">
          {missionVisionPurpose.map((item, index) => (
            <div
              key={item.title}
              className={`overflow-hidden rounded-[2rem] bg-gradient-to-br ${
                index % 2 === 0 ? 'from-primary/10 via-primary-soft to-white' : 'from-slate-50 via-white to-primary/5'
              } p-6 sm:p-8 lg:p-10`}
            >
              <AlternatingSection
                title={item.title}
                description={item.description}
                image={images[index] ?? images[0]}
                reverse={index % 2 === 1}
                bullets={['People-first culture', 'Disciplined delivery systems', 'Long-term client partnership mindset']}
              />
            </div>
          ))}
        </div>
      </section>
       <ContactStrap />
    </PageTransition>
  );
}
