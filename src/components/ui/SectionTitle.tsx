import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  variant?: "default" | "testimonials";
  className?: string;
}

export function SectionTitle({
  title,
  variant = "default",
  className,
}: SectionTitleProps) {
  const bgImage =
    variant === "testimonials"
      ? "/images/testimonialsTitleBgr.png"
      : "/images/titleBgr.png";

  return (
    <h2
      className={cn(
        "mx-auto mb-8 w-fit bg-center bg-no-repeat px-12 py-4 text-center font-[family-name:var(--font-roboto-condensed)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl",
        className,
      )}
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "contain",
      }}
    >
      {title}
    </h2>
  );
}
