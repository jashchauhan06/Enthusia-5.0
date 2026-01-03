import { NextjsIcon } from "@/components/icons/skills/next-js-icon";
import { ThreejsIcon } from "@/components/icons/skills/three-js-icon";
import { OpencvIcon } from "@/components/icons/skills/open-cv-icon";
import { LlmsIcon } from "@/components/icons/skills/llms-icon";
import { PythonIcon } from "@/components/icons/skills/python-icon";
import { MongodbIcon } from "@/components/icons/skills/mongo-db-icon";
import type { CaseStudyData } from "../types";

export const designPlatformData: CaseStudyData = {
  projectData: {
    slug: "design-platform",
    title: "ENTHUSIA 5.0",
    description: "Three-day techno-cultural fest | Feb 19-21, 2026 | SIT Nagpur",
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
          "• Mr. Nitin Sachdeva - President, delaPlex",
          "• Mr. Partha Maitra - Resident Editor, The Times of India, Nagpur",
          "• Mr. Akash Singh - VP Product Strategy, Pragmatyc",
          "• Mr. Tufan Kilicaslan - IEEE Senior Member, Türkiye",
          "• Mr. Dhiraj Motghare - Director of Engineering, GlobalLogic",
          "• Ms. Nilima Rao - Persistent, India",
          "• Dr. Ravindra Jogekar - Executive Member ACM Nagpur"
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
    { icon: <NextjsIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Next.js" },
    { icon: <ThreejsIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Three.js" },
    { icon: <OpencvIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "OpenCV" },
    { icon: <LlmsIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "LLMs" },
    { icon: <PythonIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Python" },
    { icon: <MongodbIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "MongoDB" }
  ]
};
