// types/navItems.ts
export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const NAVBAR_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Profile",
    children: [
      { label: "About Us", href: "/profile" },
      {
        label: "Subteams",
        children: [
          { label: "Vishmakarma", href: "/profile/vishmakarma" },
          { label: "Antasena", href: "/profile/antasena" },
          { label: "Wanderfalke", href: "/profile/wanderfalke" },
        ],
      },
    ],
  },
  { label: "Management", href: "/management" },
  { label: "Achievements", href: "/achievemnt" },
  {
    label: "Feeds",
    children: [
      { label: "News", href: "/feeds" },
      { label: "Gallery", href: "/feeds/gallery" },
    ],
  },
  { label: "Contact Us", href: "/" },
];
