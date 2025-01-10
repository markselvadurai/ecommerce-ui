import { twMerge } from "tailwind-merge";

export const NeonLight = ({className}:{className?: string}) => {
    return (
        <div className={twMerge(`container mx-auto w-1/2 border-8 rounded-sm border-black/50 z-10 `,className)} style={
            {
            boxShadow:
            `0px 1px 2px rgba(0,255,255,0.7), 
              0px 2px 4px rgba(0,255,255,0.7), 
              0px 4px 8px rgba(0,255,255,0.7), 
              0px 8px 16px rgba(0,255,255,0.7),
              0px 16px 32px rgba(0,255,255,0.7),
              0px 32px 64px rgba(0,255,255,0.7),
              0px 64px 128px rgba(0,255,255,0.7),
              0px 128px 256px rgba(0,255,255,0.7)`
            }
        }>
        </div>
    )
};