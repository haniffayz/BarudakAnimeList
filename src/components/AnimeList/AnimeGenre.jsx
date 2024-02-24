import { getAnimeResponse } from "@/libs/api-libs"
import { Plus } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const AnimeGenre = async() => {
    let genre = await getAnimeResponse('genres/anime')
    // console.log(genre)

    const limitedGenre = genre?.data.slice(0, 12)

    return (
        <div className="overflow-x-auto">
            <div className="flex flex-wrap md:pr-6 p-4">
                {limitedGenre?.map((response, index) => (
                    <div key={index} className="p-2">
                        <Link href={response.url}>
                            <h1 className="md:text-lg text-base p-4 genre rounded-xl shadow-lg dark:shadow-md dark:shadow-colos-accent bg-colos-SidebarAccent hover:bg-colos-animeColor text-colos-primary dark:bg-colos-animeColor dark:hover:bg-colos-SidebarAccent dark:text-colos-accent dark:hover:text-colos-primary font-bold">
                                {response.name}
                            </h1>
                        </Link>
                    </div>
                ))}
                <Link href={'/genre'} className="flex justify-center items-center pl-2">
                    <div className="p-4">
                        <div className="flex flex-row gap-1 hover:text-colos-SidebarAccent genre">
                            <h1 className="font-bold">Lihat Semua</h1>
                            <Plus size={20} className="pt-1"/>
                        </div>
                        
                    </div>
                </Link>
            </div>
        </div>
    )
}


export default AnimeGenre


