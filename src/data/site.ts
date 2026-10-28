export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  size: "large" | "medium" | "small";
  role: string;
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Restaurant",
    description: "The main goal was to design a responsive website that makes the restaurant feel inviting while keeping the user experience simple. Visitors should be able to understand the brand quickly, browse smoothly, and feel encouraged to take action.",
    image: "/assets/project-1.jpeg",
    tech: ["React", "Tailwind"],
    size: "medium",
    role: "Frontend Lead",
    liveUrl: "https://restaurant-ashen.vercel.app/",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Event Booking Platform",
    description: "EventPass is a premium frontend event booking website designed for movies, music concerts, and football events. The platform presents events in a clean, modern, and visually engaging layout, allowing users to explore featured events, view event details, and experience a smooth ticket-booking interface.",
    image: "/assets/projec.jpeg",
    tech: ["React", "Framer Motion", "Tailwind"],
    size: "medium",
    role: "Frontend Lead",
    liveUrl: "https://eventpass-khaki.vercel.app/",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Hotel Webapp",
    description: "Highlife Grand Hotel is a luxury hotel website built to present a five-star hospitality brand with elegance, trust, and a smooth booking-focused experience.",
    image: "/assets/project-2.jpeg",
    tech: ["Nextjs", "TypeScript",],
    size: "medium",
    role: "Frontend Developer",
    liveUrl: "https://highlife-hotel-webapp.vercel.app/",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Salon Store",
    description: "Maison Hair is a premium hair and beauty brand website designed to give the client a clean, modern, and trustworthy online presence.",
    image: "/assets/project-3.jpeg",
    tech: ["React", "Framer Motion", "Tailwind"],
    size: "medium",
    role: "Frontend Developer",
    liveUrl: "https://maisonhair.vercel.app/",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Shipping Company Webapp",
    description: "Mide Routes is a modern travel and route-focused website designed to give the client a clean, professional, and easy-to-use online presence.",
    image: "/assets/project-4.jpeg",
    tech: ["React", "tailwind", "lucide-react"],
    size: "medium",
    role: "Frontend Developer",
    liveUrl: "https://mide-routes.vercel.app/",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Real Estate Landing Page",
    description: "This project is a modern, responsive real estate landing page built for a property brand that wanted to showcase completed and ongoing projects while generating qualified leads through a prominent contact form.",
    image: "/assets/project-5.jpeg",
    tech: ["React"],
    size: "medium",
    role: "Frontend Developer",
    liveUrl: "https://royal-estate-eight.vercel.app/",
    githubUrl: "https://github.com",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Customer Support & Communication",
    items: ["Complaint Handling", "Inbound & Outbound Support", "Follow-up & Escalation", "Customer Onboarding Support", "Data Confidentiality", "CRM Documentation"],
  },
  {
    category: "Fintech & Product Understanding",
    items: ["Digital Payments Understanding", "Transaction Flow Awareness", "Fintech Customer Experience", "Technical Troubleshooting", "User Verification Awareness"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS Modules", "Styled Components", "SCSS"],
  },
  {
    category: "Animation",
    items: ["Framer Motion", "GSAP", "CSS Animations"],
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "Vercel", "Webpack", "Google Workspace", "Google Sheets", "Salesforce", "Slack"],
  },
];

export const experience = [
  {
    role: "Frontend Developer & Digital Product Support",
    company: "Freelance",
    period: "Jun 2024 — Present",
    summary: "Built responsive websites and digital interfaces for clients, with focus on usability, clear navigation, and smooth user experience. Communicated with clients to understand their needs, explain technical decisions in simple language, handle feedback, and deliver corrections professionally.",
  },
  {
    role: "Technical Support & Customer Systems Analyst",
    company: "Dove Tech World",
    period: "April 2025 — November 2025",
    summary: "Documented structural platform errors and routed systemic visual display bugs cleanly to internal engineering crews via precise replication procedures and Handled sensitive information with confidentiality and professionalism, and documented interactions in CRM systems.",
  },
  {
    role: "UI Developer",
    company: "Tech Agency",
    period: "2021 — 2023",
    summary: "Developed design systems and component libraries for enterprise clients. Reduced build times by 40% through optimized tooling.",
  },
];

export const stats = [
  { value: "3+", label: "Years building" },
  { value: "40+", label: "Responsive projects" },
  { value: "100%", label: "Accessible focus" },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/codemonk-silver" },
  { name: "LinkedIn", url: "https://linkedin.com/in/eniola-olajugbagbe-058aa2281" },
  { name: "Twitter", url: "https://twitter.com" },
];

export const recommendations = [
  {
    name: "Victor",
    role: "Product Manager",
    company: "McCab Techology Institute",
    text: "Eniola was easy to work with, patient, and very clear in communication. He listened carefully to what I needed, explained the process in a simple way, and delivered a clean, responsive website. I also appreciated how he followed up, handled corrections professionally, and made sure I understood the final result.",
  },
  {
    name: "Tunde Johnson",
    role: "Engineering Lead",
    company: "Psk studio",
    text: "Working with Eniola on our design system was a game-changer. The component architecture is clean, well-documented, and scales beautifully across teams.",
  },
  {
    name: "Lekan Adebayo",
    role: "Design Director",
    company: "Trapaudio",
    text: "Rare to find a developer who bridges design and engineering so seamlessly. Every interaction feels intentional, every animation has purpose.",
  },
  {
    name: "Hammed Usman",
    role: "Customer Support Manager",
    company: "y'links Design Studio",
    text: "He communicated clearly, paid attention to the details I gave him, and made the website look professional on both mobile and desktop. What stood out most was his patience, quick response, and willingness to explain things in a simple way.",
  },
];

export const currentlyBuilding = {
  title: "RhookPay",
  description: "Move money with confidence. Send and receive payments, manage your naira, and explore digital assets — all in one beautifully simple experience.",
  progress: 72,
  tech: ["React", "TypeScript", "Zustand", "Tailwind CSS", "Framer Motion", "Express.js", "Node.js", "PostgreSQL", "Redis"],
};
