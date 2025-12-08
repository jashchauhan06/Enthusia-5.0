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
    title: "SITNovate 2025",
    description: "24-hour coding hackathon | 49 teams | Feb 19-20, 2025",
    sections: [
      {
        title: "About",
        items: [
          "• 24-hour coding challenge at SIT Nagpur",
          "• 49 teams developing innovative solutions",
          "• Breakthrough solutions and intense problem-solving"
        ]
      },
      {
        title: "Jury Panel",
        items: [
          "• Mr. Tufan Kilicaslan - IEEE Senior Member, Türkiye",
          "• Mr. Dhiraj Motghare - Director, GlobalLogic",
          "• Mr. Mohit Vyas - Accenture, India",
          "• Ms. Nilima Rao - Persistent, India",
          "• Ms. Nidhi Shingade - Perficient Inc, Nagpur",
          "• Dr. Ravindra Jogekar - ACM Nagpur",
          "• Mr. Bhushan Netke - Global Logic"
        ]
      },
      {
        title: "Outcome",
        items: [
          "• Results declared on Feb 20, 2025",
          "• Participants pushed limits for cutting-edge solutions",
          "• Innovation-packed showdown of brightest minds"
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
