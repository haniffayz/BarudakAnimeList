"use client"
import Link from "next/link"
import InputSearch from "./inputSearch"
import Theme from "@/components/theme/theme"
import { ThemeProvider } from "next-themes"
import SideBar from "../Sidebar/SideBar"

const Navbar = () => {
    return (
        <nav className="2xl:sticky sm:sticky lg:sticky xl:sticky sticky bg-colos-accent md:dark:bg-colos-primary 
        dark:bg-colos-DarkInfo z-50 "> 
            <div className="flex 2xl:p-4 md:p-2 p-4 md:flex-row flex-col justify-between md:items-center gap-4">
                <SideBar />
                     <Link href="/" className="font-bold px-2 pb-4 md:px-0 md:pb-2 md:pt-2 justify-center items-center 2xl:ml-7 xl:ml-12 md:ml-16 text-3xl title text dark:bg-gradient-to-r dark:from-colos-SidebarAccent dark:to-colos-accent bg-gradient-to-r from-colos-SidebarAccent to-colos-title tracking-[0.08em]">
                        BarudakAnimeList
                     </Link>
                  <InputSearch />
                <div className="flex md:hidden lg:mr-2 xl:mr-0 lg:flex md:right-24 xl:right-[6.5rem] right-5 absolute cursor-pointer">
                  <ThemeProvider enableSystem={true} attribute="class">
                     <Theme/> 
                 </ThemeProvider>
               </div>
            </div>
        </nav>
        
    )
}

export default Navbar