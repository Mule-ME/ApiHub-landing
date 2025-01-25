import { Button } from "./";
import { cn } from "@utils/cnHelper";

interface IconButtonProps extends React.ComponentProps<typeof Button> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  iconOnly?: boolean;
}

const IconWrapper = ({
  icon,
  iconOnly,
}: {
  icon: React.ReactNode;
  iconOnly?: boolean;
}) => (
  <span className={cn("flex items-center", iconOnly && "w-5 h-5")}>{icon}</span>
);

export const IconButton = ({
  startIcon,
  endIcon,
  children,
  iconOnly,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <Button
      className={cn(
        "inline-flex items-center gap-2",
        iconOnly && "p-2",
        className
      )}
      {...props}
    >
      {startIcon && <IconWrapper icon={startIcon} iconOnly={iconOnly} />}
      {children}
      {endIcon && <IconWrapper icon={endIcon} iconOnly={iconOnly} />}
    </Button>
  );
};
