export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "James MacIntyre",
    role: "Owner and President",
    image: "/images/team/james-macintyre.jpg",
    bio: "James MacIntyre founded Pure Pressure in 1996. With decades of experience in exterior building cleaning, James leads the company with a commitment to quality, safety, and customer satisfaction. His hands-on approach and deep knowledge of the industry have made Pure Pressure a trusted name throughout the Lower Mainland and Fraser Valley.",
  },
  {
    name: "Rebecca MacIntyre",
    role: "Office Manager",
    image: "/images/team/rebecca-macintyre.jpg",
    bio: "Rebecca MacIntyre manages the day-to-day office operations at Pure Pressure. She ensures that scheduling, customer communications, and administrative tasks run smoothly, allowing the field teams to focus on delivering exceptional service.",
  },
  {
    name: "Jamie Irvine",
    role: "Management & Advertising",
    image: "/images/team/jamie-irvine.jpg",
    bio: "Jamie Irvine brings his management and marketing expertise to help Pure Pressure grow and reach new customers. He oversees advertising initiatives and helps coordinate operations to ensure the company continues to deliver on its promise of quality service.",
  },
  {
    name: "Jennifer Irvine",
    role: "Estimator",
    image: "/images/team/jennifer-irvine.jpg",
    bio: "Jennifer Irvine works with clients to assess their exterior cleaning needs and provide accurate, fair estimates. Her attention to detail and customer-first approach help ensure that every project starts with clear expectations.",
  },
];
