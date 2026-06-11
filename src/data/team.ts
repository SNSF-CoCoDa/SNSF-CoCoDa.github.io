export interface TeamMember {
  id: number;
  name: string;
  role: string;
  institution: string;
  imageUrl: string;
  bio?: string;
  category: 'Partner' | 'Researcher' | 'ODI';
}

export const teamMembers: TeamMember[] = [
  // Partners
  {
    id: 1,
    name: "Prof. Simon Mayer",
    role: "Computer Science",
    institution: "University of St. Gallen 🇨🇭",
    imageUrl: "/team/simon.jpg",
    bio: "Partner in Academia",
    category: "Partner"
  },
  {
    id: 2,
    name: "Prof. Aurelia Tamò-Larrieux",
    role: "Law",
    institution: "University of Lausanne 🇨🇭",
    imageUrl: "/team/aurelia.jpg",
    bio: "Partner in Academia",
    category: "Partner"
  },
  {
    id: 3,
    name: "Dr. Konrad Kollnig",
    role: "Computer Science",
    institution: "Maastricht University 🇳🇱",
    imageUrl: "/team/konrad.jpg",
    bio: "Partner in Academia",
    category: "Partner"
  },
  {
    id: 4,
    name: "Prof. Gijs van Dijck",
    role: "Law",
    institution: "Maastricht University 🇳🇱",
    imageUrl: "/team/gijs.jpg",
    bio: "Partner in Academia",
    category: "Partner"
  },
  {
    id: 5,
    name: "Prof. Elena Simperl",
    role: "Computer Science",
    institution: "Open Data Institute 🇬🇧",
    imageUrl: "/team/elena.jpg",
    bio: "Partner in Civil Society",
    category: "Partner"
  },

  // PhD Students & Researchers
  {
    id: 6,
    name: "Alice Palmieri",
    role: "PhD Student",
    institution: "University of Lausanne 🇨🇭",
    imageUrl: "https://alicepal.solidcommunity.net/public/picture/alice-fuso.jpg",
    bio: "PhD Candidate",
    category: "Researcher"
  },
  {
    id: 7,
    name: "Henry Tari",
    role: "PhD Student",
    institution: "Maastricht University 🇳🇱",
    imageUrl: "/team/henry.jpg",
    bio: "PhD Candidate",
    category: "Researcher"
  },
  {
    id: 8,
    name: "Luka Bekavac",
    role: "PhD Student",
    institution: "University of St. Gallen 🇨🇭",
    imageUrl: "https://bridgingworlds.solidcommunity.net/public/fuso-photo.jpg",
    bio: "PhD Candidate",
    category: "Researcher"
  },

  // ODI Team
  {
    id: 9,
    name: "Calum Inverarity",
    role: "Researcher",
    institution: "Open Data Institute 🇬🇧",
    imageUrl: "/team/calum.jpg",
    bio: "ODI Team",
    category: "ODI"
  },
  {
    id: 10,
    name: "Jake Stein",
    role: "Researcher",
    institution: "Open Data Institute 🇬🇧",
    imageUrl: "/team/jake.jpg",
    bio: "ODI Team",
    category: "ODI"
  },
  {
    id: 11,
    name: "Sophia Worth",
    role: "Researcher",
    institution: "Open Data Institute 🇬🇧",
    imageUrl: "/team/sophia.jpg",
    bio: "ODI Team",
    category: "ODI"
  }
];
