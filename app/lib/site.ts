export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techtojob.com";

const discordInviteUrlValue = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL;

if (!discordInviteUrlValue) {
  throw new Error("Missing NEXT_PUBLIC_DISCORD_INVITE_URL environment variable.");
}

export const discordInviteUrl = discordInviteUrlValue;
