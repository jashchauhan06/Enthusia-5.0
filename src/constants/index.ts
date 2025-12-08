export type NavigationItem = {
  name: string;
  link: string;
  mobileLink: string;
};

export const navigationItems: NavigationItem[] = [
  {
    name: "Home",
    link: "#home",
    mobileLink: "#home-mobile"
  },
  {
    name: "Event Details",
    link: "#how-i-work",
    mobileLink: "#how-i-work-mobile"
  },
  {
    name: "About SITNovate",
    link: "#case-studies",
    mobileLink: "#case-studies-mobile"
  },
  {
    name: "Countdown",
    link: "#skills",
    mobileLink: "#skills-mobile"
  },
  {
    name: "Our Team",
    link: "#about-me",
    mobileLink: "#about-me-mobile"
  },
  {
    name: "Contact",
    link: "#contact",
    mobileLink: "#contact"
  }
];
