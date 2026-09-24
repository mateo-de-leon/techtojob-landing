import { Avatar, Tag } from "./ui";
import { discordInviteUrl } from "../lib/site";

type NetworkProps = {
  labels: string[];
  variant?: "hero" | "closing";
};

export function ConnectionNetwork({ labels, variant = "hero" }: NetworkProps) {
  const points = [
    { x: 18, y: 28, label: labels[0] ?? "Talento", kind: "talent" },
    { x: 46, y: 16, label: labels[1] ?? "", kind: "project" },
    { x: 78, y: 28, label: labels[2] ?? "Empresa", kind: "company" },
    { x: 66, y: 73, label: labels[3] ?? "", kind: "tournament" },
    { x: 27, y: 78, label: labels[4] ?? "", kind: "community" },
  ];

  return (
    <div className={`connection-network connection-network-${variant}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`network-line-${variant}`} x1="0" x2="1">
            <stop offset="0" stopColor="#84c0bf" stopOpacity="0.12" />
            <stop offset="0.5" stopColor="#84c0bf" stopOpacity="0.82" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path className="network-line line-one" d="M18 28 46 16 78 28 66 73 27 78 18 28" />
        <path className="network-line line-two" d="M18 28 66 73M46 16 27 78M78 28 27 78" />
        <path className="network-line line-three" d="M46 16 66 73" />
        {points.map((point) => (
          <g className={`network-point network-point-${point.kind}`} key={point.label}>
            <circle className="point-ring" cx={point.x} cy={point.y} r="4.5" />
            <circle className="point-core" cx={point.x} cy={point.y} r="1.6" />
            <text x={point.x} y={point.y + 9} textAnchor="middle">
              {point.label}
            </text>
          </g>
        ))}
      </svg>
      <span className="network-pulse pulse-one" />
      <span className="network-pulse pulse-two" />
      <span className="network-pulse pulse-three" />
    </div>
  );
}

type ProfileData = {
  name: string;
  role: string;
  level: string;
  availability: string;
  location: string;
  stackLabel: string;
  participationLabel: string;
  participation: string;
  recommendation: string;
  progressLabel: string;
  status: string;
};

export function ProfileCard({ profile }: { profile: ProfileData }) {
  return (
    <article className="profile-card glass-card">
      <div className="card-topline">
        <span className="live-dot" />
        <span>{profile.status}</span>
        <span className="card-menu" aria-hidden="true">•••</span>
      </div>
      <div className="profile-identity">
        <Avatar initials="LF" />
        <div>
          <p className="card-title">{profile.name}</p>
          <p>{profile.role}</p>
          <span className="location">{profile.location}</span>
        </div>
      </div>
      <div className="profile-status-row">
        <Tag tone="accent">{profile.level}</Tag>
        <span className="availability"><i />{profile.availability}</span>
      </div>
      <div className="profile-divider" />
      <div className="profile-field">
        <span className="field-label">{profile.stackLabel}</span>
        <div className="tag-list">
          <Tag>React</Tag>
          <Tag>TypeScript</Tag>
          <Tag>Next.js</Tag>
          <Tag>Figma</Tag>
        </div>
      </div>
      <div className="profile-field participation-field">
        <span className="field-label">{profile.participationLabel}</span>
        <strong>{profile.participation}</strong>
      </div>
      <p className="recommendation"><span>✦</span>{profile.recommendation}</p>
      <div className="profile-progress">
        <div className="progress-heading">
          <span>{profile.progressLabel}</span>
          <strong>86%</strong>
        </div>
        <div className="progress-track"><span /></div>
      </div>
    </article>
  );
}

type TalentCardData = {
  label: string;
  name: string;
  role: string;
  availability: string;
  activity: string;
  project: string;
  score: string;
};

export function TalentActivityCard({ card }: { card: TalentCardData }) {
  return (
    <article className="talent-activity-card glass-card">
      <div className="activity-card-head">
        <span className="eyebrow">{card.label}</span>
        <span className="activity-signal"><i />{card.score}</span>
      </div>
      <div className="activity-person">
        <Avatar initials="MP" tone="violet" />
        <div>
          <h3>{card.name}</h3>
          <p>{card.role}</p>
        </div>
      </div>
      <div className="activity-row"><span className="activity-icon">↗</span><span>{card.availability}</span></div>
      <div className="activity-row"><span className="activity-icon">◒</span><span>{card.activity}</span></div>
      <div className="project-strip"><span>{card.project}</span><span aria-hidden="true">→</span></div>
    </article>
  );
}

type VacancyData = {
  status: string;
  title: string;
  company: string;
  tags: string[];
  match: string;
  footer: string;
};

export function VacancyCard({ vacancy }: { vacancy: VacancyData }) {
  return (
    <article className="vacancy-card glass-card">
      <div className="vacancy-status"><i />{vacancy.status}<span>•••</span></div>
      <div className="vacancy-heading">
        <span className="company-symbol">N</span>
        <div>
          <h3>{vacancy.title}</h3>
          <p>{vacancy.company}</p>
        </div>
      </div>
      <div className="tag-list">
        {vacancy.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
      <div className="match-row"><span className="match-avatars"><Avatar initials="LF" /><Avatar initials="DR" tone="orange" /><Avatar initials="MV" tone="violet" /></span><strong>{vacancy.match}</strong></div>
      <div className="vacancy-footer"><span>{vacancy.footer}</span><span aria-hidden="true">↗</span></div>
    </article>
  );
}

type TournamentData = {
  status: string;
  number: string;
  title: string;
  description: string;
  stackLabel: string;
  stack: string[];
  participantsLabel: string;
  participants: string;
  dateLabel: string;
  date: string;
  rewardLabel: string;
  reward: string;
  visibility: string;
  cta: string;
};

export function TournamentCard({ tournament }: { tournament: TournamentData }) {
  return (
    <article className="tournament-card">
      <div className="tournament-orbit orbit-one" />
      <div className="tournament-orbit orbit-two" />
      <div className="tournament-card-content">
        <div className="tournament-topline"><span className="tournament-status"><i />{tournament.status}</span><span>{tournament.number}</span></div>
        <h3>{tournament.title}</h3>
        <p>{tournament.description}</p>
        <div className="tournament-tags">
          {tournament.stack.map((tag) => <Tag tone="accent" key={tag}>{tag}</Tag>)}
        </div>
        <div className="tournament-data-grid">
          <div><span>{tournament.participantsLabel}</span><strong>{tournament.participants}</strong></div>
          <div><span>{tournament.dateLabel}</span><strong>{tournament.date}</strong></div>
          <div><span>{tournament.rewardLabel}</span><strong>{tournament.reward}</strong></div>
        </div>
        <div className="tournament-footer"><span>↗ {tournament.visibility}</span><a href={discordInviteUrl} target="_blank" rel="noreferrer">{tournament.cta} <span aria-hidden="true">→</span></a></div>
      </div>
    </article>
  );
}
