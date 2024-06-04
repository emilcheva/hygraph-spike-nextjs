import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

type CtaButtonProps = {
  title: string;
  href?: string;
  className?: string;
};

const CtaButton = ({
  title,
  href,
  className,
  ...restProps
}: CtaButtonProps) => {
  return (
    <Button
      size="lg"
      variant="destructive"
      asChild={!!href}
      className={cn("text-lg", className)}
      {...restProps}
    >
      {href ? <Link href={href}>{title}</Link> : title}
    </Button>
  );
};

export default CtaButton;
