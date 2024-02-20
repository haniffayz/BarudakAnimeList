import { getAnimeResponse } from "@/libs/api-libs"
import Link from "next/link"

const Genre = async() => {

    const genre = await getAnimeResponse('genres/anime')
    // console.log(genre)

    return (
        <div>
            <div className="flex justify-center items-center p-12">
                <h1 className="font-bold text-xl">Cari anime berdasarkan Genre</h1>
            </div>
            <div>
                <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:p-12 p-4">
                    {genre.data?.map((response, index)=> {
                        return (
                             <div className="p-4 gap-12">
                                <Link href={response.url} className="">
                                    <h1 className="md:text-lg text-base p-4 genre rounded-xl shadow-lg dark:shadow-md dark:shadow-colos-accent bg-colos-SidebarAccent hover:bg-colos-animeColor text-colos-primary dark:bg-colos-animeColor dark:hover:bg-colos-SidebarAccent dark:text-colos-accent dark:hover:text-colos-primary font-bold">
                                        {response.name}
                                    </h1>
                                </Link>
                             </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Genre