export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  email: string;
  domain: string;
  fromName: string;
  address?: string;
  phone?: string;
  rating?: number;
  review_count?: number;
  navLinks: { label: string; href: string }[];
  footer: { text: string };
}

export const siteConfig: SiteConfig = {
  name: "Joey's",
  tagline: "Clifftop Brisbane dining with breakfast, seafood, pizza, pasta and cocktails",
  description: "Joey's menu, hours, phone, address and booking details based on public restaurant data.",
  email: 'contact@joey-s.com',
  domain: 'joey-s.webjuice.fengtalk.ai',
  fromName: "Joey's",
  address: '29 River Terrace, Kangaroo Point QLD 4169, Australia',
  phone: '(07) 3185 2945',
  rating: 4.4,
  review_count: 2479,
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: {
    text: "Joey's - 29 River Terrace",
  },
};
