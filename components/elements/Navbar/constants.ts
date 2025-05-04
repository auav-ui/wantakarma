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
      { label: "About", href: "/" },
      {
        label: "Subteams",
        children: [
          { label: "Vishmakarma", href: "/" },
          { label: "Antasena", href: "/" },
          { label: "Wanderfalke", href: "/" },
        ],
      },
    ],
  },
  { label: "Management", href: "/" },
  { label: "Achievements", href: "/" },
  {
    label: "Feeds",
    children: [
      { label: "News", href: "/" },
      { label: "Gallery", href: "/" },
    ],
  },
  { label: "Contact Us", href: "/" },
];
