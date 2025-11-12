import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {  LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from "react";

interface Props extends PropsWithChildren {
  title: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}
export function CusTooltip({ children, title, Icon }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Icon className="size-4" />
      </TooltipTrigger>
      <TooltipContent className="space-y-2 flex flex-col items-center justify-center">
        <p>{title}</p>
        <div>{children}</div>
      </TooltipContent>
    </Tooltip>
  );
}
