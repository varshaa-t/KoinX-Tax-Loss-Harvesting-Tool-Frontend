import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
  

function BottomTooltip() {
  
  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>
              <div className="text-primary-blue text-sm underline underline-offset-2 hover:cursor-pointer">How it works?</div>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={8} className="w-80 pl-5">
              <p>Lorem ipsum dolor sit amet consectetur. Euismod id posuere nibh semper mattis scelerisque tellus. Vel mattis diam duis morbi tellus dui consectetur.</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>

  )
}

export default BottomTooltip