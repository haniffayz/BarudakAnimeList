import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"
import { ClockCounterClockwise } from "@phosphor-icons/react/dist/ssr"

const History = async() => {
    const user = await authUserSession()
    const history = await prisma.history.findMany({ where: {user_email: user.email} })

    const currentDate = new Date();
    const reversedHistory = history.reverse()

    let previousAnimeId = null;

    return (
        <div>
             <div className="flex justify-center items-center p-12 md:py-16 md:mb-6 flex-row gap-2">
                 <ClockCounterClockwise size={32} />
                 <h1 className="2xl:text-3xl xl:text-2xl md:text-xl text-2xl font-bold">RIWAYAT</h1>
             </div>

             <div className="grid 2xl:grid-cols-6 md:grid-cols-4 xl:grid-cols-5 lg:grid-cols-5 sm:grid-cols-4 grid-cols-1 gap-4 md:gap-7 xl:gap-10 2xl:gap-20 sm:gap-20 px-5 bg-colos-accent dark:bg-colos-sidebarColor relative">
                 {reversedHistory?.map((history)=> {
                    const historyDate = new Date(history.time);
                    const diffTime = Math.abs(currentDate - historyDate);
                    let formattedDate;

                    if (diffTime < 24 * 60 * 60 * 1000) {
                        formattedDate = historyDate.toLocaleTimeString('id', {
                            hour: 'numeric',
                            minute: 'numeric'
                        });
                    } else if (diffTime < 2 * 24 * 60 * 60 * 1000) {
                        formattedDate = 'Kemarin';
                    } else {
                        formattedDate = historyDate.toLocaleDateString('id', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        });
                    }

                    if (history.anime_mal_id !== previousAnimeId) {
                        previousAnimeId = history.anime_mal_id;
                        return (
                            <Link href={`/anime/${history.anime_mal_id}`} className="cursor-pointer rounded-xl relative">
                                <div className="relative" key={history.id}>
                                    <div className="flex gap-8 md:block">
                                        <Image src={history.anime_image} alt="" width={150} height={150} className="w-60 max-w-44 md:max-w-full max-h-64 md:max-h-[15rem] xl:max-h-[17.5rem] 2xl:max-h-[18.5rem] h-[18rem] object-cover rounded-lg"/>
                                        <div className="flex flex-col justify-center items-start">
                                            <h1 className="font-bold md:text-sm xl:text-base 2xl:text-lg text-lg md:pt-4 pb-4 md:pr-12">{history.anime_title}</h1>
                                            <div className="flex flex-row gap-1 text-[14px]">
                                                <ClockCounterClockwise size={24} className=""/>
                                                <h1 className="pt-[2px]">{formattedDate}</h1>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                           </Link>   
                        );
                    }
                 })}
             </div>
        </div>
    );
}

export default History;


