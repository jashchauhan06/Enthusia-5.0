import { TypescriptIcon } from "@/components/icons/skills/typescript-icon";
import { NextjsIcon } from "@/components/icons/skills/next-js-icon";
import { GoogleAdsIcon } from "@/components/icons/skills/google-ads-icon";
import { MetaIcon } from "@/components/icons/skills/meta-icon";
import { SupabaseIcon } from "@/components/icons/skills/supabase-icon";
import { VercelIcon } from "@/components/icons/skills/vercel-icon";
import type { CaseStudyData } from "../types";

export const advertisingPlatformData: CaseStudyData = {
  projectData: {
    slug: "advertising-platform",
    title: "SITNovate 2026",
    description: "Coming Soon | Feb 19-20, 2026 | Register Now",
    sections: [
      {
        title: "What's New",
        items: [
          "• Expanded to 75+ teams competing",
          "• New AI/ML and Blockchain tracks",
          "• International jury panel from 5 countries",
          "• Enhanced prizes and sponsorships"
        ]
      },
      {
        title: "Event Highlights",
        items: [
          "• 24-hour non-stop coding challenge",
          "• Live mentorship from industry leaders",
          "• Networking with tech professionals",
          "• Workshops on emerging technologies",
          "• Startup incubation opportunities"
        ]
      },
      {
        title: "Why Participate",
        items: [
          "• Showcase your skills to top companies",
          "• Win exciting prizes and internships",
          "• Build innovative solutions to real problems",
          "• Network with brightest minds in tech"
        ]
      }
    ],
    buttons: {
      githubUrl: "",
      detailPath: ""
    }
  },
  techStack: [
    { icon: <TypescriptIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "TypeScript" },
    { icon: <NextjsIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Next.js" },
    { icon: <GoogleAdsIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "GoogleAdsAPI" },
    { icon: <MetaIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "MetaAPI" },
    { icon: <VercelIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Vercel" },
    { icon: <SupabaseIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Supabase" }
  ]
};
