import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"
import Comment from "./comment/page"
import Collection from "./collection/collection" 
import UserActionButton from "@/components/Utilities/Menu/userActionButton"

const Page = async() => {
    const user = await authUserSession()
    return (
        <div className="mt-24 text-color-primary flex flex-col justify-center items-center">
            <div className="p-[4rem] md:p-[3rem] border border-colos-primary dark:border-colos-accent md:w-[40rem] mx-8 rounded-xl bg-colos-CardDashboard dark:bg-colos-DarkCardDashboard dark:shadow-lg shadow-xl dark:shadow-colos-accent items-center justify-center Dashboard-card cursor-pointer flex flex-col md:flex-row">
                <div className="text-center md:flex-row flex flex-col">
                    <Image className="rounded-full justify-center" src={user.image} alt="....." width={200} height={200}/>
                </div>
                <div className="md:p-14 py-8 text-center md:text-start gap-3">
                    <div className="flex flex-col">
                        <h3 className="text-xl">@{user.name}</h3>
                    </div>
                     <div className="flex flex-row pt-2">
                         <h3 className="">Email: {user.email}</h3>
                     </div>
                </div>
            </div>

            <div className="z-40">
                <UserActionButton/>
            </div>

            <div className="flex flex-wrap gap-4 py-8">
                <Collection/>
                <Comment/>

            </div>
        </div>
    )
}

export default Page