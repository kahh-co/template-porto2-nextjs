export type Project = {
  no: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    no: "01",
    title: "KOSTKU",
    subtitle: "Property Management System",
    tags: ["LARAVEL", "MYSQL", "SYSTEM"],
    year: "2025",
    image: "/images/kostku.svg",
    description:
      "Boarding-house management system for rooms, tenants, payments, and reports — built with simplicity for owners.",
  },
  {
    no: "02",
    title: "DAILYDRINK",
    subtitle: "E-Commerce Experience",
    tags: ["NEXT.JS", "E-COMMERCE", "UI/UX"],
    year: "2025",
    image: "/images/daily-drink.svg",
    description:
      "Modern beverage e-commerce experience with clean catalog, cart, and checkout flow.",
  },
  {
    no: "03",
    title: "SALEMBA KITCHEN",
    subtitle: "Food Ordering & Cashier System",
    tags: ["LARAVEL", "POS", "REST API"],
    year: "2024",
    image: "/images/salemba-kitchen.svg",
    description:
      "Food ordering and cashier system covering menu, orders, and transaction reports.",
  },
  {
    no: "04",
    title: "SEHATIN",
    subtitle: "Health Education Platform",
    tags: ["NEXT.JS", "SUPABASE", "CONTENT"],
    year: "2024",
    image: "/images/sehatin.svg",
    description:
      "Health education platform presenting articles and programs in a calm, readable layout.",
  },
];
