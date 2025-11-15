import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {  LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from "react";

interface Props extends PropsWithChildren {
  title: string;
  className:string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}
export function CusTooltip({ children, title, Icon, className }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Icon className={className} />
      </TooltipTrigger>
      <TooltipContent className="space-y-2 flex flex-col items-center justify-center">
        <p>{title}</p>
        <div>{children}</div>
      </TooltipContent>
    </Tooltip>
  );
}
