"use client"
import { SignIn } from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"
import { List } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"
import Theme from "../../theme/theme"
import { ThemeProvider } from "next-themes"
import { UserCircle } from "@phosphor-icons/react/dist/ssr"
import UserActionButton from "./userActionButton"
import { authUserSession } from "@/libs/auth-libs"

const Menu = async() => {
    const [isOpen, setOpen] = useState(true)
    const OpenMenu = () => {
    setOpen((prevState) => !prevState);
  }

//   const user = await authUserSession()
  
    const Button = () => {
        return (
            <div className="md:fixed lg:right-10 md:right-4 2xl:top-2 xl:top-[25px] md:top-[25px] z-50 relative flex justify-center items-center md:mt-5 mt-20">
                <UserCircle size={50}  onClick={OpenMenu}/>
            </div>
        )
    }

const ButtonOpen = () => {
    return (
<>
        <Button />
        <div className="fixed right-10 2xl:top-[6.5rem] xl:top-[5rem] md:top-[4.5rem] z-[99999999999999]">
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