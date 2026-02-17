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
        "mx-auto mb-8 w-fit bg-center bg-no-repeat px-6 py-3 text-center font-[family-name:var(--font-roboto-condensed)] text-xl font-bold uppercase tracking-wide text-white md:px-12 md:py-4 md:text-2xl lg:text-3xl",
        className,
      )}
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "100% 100%",
      }}
    >
      {title}
    </h2>
  );
}
