// "use client"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import {  getAnimeResponse, getNestedAnimeResponse, reproduce } from "./libs/api-libs"
import AnimePoster from "@/components/AnimeList/PosterAnime"
import RecommendationAnime from "@/components/AnimeList/Recommendation"
import AnimeGenre from "@/components/AnimeList/AnimeGenre"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 6)

  return (
   <>
     {/* anime terpopuler*/}
     <AnimePoster />

     <section>
         <Header title="Genre"/>
         <AnimeGenre/>
     </section>

     <section> 
      <Header title="Paling Populer🔥" linkTitle="Lihat Semua" linkHref="/populer" />
      <AnimeList api={topAnime}/>
     </section>

     {/* Rekomendasi anime*/}
     <section>
      <Header title="Rekomendasi Anime"/>
      <RecommendationAnime api={recommendedAnime}/>
     </section>

   </>
  )
}

export default Page