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
    title: "ENTHUSIA 5.0",
    description: "Three-day techno-cultural fest | Feb 19-21, 2026 | Register Now",
    sections: [
      {
        title: "Technical Events Overview",
        items: [
          "• SITNovate 2.0: 24-hour hackathon bringing together innovative minds",
          "• CodeSprint 2.0: Competitive coding challenges for programming enthusiasts",
          "• Stranger Tech: Tech treasure hunt with exciting challenges",
          "• SITank 2.0: Pitch desk competition for entrepreneurial ventures",
          "• BuildBrand: Brand advertisement challenge showcasing creativity"
        ]
      },
      {
        title: "Cultural Events Overview",
        items: [
          "• Cultural performances including dance, drama, ramp walk, and felicitation ceremonies",
          "• Jamming night featuring live music and collaborative performances",
          "• Stand-up comedy sessions bringing laughter and entertainment",
          "• Celebrity night with special artist performances (to be revealed soon)",
          "• DJ night creating an electrifying atmosphere for celebration"
        ]
      },
      {
        title: "Distinguished Guests & Jury",
        items: [
          "• Industry leaders from top technology companies",
          "• Renowned entrepreneurs and startup founders",
          "• Academic experts from premier institutions",
          "• International speakers and thought leaders",
          "• Cultural artists and celebrity performers",
          "• Media personalities and content creators",
          "• Government officials and policy makers (to be announced)"
        ]
      },
      {
        title: "Event Highlights",
        items: [
          "• Three-day immersive techno-cultural experience from Feb 19-21, 2026",
          "• Perfect blend of technical competitions and cultural celebrations",
          "• Expected participation of 1000+ students from various institutions",
          "• 15+ events spanning both technical and cultural domains",
          "• Networking opportunities with industry experts and fellow participants",
          "• Awards and recognition for outstanding performances across all categories"
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
