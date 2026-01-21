import type { Service } from "./types";
import { BarsIcon } from "@/components/icons/services/bars-icon";
import { BrainIcon } from "@/components/icons/services/brain-icon";
import { CartIcon } from "@/components/icons/services/cart-icon";
import { DollarIcon } from "@/components/icons/services/dollar-icon";
import { LinkIcon } from "@/components/icons/services/link-icon";
import { MobileIcon } from "@/components/icons/services/mobile-icon";
import { SparklesIcon } from "@/components/icons/services/sparkles-icon";

export const services: Service[] = [
  {
    icon: <SparklesIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Mentorship Sessions",
    description: "Get guidance from industry experts and experienced developers throughout the hackathon."
  },
  {
    icon: <BrainIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Problem Statements",
    description: "Choose from diverse real-world challenges across AI/ML, Web3, and IoT domains to solve."
  },
  {
    icon: <LinkIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Expert Judging Panel",
    description: "Projects evaluated by industry leaders based on innovation, execution, and impact."
  },
  {
    icon: <MobileIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Networking Opportunities",
    description: "Connect with fellow innovators, potential co-founders, and industry professionals."
  },
  {
    icon: <BarsIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Project Resources",
    description: "Datasets, APIs, documentation, and starter templates to accelerate your development."
  },
  {
    icon: <CartIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Food & Refreshments",
    description: "Complimentary meals, snacks, and beverages throughout the 24-hour event."
  },
  {
    icon: <DollarIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Cash Prizes",
    description: "Win exciting cash prizes, internship opportunities, and startup incubation support."
  }
];
