export interface NewsItem {
  id: number;
  month: string;
  title: string;
  link?: string;
  linkText?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    month: "May 2026",
    title: "CoCoDa blog examines AI search summaries and regulatory gaps",
    link: "https://www.linkedin.com/posts/cocoda-%E2%80%93-studying-systemic-risks-on-online-platforms_maintaining-epistemic-integrity-in-the-era-activity-7465716173616259072-wXyj?utm_source=share&utm_medium=member_desktop&rcm=ACoAACAnurUBZqUbINu-GqTjt27dYq0DfEGurRM",
    linkText: "Read more on LinkedIn"
  },
  {
    id: 2,
    month: "May 2026",
    title: "CoCoDa panel at CPDP 2026 on child-centred social media wellbeing",
    link: "https://www.linkedin.com/posts/cocoda-%E2%80%93-studying-systemic-risks-on-online-platforms_cpdp2026-competingvisionssharedfutures-activity-7462431361082028032-KTFR?utm_source=share&utm_medium=member_desktop&rcm=ACoAACAnurUBZqUbINu-GqTjt27dYq0DfEGurRM",
    linkText: "Read more on LinkedIn"
  },
  {
    id: 3,
    month: "May 2026",
    title: "New chapter on data access, platform accountability, and data structures",
    link: "https://www.linkedin.com/posts/cocoda-%E2%80%93-studying-systemic-risks-on-online-platforms_cocoda-studying-systemic-risks-on-online-activity-7460599851022618624-bMks?utm_source=share&utm_medium=member_desktop&rcm=ACoAACAnurUBZqUbINu-GqTjt27dYq0DfEGurRM",
    linkText: "Read more on LinkedIn"
  },
  {
    id: 4,
    month: "Latest updates",
    title: "For the most up-to-date and detailed project news, visit CoCoDa on LinkedIn",
    link: "https://www.linkedin.com/company/cocoda-%E2%80%93-studying-systemic-risks-on-online-platforms/posts/?feedView=all",
    linkText: "Visit our LinkedIn page"
  }
];
