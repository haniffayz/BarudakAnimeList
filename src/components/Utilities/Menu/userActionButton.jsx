import Link from "next/link"
import { SignIn, SignOut } from "@phosphor-icons/react/dist/ssr"
import { authUserSession } from "@/app/libs/auth-libs";

const UserActionButton = async() => {
    const user = await authUserSession();
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionIcon = user ? <SignOut className="mt-1 mr-1" size={24} /> : <SignIn className="mt-1 mr-1" size={24} />
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="md:fixed lg:right-10 md:right-4 2xl:top-8 xl:top-[25px] md:top-[25px] z-50 relative flex justify-center items-center md:mt-5 mt-20">
            <div className="border border-colos-sidebarColor dark:border-colos-accent md:w-12 h-10 bg-colos-accent dark:bg-colos-DarkInfo md:dark:bg-colos-primary rounded-lg hover:bg-colos-SidebarAccent md:hover:w-12 hover:h-10 hover:rounded-lg hover:text-colos-accent  dark:hover:bg-colos-SidebarAccent md:dark:hover:w-12 dark:hover:h-10 dark:hover:rounded-lg dark:hover:text-colos-accent shadow-lg Dashboard-card absolute md:right-0 w-32 hover:w-32 dark:hover:w-32">
                <div className="text-lg ml-2 mt-1 userActionButton">
                  <Link className="flex-row flex"  href={actionURL}>
                     {actionIcon}
                     <h3 className="md:hidden block">{actionLabel}</h3>
                  </Link>
                </div>
               
            </div>
        </div>
    )
}

export default UserActionButton