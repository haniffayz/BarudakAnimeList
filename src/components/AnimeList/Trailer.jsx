"use client"
import YouTube from "react-youtube"

const Trailer = ({api}) => {
    return (
        <div className="trailer-con py-8">
        <YouTube
          videoId={api.data.trailer.youtube_id}
          onReady={(event) => event.target.pauseVideo()}
          width={640}
          height={800}
          className="z-50 bg-colos-accent dark:bg-colos-primary border-colos-accent dark:border-colos-primary border-[5px]"
          onError={console.log("Video is Broken")}
        /> 
        </div>
    )
}

export default Trailer