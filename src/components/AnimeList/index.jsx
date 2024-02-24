import Image from "next/image"
import Link from "next/link"
import { Star } from "@phosphor-icons/react/dist/ssr";

const AnimeList = async({ api }) => {

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <div className="grid 2xl:grid-cols-6 md:grid-cols-4 xl:grid-cols-5 lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4 md:gap-7 xl:gap-10 2xl:gap-20 sm:gap-20 px-5 bg-colos-accent dark:bg-colos-sidebarColor relative">
            {api.data?.map((anime, index)=> {
                return (
                 <div className="relative">
                  <Link href={`/anime/${anime.mal_id}`} 
                     className="cursor-pointer images rounded-xl relative" 
                     key={index}>
                     <Image 
                       className="w-full max-h-64 md:max-h-[15rem] xl:max-h-[17.5rem] 2xl:max-h-[18.5rem] h-[18rem] object-cover rounded-lg" 
                       src={anime.images.webp.image_url} alt="" 
                       width={350} 
                       height={350}/>
                      <h3 className="font-bold md:text-sm xl:text-base 2xl:text-lg text-sm pl-4 pt-4 pb-4 pr-12">{truncateText(anime.title, 35)}</h3>
                  </Link>

                   <div className="absolute top-2 ml-2 flex flex-row bg-colos-Info dark:bg-colos-DarkInfo pr-3 rounded-xl pl-2 py-1">
                      <Star color="#F8DE22" weight="fill" size={32}/>
                      <h1 className="mt-[2px] ml-2 text-xl font-bold dark:mix-blend-lighten mix-blend-darken dark:text-colos-accent
                       text-colos-primary">{anime.score}</h1>
                   </div>

                   <div className="absolute md:top-[12.3rem] 2xl:top-[13.3rem] lg:top-[12.2rem] xl:top-[13.8rem] top-[13.3rem] 
                   w-full rounded-xl 2xl:p-6 xl:p-4 lg:p-2 md:p-2 p-2 flex background">
                    
                        {anime.genres?.map((genre, index)=> {
                            return(
                                <div className="" key={index}>
                                <h1 className="text-base font-medium p-[2px] text-colos-accent flex text-start items-start justify-start rounded-xl">
                                    <div className="xl:flex hidden"> 
                                      {index < 3 ? genre.name : (index === 2 ? '' : '')},
                                    </div>
                                    <div className="xl:hidden flex"> 
                                      {index < 2 ? genre.name : (index === 2 ? '' : '')}
                                    </div>
                                </h1>
                            </div>
                            )
                        })}
                        </div>
                   </div>
                )
            })}
            
     </div>
    )
}

export default AnimeList

