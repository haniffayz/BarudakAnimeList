import Link from "next/link"
import { BookmarkSimple, Fire, House, CalendarCheck, UserCircle, ClockCounterClockwise } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import { authUserSession } from "@/libs/auth-libs"
import { ListBullets } from "@phosphor-icons/react/dist/ssr"

const SideMenu = async() => {

    const user = await authUserSession()

    return (
        <div className="shadow-xl fixed w-full h-14 bg-colos-accent dark:bg-colos-DarkInfo bottom-0 md:hidden block z-50">
            <div className="flex flex-row justify-center items-center gap-8 pt-3">
                <div className="">
                    <Link href={'/users/dashboard'}>
                        {/* <UserCircle size={34} /> */}
                        {
                            user && <Image src={user.image} width={50} height={50} alt="" className="rounded-full w-9 border border-colos-primary dark:border-colos-accent"/>
                        }
                         {
                            !user && <UserCircle size={34} weight="fill"/>
                         }
                    </Link>
                </div>
                <div className="">
                    <Link href={'/schedules'}>
                        <CalendarCheck size={32} className="" weight="fill"/>
                    </Link>
                </div>
                <div className="">
                    <Link href={'/'}>
                        <House className="text-colos-SidebarAccent" size={32} weight="fill"/>
                    </Link>
                </div>
                <div className="">
                    <Link href={'/users/history'}>
                       <ClockCounterClockwise size={32} weight="fill" />
                    </Link>
                </div>
                <div className="">
                    <Link href={'/users/dashboard/collection'}>
                        <BookmarkSimple size={32} weight="fill" className=""/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideMenu