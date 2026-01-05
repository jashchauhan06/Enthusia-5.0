export type NavigationItem = {
  name: string;
  link: string;
  mobileLink: string;
};

export const navigationItems: NavigationItem[] = [
  {
    name: "Home",
    link: "/",
    mobileLink: "/"
  },
  {
    name: "About SIT Nagpur",
    link: "/about-sit-nagpur",
    mobileLink: "/about-sit-nagpur"
  },
  {
    name: "About Enthusia 5.0",
    link: "/about-enthusia",
    mobileLink: "/about-enthusia"
  },
  {
    name: "TechFest",
    link: "/techfest",
    mobileLink: "/techfest"
  },
  {
    name: "Cultural Fest",
    link: "/cultural-fest",
    mobileLink: "/cultural-fest"
  },
  {
    name: "Sponsors",
    link: "/sponsors",
    mobileLink: "/sponsors"
  },
  {
    name: "Gallery",
    link: "/gallery",
    mobileLink: "/gallery"
  },
  {
    name: "Contact Us",
    link: "/contact",
    mobileLink: "/contact"
  }
];
