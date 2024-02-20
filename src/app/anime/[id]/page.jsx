import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import CollectionButton from "@/components/AnimeList/CollectionButton"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import CommentInput from "@/components/AnimeList/CommentInput"
import CommentBox from "@/components/AnimeList/CommentBox"
import Link from "next/link"
import Videos from "./videos/page"
import { getAnimeEpisodes } from "@/libs/api-libs"
import Trailer from "@/components/AnimeList/Trailer"
import { translate } from '@vitalets/google-translate-api';

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    const video = await getAnimeEpisodes(`anime/${id}/videos`)
    const episode = await getAnimeEpisodes(`anime/${id}/episodes`)
    const user = await authUserSession()
    
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id }
    })

    // Menerjemahkan teks ke Bahasa Indonesia
  const translateStatus = (status) => {
    switch (status) {
      case "Currently Airing":
        return "Sedang Tayang";
      case "Finished Airing":
        return "Tamat";
      default:
        return status;
    }
  };

  const translateSynopsisToIndonesian = async (synopsis) => {
    try {
      const translated = await translate(synopsis, { from: "en", to: "id" })
      return translated.text;
    } catch (error) {
      console.error("Error translating synopsis:", error);
      return synopsis; // Menggunakan teks asli jika terjadi kesalahan
    }
  };

  const translatedSynopsis = await translateSynopsisToIndonesian(anime.data.synopsis)
  
  return (
     <>
      <div className="bg-colos-secondary">
      <div className="fixed z-10">
       <Image
        src={anime.data.images.webp.image_url}
        width={500}
        height={500}
        className="w-[250vh] md:top-0 top-4 justify-center items-center object-cover"
        />
      </div>
      
      <div className="IDanime bg-colos-accent dark:bg-colos-sidebarColor xl:px-72 2xl:px-[26rem] md:px-[5rem] xl:py-12 2xl:py-12 lg:px-40 
      lg:py-12 py-6">
        <div className="relative details bg-colos-white dark:bg-colos-sidebarColor p-8 z-40 shadow-2xl shadow-colos-primary 
        dark:shadow-colos-Info"> 
          <Link href={anime.data.url} target="blank" className="z-40 relative">  
            <h3 className="md:text-4xl xl:text-xl 2xl:text-3xl text-2xl font-bold h1 backdrop-blur py-2">
              {anime.data.title}
            </h3>
         </Link>
       <div className="detail grid">
          <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={500}
          height={500}
          className="img xl:w-60 2xl:w-96 md:w-[15rem]"
        />
          <div className="anime-details xl:text-base 2xl:text-2xl text-base">
           <p>
            <span>Status:</span>
            <span>{translateStatus(anime.data.status)}</span> 
           </p>
           <p>
            <span>Rilis:</span>
            <span>{anime.data.year}</span> 
           </p>
           <p>
            <span>Adaptasi:</span>
            <span>{(anime.data.source)}</span> 
           </p>
           <p>
            <span>Peringkat:</span>
            <span>{(anime.data.rank)}</span> 
           </p>
           <p>
            <span>Skor:</span>
            <span>{(anime.data.score)}</span> 
           </p>
           <p>
            <span>Rating:</span>
            <span>{(anime.data.rating)}</span> 
           </p>
           <p>
            <span>Popularitas:</span>
            <span>{(anime.data.popularity)}</span> 
           </p>
           <p>
            <span>Episode:</span>
            <span>{(anime.data.episodes)} Episode</span> 
           </p>
           <p>
            <span>Durasi:</span>
            <span>{(anime.data.duration)}</span> 
           </p>
           <p>
            <span>Genre:</span>
              {anime.data.genres?.map((genre)=> {
                return(
                  <span>{genre.name},</span>
                )
             })}
           </p>

           {
            !collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title}/>
            }

           </div>
         </div>
         
         <p className="description 2xl:text-2xl text-base text-colos-animeColor dark:text-colos-secondary">
         {translatedSynopsis}
         </p>
       

       <div className="md:p-4 p-0 mt-6 z-40 relative">
        <div className="hidden lg:block">
       <h3 className="md:text-4xl xl:text-xl 2xl:text-3xl text-2xl font-bold h1 z-40">
          Trailer
        </h3>
        <div className="trailer-con py-8">
          <Trailer api={anime} /> 
         </div>
        </div>


        <div>
            <Videos api={video} anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title} />
        </div>

        {/* Komentar */}

        <div className="">
              { user && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title} user_image={user?.image}/> }
              <h3 className="md:text-4xl xl:text-xl 2xl:text-3xl text-2xl font-bold mt-12">Komentar</h3>
              <CommentBox user_image={user?.image} anime_mal_id={id} time={''} />
        </div>
       </div>

      </div>
      </div>
      
        <div className="md:hidden block">
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </div>
 </>
    )
}

export default Page

