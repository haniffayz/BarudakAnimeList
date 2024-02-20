import Image from "next/image"
import Link from "next/link"
import { Star } from "@phosphor-icons/react/dist/ssr";

const RecommendationAnime = ({ api }) => {

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <div className="grid 2xl:grid-cols-6 md:grid-cols-4 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-4 md:gap-7 xl:gap-10 2xl:gap-20 sm:gap-20 px-5 bg-colos-accent dark:bg-colos-sidebarColor relative">
            {api.data?.map((anime, index)=> {
                return (
                 <div className="relative">
                  <Link href={`/anime/${anime.mal_id}`} 
                   className="cursor-pointer images rounded-xl relative" 
                   key={index}>
                   <Image 
                   className="w-full max-h-64 md:max-h-[15rem] xl:max-h-[17rem] 2xl:max-h-[18rem] h-[18rem] object-cover rounded-lg" 
                   src={anime.images.webp.image_url} alt="" 
                   width={350} 
                   height={350}/>
                   <h3 className="font-bold md:text-sm xl:text-base 2xl:text-lg text-sm pl-4 pt-4 pb-4 pr-12">{truncateText(anime.title, 35)}</h3>
                 </Link> 
                 </div>   
                )
            })}
     </div>

            
    )
}

export default RecommendationAnime