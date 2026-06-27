import type { Metadata } from "next";

import { SendEmailForm } from "@/components/SendEmailForm";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Email Client",
  description: "Compose and send emails dynamically using a Gmail account and App Password.",
};

export default function SendEmailPage() {
  return (
    <PageTransition>
      <PageHero
        kicker="Email Client"
        title="Send mail notifications via SMTP"
        image="https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-padding">
        <div className="container-shell max-w-4xl space-y-6 my-6">
          <Reveal>
            <SendEmailForm />
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
