import { FC, PropsWithChildren } from "react";
import { cn } from "@utils/cnHelper";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
};
