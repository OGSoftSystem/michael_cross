import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LogOut } from "lucide-react";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
}
export function CusTooltip({ children, title }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <LogOut className="size-4"/>
      </TooltipTrigger>
      <TooltipContent className="space-y-2 flex flex-col items-center justify-center">
        <p>{title}</p>
        <div>{children}</div>
      </TooltipContent>
    </Tooltip>
  );
}
