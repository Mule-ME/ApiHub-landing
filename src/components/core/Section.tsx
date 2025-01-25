import { FC, PropsWithChildren } from "react";
import { cn } from "@utils/cnHelper";

interface SectionProps extends PropsWithChildren {
  className?: string;
  id?: string;
}

export const Section: FC<SectionProps> = ({ children, className, id }) => {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      {children}
    </section>
  );
};
