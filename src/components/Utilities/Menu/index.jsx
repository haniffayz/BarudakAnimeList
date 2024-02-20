"use client"
import { SignIn } from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"
import { List } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"
import Theme from "../../theme/theme"
import { ThemeProvider } from "next-themes"
import { UserCircle } from "@phosphor-icons/react/dist/ssr"

export const Menu = () => {
    const [isOpen, setOpen] = useState(true)
    const OpenSideBar = () => {
    setOpen((prevState) => !prevState);
  }
  
    const Button = () => {
        return (
            <div className="cursor-pointer absolute 2xl:right-12 xl:right-8 invisible md:visible md:right-4">
                <UserCircle size={50}  onClick={OpenSideBar}/>
            </div>
        )
    }

const ButtonOpen = () => {
    return (
<>
        <Button />

        <div className="fixed right-10 2xl:top-[6.5rem] xl:top-[5rem] md:top-[4.5rem] ">
            <div className="border border-colos-sidebarColor dark:border-colos-accent w-40 h-10 bg-colos-accent dark:bg-colos-primary rounded-lg hover:bg-colos-SidebarAccent hover:w-40 hover:h-10 hover:rounded-lg hover:text-colos-accent ease-in-out dark:hover:bg-colos-SidebarAccent dark:hover:w-40 dark:hover:h-10 dark:hover:rounded-lg dark:hover:text-colos-accent dark:ease-in-out">
                <div className="text-lg ml-2 mt-1">

                  <Link className="flex-row flex"  href="/api/auth/signin">
                     <SignIn className="mt-1 mr-1" size={22} />
                       Sign In
                  </Link>

                </div>
               
            </div>
        </div>
</>
    )
            
}
    return isOpen ? <Button /> : <ButtonOpen />
}

export default Menu