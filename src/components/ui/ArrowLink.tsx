import { ArrowRight } from "lucide-react";

interface ArrowLinkProps {
  text: string;
  href?: string;
}

export default function ArrowLink({ text, href = "#" }: ArrowLinkProps) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-text-primary"
    >
      <span>{text}</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
