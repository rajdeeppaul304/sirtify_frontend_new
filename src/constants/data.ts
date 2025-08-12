import {
  Handshake,
  Settings,
  BarChart3,
  Globe,
  Share2,
  GraduationCap,
} from "lucide-react";
import type {
  User,
  Step,
  NavigationItem,
  SPPOption,
  ProgramTrack,
  SuccessStory,
} from "../types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Home", href: "/", isActive: true },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/program" },
  { label: "Learners", href: "/learners" },
  { label: "Certifications", href: "/certifications" },
  {
    label: "More",
    href: "#",
    hasDropdown: true,
              dropdownItems: [
            // { label: "Blog", href: "#blog" },
            // { label: "Careers", href: "#careers" },
            // { label:"Certifcations",  href:"/certifications"},
            // { label:"Insurance",  href:"/insurance"},
            // { label:"Media and Campaign",  href:"/media-and-campaign"},
            // { label:"Freelancer",  href:"/freelancer"},
            { label: "Sirtify International", href: "/sirtify-international" },
            { label: "Contact Us", href: "/contact" },
            // { label: "FAQ", href: "/faq" },         
           ],


  },
];

export const SPP_OPTIONS: SPPOption[] = [
  { id: "spp-int", label: "SPP Int", href: "#spp-int" },
  { id: "spp-freelance", label: "SPP Freelance", href: "#spp-freelance" },
  { id: "spp-student", label: "SPP Student", href: "#spp-student" },
];

export const USERS: User[] = [
  {
    id: "james-canon",
    name: "James Canon",
    role: "React Developer",
    company: "Worked at Microsoft",
    image: "/assets/about1.jpg",
    borderColor: "border-blue-400",
  },
  {
    id: "stacy-larin",
    name: "Stacy Larin",
    role: "UI/UX Designer",
    company: "Worked at Targer",
    image: "/assets/about2.jpg",
    borderColor: "border-blue-400",
  },
];

export const STEPS: Step[] = [
  {
    id: 1,
    title: "Skill Training",
    description:
      "Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand",
    icon: Handshake,
  },
  {
    id: 2,
    title: "Paid Practice",
    description: "Analyze your performance and create goegeous report",
    icon: Settings,
  },
  {
    id: 3,
    title: "Lifetime Progress",
    description: "Quiuckly navigate you anda engage with your adience",
    icon: BarChart3,
  },
];

export const PROGRAM_TRACKS: ProgramTrack[] = [
  {
    id: "spp-international",
    title: "SPP International",
    subtitle: "Your global career journey in just 18 months",
    features: [
      "Global job placement with visa support",
      "Practice phase with real client projects",
      "NSQF certified skill development",
    ],
    buttonText: "Join Now",
    variant: "default",
    icon: Globe,
  },
  {
    id: "spp-domestic-freelancer",
    title: "SPP Domestic Freelancer",
    subtitle: "Your global career journey in just 18 months",
    features: [
      "Immediate income through verified projects",
      "Formal payroll with EPF and ESI benefits",
      "Insurance-backed payment guarantee",
    ],
    buttonText: "Join Now",
    variant: "highlighted",
    icon: Share2,
  },
  {
    id: "spp-freshers-track",
    title: "SPP Freshers Track",
    subtitle: "Perfect for students and recent graduates",
    features: [
      "College-to-career transition support",
      "Industry-ready portfolio development",
      "First job placement assistance",
    ],
    buttonText: "Join Now",
    variant: "default",
    icon: GraduationCap,
  },
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "rajesh-kumar",
    name: "Rajesh Kumar",
    quote:
      "From a small town in India to working as a senior developer in Berlin. Sirtifai made my international career possible.",
    designation: "SPP International Graduate",
    location: "Germany",
    image: "/assets/success.jpg",
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    quote:
      "As a mother returning to work, the Domestic Freelancer program gave me flexibility and steady income while updating my skills.",
    designation: "SPP Domestic Freelancer",
    location: "India",
    image: "/assets/success.jpg",
  },
  {
    id: "vijay-reddy",
    name: "Vijay Reddy",
    quote:
      "Started in my final year of college, now working at a tech giant in Singapore. The portfolio I built during SPP got me the job.",
    designation: "SPP Freshers Track Graduate",
    location: "Singapore",
    image: "/assets/success.jpg",
  },
];

export const CERTIFICATIONS = [
  {
    id: "aws",
    name: "aws",
    logo: "/assets/cert1.png",
    color: "text-black",
  },
  {
    id: "cloudera",
    name: "CLOUDERA",
    logo: "/assets/cert2.png",
    color: "text-orange-500",
  },
  {
    id: "uipath",
    name: "UiPath",
    logo: "/assets/cert3.png",
    color: "text-orange-500",
  },
  {
    id: "blueprism",
    name: "blueprism",
    logo: "/assets/cert4.png",
    color: "text-blue-600",
  },
];

export const ACADEMIC_PARTNERS = [
  {
    id: "aws-academic",
    name: "aws",
    logo: "/assets/cert1.svg",
    color: "text-black",
  },
  {
    id: "cloudera-academic",
    name: "CLOUDERA",
    logo: "/assets/cert2.png",
    color: "text-orange-500",
  },
];
