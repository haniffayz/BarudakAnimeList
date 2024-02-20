import Image from "next/image"
import Link from "next/link"
import { getAnimeResponse } from "@/libs/api-libs"

const Schedules = ({ api }) => {
    
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <div className="grid 2xl:grid-cols-6 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-5 bg-colos-accent dark:bg-colos-sidebarColor grid-cols-2">
            {api.data?.map((schedules, index)=> {
                return(
                    <div className="md:p-6 p-3">
                      <Link href={schedules.url} key={index} target="_blank">
                        <Image src={schedules.images.webp.image_url} alt="" width={250} height={400} className="md:w-full max-h-64 h-40 xl:h-72 md:max-h-[18rem] object-cover rounded-lg"></Image>
                        <h3 className="font-bold md:text-sm xl:text-base 2xl:text-lg text-sm pt-4 pb-4">{truncateText(schedules.title, 35)}</h3>
                      </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Schedules