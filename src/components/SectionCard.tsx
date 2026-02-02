import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  gradient?: boolean;
  children?: ReactNode;
}

export function SectionCard({ title, description, icon: Icon, onClick, gradient }: SectionCardProps) {
  return (
    <button
      onClick={onClick}
      className="section-card card-hover group w-full text-left"
    >
      <div className="relative z-10">
        <div
          className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${
            gradient
              ? "bg-primary text-primary-foreground"
              : "bg-accent text-accent-foreground"
          } transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mb-2 font-display text-xl font-semibold text-card-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
          Click to explore
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
}
