import { FloatingDock } from "../components/ui/floating-dock"
import { BiAccessibility } from "react-icons/bi";
import { TiHome } from "react-icons/ti";
import { GiConverseShoe } from "react-icons/gi";
import { BsAlarm } from "react-icons/bs";
import { FaFire } from "react-icons/fa";


export const SectionHeader = () => {
    const navItems = [
        {
            title: 'Home',
            icon: <TiHome />,
            href: '/'
        },
        {
            title: 'Hot',
            icon: <FaFire />,
            href: '#hot'
        },
        {
            title: 'Shoes',
            icon: <GiConverseShoe />,
            href: '/'
        },
        {
            title: 'Coming Soon',
            icon: <BsAlarm />,
            href: '/'
        },
    ]
    return (
        <nav className="relative w-full z-10">
            <div className="fixed bottom-8 left-[5%] w-full md:left-1/2 lg:left-1/2 md:transform md:-translate-x-1/2 lg:transform lg:-translate-x-1/2 sm:max-w-sm md:max-w-md lg:max-w-lg">
                <FloatingDock items={navItems}
                    desktopClassName="justify-center" mobileClassName="justify-center" />
            </div>
        </nav>
    )
}
// "fixed bottom-8 sm:left-1/3 md:left-1/2 lg:left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"