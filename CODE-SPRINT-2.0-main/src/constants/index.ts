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
    name: "About",
    link: "/#about",
    mobileLink: "/#about"
  },
  {
    name: "Blueprint",
    link: "/#blueprint",
    mobileLink: "/#blueprint"
  },
  {
    name: "Evidence",
    link: "/#evidence",
    mobileLink: "/#evidence"
  },
  {
    name: "Team",
    link: "/#team",
    mobileLink: "/#team"
  }
];

