// src/data/landingPageConfig.ts
import {
  Megaphone,
  Rocket,
  BarChart3,
  Users2,
  IdCard,
  HelpCircle,
  PanelBottom,
  LogIn,
  Settings2,
  Gauge,
  PanelsTopLeft,
  List,
  SquareCheck,
  Box,
  ShoppingCart,
  CreditCard,
  Receipt,
  Grid3X3,
  Filter,
  Star,
  ChartPie,
  BookCopy,
  Shirt,
} from "lucide-react";

type Item = {
  title: string;
  count: number;
  image?: string;
  category?: string;
  tags?: string[];
  icon?: React.ElementType;
  href?: string;
  meta?: string;
  updatedAt?: string; // ISO
  popularity?: number; // arbitrary weight for sorting
};

type TabBucket = {
  title: string;
  emoji?: any; // used by UI for a nice touch
  description: string;
  items: Item[];
  viewAllLink: string;
};

export const tabContent: Record<string, TabBucket> = {
  marketing: {
    title: "Marketing",
    emoji:<ChartPie />,
    description:
      "Beautiful, responsive marketing pages, sections, and components.",
    items: [
      {
        title: "Hero Sections",
        count: 12,
        icon: Rocket,
        href: "/library/marketing/heroes",
        tags: ["Above-the-fold", "A/B Test Ready", "Dark/Light"],
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        category: "Marketing",
        updatedAt: "2025-09-14T10:05:00Z",
        meta: "New variants",
        popularity: 98,
      },
      {
        title: "CTA Sections",
        count: 15,
        icon: Megaphone,
        href: "/library/marketing/ctas",
        tags: ["Lead Gen", "Primary/Secondary", "Gradient"],
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
        category: "Marketing",
        updatedAt: "2025-09-12T08:20:00Z",
        popularity: 92,
      },
      {
        title: "Pricing Sections",
        count: 18,
        icon: CreditCard,
        href: "/library/marketing/pricing",
        tags: ["Monthly/Annual", "Feature Grid", "Toggle"],
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
        category: "Marketing",
        updatedAt: "2025-09-10T15:45:00Z",
        meta: "Switchable plans",
        popularity: 95,
      },
      {
        title: "Stats",
        count: 8,
        icon: BarChart3,
        href: "/library/marketing/stats",
        tags: ["KPI", "Counters", "Grid"],
        image:
          "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
        category: "Marketing",
        updatedAt: "2025-09-11T09:12:00Z",
        popularity: 78,
      },
      {
        title: "Testimonials",
        count: 8,
        icon: Users2,
        href: "/library/marketing/testimonials",
        tags: ["Logos", "Stars", "Quotes"],
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        category: "Marketing",
        updatedAt: "2025-09-13T13:32:00Z",
        popularity: 88,
      },
      {
        title: "Team Sections",
        count: 9,
        icon: IdCard,
        href: "/library/marketing/team",
        tags: ["Avatars", "Grid", "Social"],
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        category: "Marketing",
        updatedAt: "2025-09-09T18:00:00Z",
        popularity: 73,
      },
      {
        title: "FAQs",
        count: 7,
        icon: HelpCircle,
        href: "/library/marketing/faq",
        tags: ["Accordion", "Searchable", "Compact"],
        image:
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80",
        category: "Marketing",
        updatedAt: "2025-09-08T07:40:00Z",
        popularity: 70,
      },
      {
        title: "Footers",
        count: 7,
        icon: PanelBottom,
        href: "/library/marketing/footers",
        tags: ["Multi-column", "CTA", "Legal"],
        image:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
        category: "Marketing",
        updatedAt: "2025-09-07T16:10:00Z",
        popularity: 66,
      },
    ],
    viewAllLink: "#marketing-components",
  },

  "application-ui": {
    title: "Application UI",
    emoji: <BookCopy />,
    description:
      "Ready-to-use application UIs for dashboards, settings, and more.",
    items: [
      {
        title: "Sign-in Forms",
        count: 10,
        icon: LogIn,
        href: "/library/app/signin",
        tags: ["Magic Link", "OTP", "OAuth"],
        image:
          "https://images.unsplash.com/photo-1612831197317-7d6183dc32c2?auto=format&fit=crop&w=800&q=80",
        category: "Application",
        updatedAt: "2025-09-15T09:00:00Z",
        popularity: 89,
      },
      {
        title: "Settings Pages",
        count: 12,
        icon: Settings2,
        href: "/library/app/settings",
        tags: ["Tabs", "Forms", "Billing"],
        image:
          "https://images.unsplash.com/photo-1605902711622-cfb43c4437d3?auto=format&fit=crop&w=800&q=80",
        category: "Application",
        updatedAt: "2025-09-11T21:10:00Z",
        popularity: 86,
      },
      {
        title: "Dashboards",
        count: 8,
        icon: Gauge,
        href: "/library/app/dashboards",
        tags: ["Cards", "Charts", "Filters"],
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        category: "Application",
        updatedAt: "2025-09-13T06:30:00Z",
        meta: "Fresh layouts",
        popularity: 97,
      },
      {
        title: "Navigation",
        count: 15,
        icon: PanelsTopLeft,
        href: "/library/app/navigation",
        tags: ["Sidebar", "Topbar", "Breadcrumbs"],
        image:
          "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=800&q=80",
        category: "Application",
        updatedAt: "2025-09-10T13:50:00Z",
        popularity: 83,
      },
      {
        title: "Tables",
        count: 9,
        icon: List,
        href: "/library/app/tables",
        tags: ["Dense/Comfy", "Sort", "Pagination"],
        image:
          "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
        category: "Application",
        updatedAt: "2025-09-09T12:00:00Z",
        popularity: 80,
      },
      {
        title: "Modals",
        count: 11,
        icon: SquareCheck,
        href: "/library/app/modals",
        tags: ["Sheets", "Dialogs", "Toasts"],
        image:
          "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
        category: "Application",
        updatedAt: "2025-09-12T17:25:00Z",
        popularity: 85,
      },
      {
        title: "Empty States",
        count: 6,
        icon: Box,
        href: "/library/app/empty-states",
        tags: ["Onboarding", "Illustrations", "Tips"],
        image:
          "https://images.unsplash.com/photo-1618005182384-a83a8c22a7b1?auto=format&fit=crop&w=800&q=80",
        category: "Application",
        updatedAt: "2025-09-06T08:00:00Z",
        popularity: 62,
      },
      {
        title: "Forms",
        count: 20,
        icon: SquareCheck,
        href: "/library/app/forms",
        tags: ["Validation", "Wizard", "Inline"],
        image:
          "https://images.unsplash.com/photo-1603575448362-2fef72f3f5a0?auto=format&fit=crop&w=800&q=80",
        category: "Application",
        updatedAt: "2025-09-15T03:45:00Z",
        popularity: 99,
      },
    ],
    viewAllLink: "#application-ui-components",
  },

  "e-commerce": {
    title: "E-commerce",
    emoji: <Shirt />,
    description:
      "Components and layouts for building stunning e-commerce experiences.",
    items: [
      {
        title: "Product Overviews",
        count: 10,
        icon: Grid3X3,
        href: "/library/ecom/product-overviews",
        tags: ["Gallery", "Badges", "Quick Look"],
        image:
          "https://images.unsplash.com/photo-1513708928678-8f9c5d3c9a6c?auto=format&fit=crop&w=800&q=80",
        category: "E-commerce",
        updatedAt: "2025-09-14T14:10:00Z",
        popularity: 91,
      },
      {
        title: "Product Lists",
        count: 8,
        icon: ShoppingCart,
        href: "/library/ecom/product-lists",
        tags: ["Masonry", "Grid", "Infinite"],
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        category: "E-commerce",
        updatedAt: "2025-09-10T10:35:00Z",
        popularity: 84,
      },
      {
        title: "Shopping Carts",
        count: 5,
        icon: ShoppingCart,
        href: "/library/ecom/cart",
        tags: ["Mini Cart", "Drawer", "Inline"],
        image:
          "https://images.unsplash.com/photo-1607083206968-13617ef53b9c?auto=format&fit=crop&w=800&q=80",
        category: "E-commerce",
        updatedAt: "2025-09-09T19:15:00Z",
        popularity: 76,
      },
      {
        title: "Checkout Forms",
        count: 7,
        icon: CreditCard,
        href: "/library/ecom/checkout",
        tags: ["Guest", "Express", "Address Finder"],
        image:
          "https://images.unsplash.com/photo-1581090700227-4c4e3d6b9a48?auto=format&fit=crop&w=800&q=80",
        category: "E-commerce",
        updatedAt: "2025-09-12T11:22:00Z",
        popularity: 88,
      },
      {
        title: "Order Summaries",
        count: 6,
        icon: Receipt,
        href: "/library/ecom/order-summary",
        tags: ["Breakdown", "Promo", "Taxes"],
        image:
          "https://images.unsplash.com/photo-1588776814546-ec69f5a9186c?auto=format&fit=crop&w=800&q=80",
        category: "E-commerce",
        updatedAt: "2025-09-08T22:05:00Z",
        popularity: 69,
      },
      {
        title: "Category Pages",
        count: 9,
        icon: Grid3X3,
        href: "/library/ecom/categories",
        tags: ["Banners", "Filters", "SEO"],
        image:
          "https://images.unsplash.com/photo-1607083206833-9f9e3d4dcd36?auto=format&fit=crop&w=800&q=80",
        category: "E-commerce",
        updatedAt: "2025-09-11T07:05:00Z",
        popularity: 82,
      },
      {
        title: "Filters",
        count: 12,
        icon: Filter,
        href: "/library/ecom/filters",
        tags: ["Faceted", "Chips", "Drawer"],
        image:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
        category: "E-commerce",
        updatedAt: "2025-09-13T01:50:00Z",
        popularity: 87,
      },
      {
        title: "Reviews",
        count: 4,
        icon: Star,
        href: "/library/ecom/reviews",
        tags: ["Stars", "Media", "Reply"],
        image:
          "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
        category: "E-commerce",
        updatedAt: "2025-09-07T12:30:00Z",
        popularity: 63,
      },
    ],
    viewAllLink: "#e-commerce-components",
  },
};

export default tabContent;
