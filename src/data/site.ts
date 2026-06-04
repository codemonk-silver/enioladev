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
    description: "Full-featured online experience with cart, checkout, and payment integration. Built for scale with server-side rendering and real-time inventory sync.",
    image: "/assets/project-1.jpeg",
    tech: ["React", "Next.js", "Stripe", "Tailwind"],
    size: "large",
    role: "Frontend Lead",
    liveUrl: "https://restaurant-ashen.vercel.app/",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Hotel Landing Page",
    description: "Analytics dashboard with real-time data visualization, custom chart components, and dark mode by default.",
    image: "/assets/project-2.jpeg",
    tech: ["React", "TypeScript", "D3.js"],
    size: "medium",
    role: "UI Developer",
    liveUrl: "https://highlife-hotel-webapp.vercel.app/",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Salon Store",
    description: "Dynamic portfolio builder with theme customization, MDX content support, and animated page transitions.",
    image: "/assets/project-3.jpeg",
    tech: ["Next.js", "Framer Motion", "MDX"],
    size: "medium",
    role: "Frontend Developer",
    liveUrl: "https://mybooshair.vercel.app/",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Shipping Company Webapp",
    description: "Location-aware property search with interactive maps, detailed listings, and virtual tour integration.",
    image: "/assets/project-4.jpeg",
    tech: ["React", "OpenWeather API"],
    size: "small",
    role: "Solo Developer",
    liveUrl: "https://mide-routes.vercel.app/",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Real Estate Landing Page",
    description: "Collaborative task board with drag-and-drop, real-time updates, and team workspace management.",
    image: "/assets/project-5.jpeg",
    tech: ["React", "Redux", "Node.js"],
    size: "small",
    role: "Full Stack",
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
    role: "Customer Support / Communication Experience",
    company: "Dove Tech World",
    period: "April 2025 — November 2025",
    summary: "Supported customers through WhatsApp, phone calls, email, and social media by responding to enquiries, explaining services, resolving complaints, and following up on customer issues. Handled sensitive information with confidentiality and professionalism, and documented interactions in CRM systems.",
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
  { name: "GitHub", url: "https://github.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
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
  title: "Design System Toolkit",
  description: "An open-source collection of accessible, animated React components with zero dependencies. Building in public on Twitter.",
  progress: 72,
  tech: ["React", "TypeScript", "Storybook"],
};
