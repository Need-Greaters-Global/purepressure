import Image from "next/image";
import { Button } from "./Button";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ image, title, description, href }: ServiceCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded bg-white shadow-md transition-shadow hover:shadow-lg">
      <div className="relative h-36 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 364px"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 font-[family-name:var(--font-roboto-condensed)] text-lg font-bold text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
        <Button href={href} variant="outline" className="self-start text-xs">
          Learn More
        </Button>
      </div>
    </div>
  );
}
