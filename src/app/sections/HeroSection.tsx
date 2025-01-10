import { NeonLight } from "../components/NeonLight"
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision"
import { ButtonsCard } from "../components/ui/tailwindcss-buttons"
export const HeroSection = () => {
  return (
    <div className="relative">
      <BackgroundBeamsWithCollision className="z-0 border-b border-emerald-300 flex flex-col">
        <NeonLight className="absolute top-0" />
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Lace Up.{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-b py-4 from-emerald-500 to-white [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Stand Out.</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-b from-emerald-500 to-white-500 py-4">
              <span className="">Stand Out.</span>
            </div>
          </div>
        </h2>
        
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block mt-10">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1.5 px-5 ring-1 ring-white/10 sm:text-xl md:text-2xl lg:text-2xl">
            <span>
              <a href='http://www.markselvadurai.com/' target='_blank' rel='noreferrer'>
              See more
              </a>
            </span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </BackgroundBeamsWithCollision>
    </div>
  )
}
