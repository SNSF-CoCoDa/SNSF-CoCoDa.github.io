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
    month: "September 2025",
    title: "Workshop with adolescents at the Digital Dreams Festival in Lausanne"
  },
  {
    id: 2,
    month: "September 2025",
    title: "Attended the Data Access Days in Berlin",
    link: "https://dsa40collaboratory.eu/data-access-days/",
    linkText: "Read the highlights"
  },
  {
    id: 3,
    month: "October 2025",
    title: "Submitted to EU's Consultation on its new Digital Fairness Act",
    link: "https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/14622-Digital-Fairness-Act/F33096694_en",
    linkText: "Read our response"
  },
  {
    id: 4,
    month: "November 2025",
    title: "Launch webinar hosted by the ODI: CoCoDa Project Launch",
    link: "https://www.youtube.com/watch?v=3fmuE-JXJEE",
    linkText: "Watch the webinar"
  }
    {
    id: 5,
    month: "February 2026",
    title: "CoCoDa workshop ",
    link: "https://www.linkedin.com/posts/maastrichtunibrusselshub_last-week-we-were-happy-to-welcome-the-activity-7431618193519054848-HEFk?utm_source=share&utm_medium=member_desktop&rcm=ACoAACAnurUBZqUbINu-GqTjt27dYq0DfEGurRM",
    linkText: "Check the linkedin post"
  }
];

