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
  // { label: "About", href: "/about" },
  {
    label: "About",
    href: "/about",
    hasDropdown: true,
    dropdownItems: [

      { label: "Why Sirtifai ", href: "/about" },
      // { label: "media and campaigns", href: "/media-and-campaign" },
      { label: "Insurance", href: "/insurance" },

    ],
  },

  {
    label: "Program",
    href: "/program",
    hasDropdown: true,
    dropdownItems: [

      { label: "International ", href: "/international" },
      { label: "Freelancer ", href: "/program-practice" },
      { label: "Spp", href: "/program-progress" },

    ],


  },
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
      { label: "Insurance", href: "/insurance" },
      // { label:"Media and Campaign",  href:"/media-and-campaign"},
      // { label:"Freelancer",  href:"/freelancer"},
      // { label: "Sirtify International", href: "/sirtify-international" },
      { label: "Contact Us", href: "/contact" },
      // { label: "FAQ", href: "/faq" },         
    ],


  },
];

export const SPP_OPTIONS: SPPOption[] = [
  { id: "spp-int", label: "International", href: "#spp-int" },
  { id: "spp-freelance", label: "Freelance", href: "#spp-freelance" },
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
    id: "rahul-gupta",
    name: "Rahul Gupta",
    quote: "Unlike other bootcamps, SPP's practice phase actually paid me ₹18K monthly while I built real projects. Got hired without applying to a single job!",
    designation: "Full Stack Developer",
    company: "Wipro",
    rating: 5.0,
    salary: "₹12L",
    image: "/assets/learners/l.png",
  },
  {
    id: "sneha-patel",
    name: "Sneha Patel",
    quote: "The lifetime support is incredible. Even after 2 years, SPP helped me switch to a better role with 40% salary hike. Best investment I ever made.",
    designation: "Data Scientist",
    company: "Accenture",
    rating: 5.0,
    salary: "₹15L",
    image: "/assets/learners/l.png",
  },
  {
    id: "amit-kumar",
    name: "Amit Kumar",
    quote: "NSF certification and portfolio-based hiring worked perfectly. Employers were impressed with my real project experience from the practice phase.",
    designation: "UI/UX Designer",
    company: "Infosys",
    rating: 5.0,
    salary: "₹10L",
    image: "/assets/learners/l.png",
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    quote: "From a small town in India to working as a senior developer in Berlin. Sirtifai made my international career possible with their comprehensive training.",
    designation: "Senior Developer",
    company: "TechCorp Berlin",
    rating: 5.0,
    salary: "€65K",
    image: "/assets/learners/l.png",
  },
  {
    id: "vijay-reddy",
    name: "Vijay Reddy",
    quote: "Started in my final year of college, now working at a tech giant in Singapore. The portfolio I built during SPP got me the job.",
    designation: "Software Engineer",
    company: "Google Singapore",
    rating: 5.0,
    salary: "S$85K",
    image: "/assets/learners/l.png",
  },
  {
    id: "anita-desai",
    name: "Anita Desai",
    quote: "The freelancer program gave me the flexibility I needed as a working mother. I now earn ₹25K monthly while managing my family responsibilities.",
    designation: "Frontend Developer",
    company: "Freelancer",
    rating: 5.0,
    salary: "₹25K/month",
    image: "/assets/learners/l.png",
  },
  {
    id: "rajesh-kumar",
    name: "Rajesh Kumar",
    quote: "SPP's international program opened doors I never thought possible. Now working in Canada with a salary that changed my family's life forever.",
    designation: "DevOps Engineer",
    company: "Shopify Canada",
    rating: 5.0,
    salary: "C$95K",
    image: "/assets/learners/l.png",
  },
  {
    id: "meera-patel",
    name: "Meera Patel",
    quote: "The certification program was rigorous but worth it. I got hired at Microsoft within 3 months of completing the course.",
    designation: "Cloud Architect",
    company: "Microsoft",
    rating: 5.0,
    salary: "₹35L",
    image: "/assets/learners/l.png",
  },
  {
    id: "suresh-verma",
    name: "Suresh Verma",
    quote: "As a career switcher from mechanical engineering to software development, SPP provided the perfect foundation. Now working at Amazon!",
    designation: "Backend Developer",
    company: "Amazon",
    rating: 5.0,
    salary: "₹28L",
    image: "/assets/learners/l.png",
  },
];

export const CERTIFICATIONS = [
  {
    id: "deel",
    name: "deel",
    logo: "/assets/home/deel.png",
    color: "text-black",
  },
  {
    id: "walmart",
    name: "walmart",
    logo: "/assets/home/walmart.png",
    color: "text-black",
  },
  {
    id: "amazon",
    name: "amazon",
    logo: "/assets/home/amazon.png",
    color: "text-black",
  },
  {
    id: "apple",
    name: "apple",
    logo: "/assets/home/apple.png",
    color: "text-black",
  },
];

export const ACADEMIC_PARTNERS = [
  {
    id: "nus",
    name: "NUS",
    logo: "/assets/home/nus.png",
    color: "text-black",
  },
  {
    id: "harvard",
    name: "Harvard",
    logo: "/assets/home/harvard.png",
    color: "text-orange-500",
  },
];

export const MEMBERSHIP_RECOGNITION = [
  {
    id: "nasscom",
    name: "NASSCOM",
    logo: "/assets/home/nasscom.png",
    color: "text-black",
  },
  {
    id: "skill-india",
    name: "Skill India",
    logo: "/assets/home/skill-india.png",
    color: "text-black",
  },
  {
    id: "msme",
    name: "MSME",
    logo: "/assets/home/msme.png",
    color: "text-black",
  },
  {
    id: "bbb",
    name: "BBB",
    logo: "/assets/home/bbb.png",
    color: "text-black",
  }
];