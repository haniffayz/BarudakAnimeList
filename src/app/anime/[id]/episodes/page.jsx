"use client"
import Link from "next/link"
import { PlayCircle} from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"

const Episodes = async({api, anime_mal_id, user_email, anime_image, anime_title, time}) => {

    const sortedEpisodes = api.data?.sort((a, b) => a.mal_id - b.mal_id)

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    };

    return (
       <>
        <div className="left-0">
            <h1 className="md:text-4xl xl:text-xl 2xl:text-3xl text-2xl font-bold">Episode</h1>
            <div className="grid 2xl:grid-cols-7 xl:grid-cols-5 md:grid-cols-4 grid-cols-1 2xl:gap-12 xl:gap-28 md:p-6 md:gap-16 2xl:p-8 xl:pr-36 mt-2">
                {sortedEpisodes?.map((episode, index)=> {
                    const [isCreated, setIsCreated] = useState(false)

                    const handleHistory = async (event) => {
                        event.preventDefault()

                        const data = { anime_mal_id, user_email, anime_image, anime_title, time }
                        const historyPromise = fetch("/api/v1/history", {
                            method: "POST",
                            body: JSON.stringify(data)
                        }).then(response => response.json())

                        const openLinkPromise = new Promise(resolve => {
                            setTimeout(() => {
                                resolve(window.location.href = `${anime_mal_id}/episodes/${episode.mal_id}`);
                            }, 1); 
                        });

                        Promise.all([historyPromise, openLinkPromise])
                            .then(results => {
                                const [history, _] = results;
                                if (history.success) {
                                    setIsCreated(true);
                                }
                            });
                    }

                    return(
                        <Link href={`${anime_mal_id}/episodes/${episode.mal_id}`} key={index} className="2xl:py-4 xl:py-0 md:py-4 py-4" onClick={handleHistory}>
                            <div className="md:w-20 xl:w-[5rem] xl:h-[5rem] w-full h-[4rem] md:h-20 rounded-xl border border-colos-primary shadow-xl dark:shadow-md dark:shadow-colos-accent bg-colos-accent dark:bg-colos-DarkInfo dark:border-colos-accent hover:bg-colos-SidebarAccent dark:hover:bg-colos-SidebarAccent dark:hover:text-colos-primary transition-all ease-linear hover:text-colos-accent flex flex-col">
                                <h3 className="md:justify-center md:text-center justify-start pl-6 md:p-5 p-1 items-center flex text-lg relative font-sans ">
                                    <div className="md:hidden block">
                                        <h1 className="font-bold">Episode {episode.mal_id}</h1>
                                        <h1 className="text-base">"{truncateText(episode.title, 22)}"</h1>
                                    </div>
                                    <div className="md:block hidden text-2xl">
                                        {episode.mal_id}
                                    </div>
                                    <button className="absolute flex justify-end right-5 md:hidden ">
                                        <PlayCircle size={32} weight="fill" className="border-[2px] border-colos-SidebarAccent rounded-full"/>
                                    </button>
                                </h3>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
      </>
    )
}

export default Episodes