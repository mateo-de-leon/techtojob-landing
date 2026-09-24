import messages from "@/messages/es.json";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Avatar, ButtonLink, Logo, Metric, Reveal, SectionHeading } from "./ui";
import { ConnectionNetwork, ProfileCard, TalentActivityCard, TournamentCard, VacancyCard } from "./visuals";
import { NewsletterForm } from "./newsletter-form";
import { TestimonialsCarousel } from "./testimonials-carousel";
import { discordInviteUrl } from "../lib/site";
import { SignalField } from "./signal-field";

export function HeroSection() {
  const { hero, stats } = messages;
  const [before, after] = hero.title.split(hero.highlight);

  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <ConnectionNetwork labels={hero.networkNodes} />
      <div className="hero-orb orb-a" />
      <div className="hero-orb orb-b" />
      <SignalField labels={hero.networkNodes} ticker={hero.signalTicker} />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-dot"><span />{hero.eyebrow}</p>
          <h1 id="hero-title">{before}<em>{hero.highlight}</em>{after}</h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            <ButtonLink href={discordInviteUrl} external>{messages.actions.joinDiscord}</ButtonLink>
            <a className="text-link" href="#how-it-works">{messages.actions.learnMore}<span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-secondary"><span>✦</span>{hero.secondary}</p>
          <div className="hero-scroll-cue">
            <span>{hero.scrollCue}</span>
            <i aria-hidden="true" />
          </div>
        </div>
        <div className="hero-visual">
          <Image
            className="hero-brand-symbol"
            src="/brand/techtojob-symbol-gradient.svg"
            alt=""
            width={58}
            height={58}
            aria-hidden="true"
          />
          <div className="visual-label"><span className="signal-bars" />{hero.networkLabel}</div>
          <ProfileCard profile={hero.profile} />
          <span className="floating-label label-talent">{hero.floatingLabels.profile}</span>
          <span className="floating-label label-company">{hero.floatingLabels.opportunity}</span>
          <span className="floating-label label-project">{hero.floatingLabels.project}</span>
        </div>
      </div>
      <div className="container stats-row">
        {stats.map((stat) => <Metric key={stat.value} value={stat.value} label={stat.label} />)}
        <span className="stats-note">{messages.brand.descriptor}<br />{messages.brand.name}</span>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const section = messages.howItWorks;
  return (
    <section className="section how-section" id="how-it-works" aria-labelledby="how-title">
      <div className="container">
        <SectionHeading headingId="how-title" eyebrow={section.eyebrow} title={section.title} description={section.description} />
        <div className="journey" aria-label={section.title}>
          <div className="journey-line"><span /></div>
          {section.steps.map((step, index) => (
            <Reveal className="journey-step" delay={index * 90} key={step.number}>
              <div className="journey-node"><span>{step.number}</span></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlatformSection() {
  const section = messages.platform;
  return (
    <section className="section platform-section" id="platform" aria-labelledby="platform-title">
      <div className="container">
        <div className="platform-header">
          <SectionHeading headingId="platform-title" eyebrow={section.eyebrow} title={section.title} description={section.description} />
          <div className="platform-mark" aria-hidden="true"><span /><span /><span /><span /></div>
        </div>
        <div className="platform-grid">
          <Reveal className="platform-layers">
            {section.layers.map((layer, index) => (
              <article className="layer-card" key={layer.number}>
                <span className="layer-number">{layer.number}</span>
                <div><h3>{layer.title}</h3><p>{layer.text}</p></div>
                <span className={`layer-signal layer-signal-${index + 1}`} />
              </article>
            ))}
          </Reveal>
          <Reveal className="activity-console" delay={140}>
            <div className="console-header"><span className="console-lights"><i /><i /><i /></span><span>{section.console.label}</span><strong><i />{section.console.status}</strong></div>
            <div className="console-map"><div className="console-map-grid" /><div className="console-orbit orbit-a" /><div className="console-orbit orbit-b" /><span className="console-core" /><span className="console-node console-node-a" /><span className="console-node console-node-b" /><span className="console-node console-node-c" /></div>
            <div className="console-events">
              {section.console.events.map((event) => <div className="console-event" key={event.time}><time>{event.time}</time><span className={`event-type event-${event.type}`} /> <p>{event.event}</p><span className="event-arrow">↗</span></div>)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function TalentSection() {
  const section = messages.talent;
  return (
    <section className="section split-section talent-section" id="talent" aria-labelledby="talent-title">
      <div className="container split-grid">
        <Reveal className="split-copy">
          <SectionHeading headingId="talent-title" eyebrow={section.eyebrow} title={section.title} description={section.description} />
          <div className="feature-list feature-list-two">
            {section.features.map((feature, index) => (
              <div className="feature-item" key={feature.label}>
                <span className="feature-number">0{index + 1}</span>
                <div><h3>{feature.label}</h3><p>{feature.text}</p></div>
              </div>
            ))}
          </div>
          <ButtonLink href={discordInviteUrl} external variant="ghost">{messages.actions.publishProfile}</ButtonLink>
        </Reveal>
        <Reveal className="split-visual" delay={150}>
          <div className="visual-index">{section.visualIndex}</div>
          <TalentActivityCard card={section.card} />
          <div className="orbit-note note-one">{section.features[0]?.label}<span>×</span></div>
          <div className="orbit-note note-two">{section.features[4]?.label}<span>+</span></div>
        </Reveal>
      </div>
    </section>
  );
}

export function CompanySection() {
  const section = messages.companies;
  return (
    <section className="section split-section company-section" id="companies" aria-labelledby="companies-title">
      <div className="container split-grid split-grid-reverse">
        <Reveal className="split-visual company-visual" delay={100}>
          <div className="visual-index">{section.visualIndex}</div>
          <VacancyCard vacancy={section.vacancy} />
          <div className="connection-caption"><span className="caption-line" />{section.vacancy.match}</div>
        </Reveal>
        <Reveal className="split-copy">
          <SectionHeading headingId="companies-title" eyebrow={section.eyebrow} title={section.title} description={section.description} />
          <div className="feature-list">
            {section.features.map((feature, index) => (
              <div className="feature-item" key={feature.label}>
                <span className="feature-number">0{index + 1}</span>
                <div><h3>{feature.label}</h3><p>{feature.text}</p></div>
              </div>
            ))}
          </div>
          <ButtonLink href={discordInviteUrl} external variant="primary">{messages.actions.publishJob}</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}

export function TournamentSection() {
  const section = messages.tournaments;
  return (
    <section className="section tournament-section" id="tournaments" aria-labelledby="tournaments-title">
      <div className="container">
        <div className="section-topline">
          <SectionHeading headingId="tournaments-title" eyebrow={section.eyebrow} title={section.title} description={section.description} />
          <ButtonLink href={discordInviteUrl} external variant="ghost">{messages.actions.seeTournament}</ButtonLink>
        </div>
        <Reveal className="tournament-layout">
          <TournamentCard tournament={section.card} />
          <div className="tournament-benefits">
            {section.benefits.map((benefit, index) => (
              <div className="benefit-card" key={benefit.title}>
                <span className="benefit-index">0{index + 1}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function NetworkingSection() {
  const section = messages.networking;
  return (
    <section className="section networking-section" id="networking" aria-labelledby="networking-title">
      <div className="container">
        <SectionHeading headingId="networking-title" eyebrow={section.eyebrow} title={section.title} description={section.description} />
        <div className="networking-layout">
          <Reveal className="channels-card">
            <div className="channels-head"><span>{section.activity.label}</span><span className="channel-count">{section.activity.channelCount}</span></div>
            <div className="channel-grid">
              {section.channels.map((channel, index) => (
                <a className={`channel-item channel-item-${index + 1}`} href={discordInviteUrl} target="_blank" rel="noreferrer" key={channel.name}>
                  <span className="channel-dot" />
                  <span><strong>{channel.name}</strong><small>{channel.detail}</small></span>
                  <span className="channel-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <ButtonLink href={discordInviteUrl} external variant="dark">{messages.actions.exploreChannels}</ButtonLink>
          </Reveal>
          <Reveal className="activity-feed" delay={130}>
            <div className="feed-window-bar"><span /><span /><span /><em>{section.activity.feedPath}</em></div>
            <div className="feed-title"><span className="live-dot" />{section.activity.label}<strong>{section.activity.status}</strong></div>
            <div className="feed-messages">
              {section.activity.messages.map((message, index) => (
                <div className="feed-message" key={message.author} style={{ "--message-delay": `${index * 700}ms` } as CSSProperties}>
                  <Avatar initials={message.author.slice(0, 2).toUpperCase()} tone={index === 1 ? "orange" : index === 2 ? "violet" : "aqua"} />
                  <div><strong>{message.author}</strong><p>{message.text}</p></div>
                </div>
              ))}
            </div>
            <div className="feed-footer"><span>⌁</span> {section.activity.feedStatus} <span className="feed-cursor">_</span></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const section = messages.testimonials;
  return (
    <section className="section testimonials-section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading headingId="testimonials-title" eyebrow={section.eyebrow} title={section.title} description={section.description} />
        <TestimonialsCarousel items={section.items} exampleLabel={section.exampleLabel} />
        <div className="testimonials-grid">
          {section.items.map((item, index) => (
            <Reveal className={`testimonial-card testimonial-card-${index + 1}`} delay={index * 70} key={item.name}>
              <div className="quote-mark">“</div>
              <div className="testimonial-meta"><span>{section.exampleLabel}</span><span className="testimonial-rating" aria-label="5 de 5 estrellas">★★★★★</span></div>
              <p className="testimonial-quote">{item.quote}</p>
              <div className="testimonial-person"><Avatar initials={item.initials} tone={index % 3 === 0 ? "aqua" : index % 3 === 1 ? "orange" : "violet"} /><div><strong>{item.name}</strong><span>{item.role}</span></div><a href="#testimonials" aria-label={`${messages.actions.viewProfile}: ${item.name}`}>↗</a></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsSection() {
  const section = messages.news;
  return (
    <section className="section news-section" id="news" aria-labelledby="news-title">
      <div className="container">
        <div className="section-topline">
          <SectionHeading headingId="news-title" eyebrow={section.eyebrow} title={section.title} description={section.description} />
          <span className="news-counter">{section.counter}</span>
        </div>
        <div className="news-grid">
          {section.items.map((item, index) => (
            <Reveal className="news-card" delay={index * 100} key={item.title}>
              <div className="news-card-meta"><span>{item.category}</span><time dateTime={`2026-09-${String(7 - index * 2).padStart(2, "0")}`}>{item.date}</time></div>
              <span className="news-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <a href="#news" className="news-link">{messages.actions.readArticle}<span aria-hidden="true">↗</span></a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  const section = messages.newsletter;
  return (
    <section className="newsletter-section" id="newsletter" aria-labelledby="newsletter-title">
      <div className="container newsletter-layout">
        <div>
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 id="newsletter-title">{section.title}</h2>
          <p>{section.description}</p>
        </div>
        <NewsletterForm
          emailLabel={section.emailLabel}
          placeholder={section.placeholder}
          consent={section.consent}
          success={section.success}
          error={section.error}
          submitLabel={messages.actions.subscribe}
        />
      </div>
    </section>
  );
}

export function FinalCta() {
  const section = messages.closing;
  return (
    <section className="final-cta" aria-labelledby="closing-title">
      <ConnectionNetwork labels={messages.hero.networkNodes} variant="closing" />
      <div className="container final-cta-inner">
        <div className="final-copy">
          <p className="eyebrow eyebrow-dot"><span />{section.eyebrow}</p>
          <h2 id="closing-title">{section.title}</h2>
          <p>{section.description}</p>
          <ButtonLink href={discordInviteUrl} external>{messages.actions.joinDiscord}</ButtonLink>
        </div>
        <div className="final-path" aria-label={section.aside}>
          {section.aside.split(" → ").map((step, index) => <span key={step}><i>{String(index + 1).padStart(2, "0")}</i>{step}</span>)}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const footer = messages.footer;
  const groups = [
    { data: footer.groups.talent, hrefs: ["#how-it-works", "#talent", "#tournaments"] },
    { data: footer.groups.companies, hrefs: ["#companies", "#tournaments", "#companies"] },
    { data: footer.groups.community, hrefs: ["#networking", "#testimonials", "#news"] },
    { data: footer.groups.resources, hrefs: ["#newsletter", "#legal", "#networking"] },
  ];

  return (
    <footer className="site-footer" id="legal">
      <div className="container footer-main">
        <div className="footer-brand"><Logo /><p>{footer.description}</p><div className="social-links"><a href={discordInviteUrl} target="_blank" rel="noreferrer" aria-label="Discord">ds</a><a href="https://www.linkedin.com/company/techtojob/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href="https://x.com/techtojob" target="_blank" rel="noreferrer" aria-label="X">x</a><a href="https://instagram.com/techtojob" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a></div></div>
        <div className="footer-groups">
          {groups.map(({ data, hrefs }) => <div className="footer-group" key={data.title}><h3>{data.title}</h3>{data.links.map((link, index) => <a href={hrefs[index]} key={link}>{link}</a>)}</div>)}
        </div>
      </div>
      <div className="container footer-bottom"><span>{footer.copyright}</span><div className="legal-links">{footer.legal.map((link) => <a href="#legal" key={link}>{link}</a>)}</div><a className="back-to-top" href="#top" aria-label={messages.actions.backToTop}>↑</a></div>
    </footer>
  );
}
