import Link from "next/link"
import { Star } from "@phosphor-icons/react/dist/ssr"


const Episodes = async({api}) => {

    return (
        <div className="left-0">
          <h1 className="md:text-4xl xl:text-xl 2xl:text-3xl text-2xl font-bold">Episode</h1>
            <div className="grid 2xl:grid-cols-7 xl:grid-cols-4 md:grid-cols-5 grid-cols-4 2xl:gap-12 xl:gap-28 md:p-6 md:gap-16 2xl:p-8 mt-10">
            {api.data?.map((episode, index)=> {
                return(
                <Link href={episode.forum_url} target="blank" className="2xl:py-4 xl:py-0 md:py-4 py-4" key={index}>
                <div className="md:w-28 w-16 h-14 md:h-24 rounded-xl border border-colos-primary shadow-xl bg-colos-accent dark:bg-colos-primary hover:bg-colos-SidebarAccent transition-all ease-linear hover:text-colos-accent flex flex-col">
                    <h3 className="justify-center text-center md:p-6 p-2 items-center flex text-2xl relative">{episode.mal_id}</h3>
                    <h3 className="absolute ml-8 mt-14 flex flex-row text-base font-thin md:visible invisible">
                        <Star size={22} className=""/>
                        {episode.score}
                    </h3>
                </div>
                </Link>
                )
            })}
            </div>

        </div>
    )
}

export default Episodes