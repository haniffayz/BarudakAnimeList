import { getAnimeResponse } from "@/app/libs/api-libs"

const EpisodeData = async({params: {id}, params: {episode} }) => {

    const episodeData = await getAnimeResponse(`anime/${id}/episodes/${episode}`)
    
    console.log(episodeData.data);

    return (
        <div> 
        </div>
    )
}

export default EpisodeData