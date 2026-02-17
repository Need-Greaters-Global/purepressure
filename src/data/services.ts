export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  heroImage: string;
}

export const services: Service[] = [
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    shortDescription:
      "Professional gutter cleaning services to keep your home safe from water damage. Our team ensures debris-free gutters and downspouts.",
    thumbnail: "/images/services/gutter-cleaning.jpg",
    heroImage: "/images/heroes/gutter-cleaning.jpg",
  },
  {
    slug: "gutter-basket",
    title: "Gutter Basket",
    shortDescription:
      "Authorized Gutter Basket installer. Protect your gutters with a proven guard system that prevents clogs and overflow.",
    thumbnail: "/images/services/gutter-basket.jpg",
    heroImage: "/images/heroes/gutter-basket.jpg",
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    shortDescription:
      "Hot and cold water pressure washing for commercial and residential buildings. We handle everything from driveways to multi-story exteriors.",
    thumbnail: "/images/services/pressure-washing.jpg",
    heroImage: "/images/heroes/pressure-washing.jpg",
  },
  {
    slug: "brush-washing",
    title: "Brush Washing",
    shortDescription:
      "Gentle soap and soft bristle brush washing for vinyl siding and delicate surfaces. Low-pressure method that protects your building.",
    thumbnail: "/images/services/brush-washing.jpg",
    heroImage: "/images/heroes/brush-washing.jpg",
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    shortDescription:
      "Professional squeegee and brush wash window cleaning for a streak-free, polished finish on your home or commercial building.",
    thumbnail: "/images/services/window-cleaning.jpg",
    heroImage: "/images/heroes/window-cleaning.jpg",
  },
];
