import messages from "@/messages/es.json";
import { discordInviteUrl, siteUrl } from "./lib/site";
import { Header } from "./components/header";
import {
  CompanySection,
  FinalCta,
  Footer,
  HeroSection,
  HowItWorksSection,
  NetworkingSection,
  NewsSection,
  NewsletterSection,
  TalentSection,
  TestimonialsSection,
  TournamentSection,
} from "./components/landing-sections";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechToJob",
  url: siteUrl,
  logo: `${siteUrl}/brand/techtojob-v1-negative.svg`,
  description: messages.footer.description,
  sameAs: [
    discordInviteUrl,
    "https://www.linkedin.com/company/techtojob/",
    "https://x.com/techtojob",
    "https://instagram.com/techtojob",
  ],
};

export default function Home() {
  return (
    <>
      <Header labels={messages.nav} joinLabel={messages.actions.joinDiscord} />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <TalentSection />
        <CompanySection />
        <TournamentSection />
        <NetworkingSection />
        <TestimonialsSection />
        <NewsSection />
        <NewsletterSection />
        <FinalCta />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}
