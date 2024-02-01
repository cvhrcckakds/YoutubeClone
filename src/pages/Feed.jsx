import { useContext } from "react";
import SideBar from "../componenets/SideBar"
import { YoutubeContext } from "../context/youtubeContext";
import VideoCard from "../componenets/VideoCard";
import Loader from "../componenets/Loader";


const Feed = () => {
  const { videos } = useContext(YoutubeContext);

  return (
    <div className="flex">
      <SideBar />
      <div className="video-layout">
        {/* apiden vidyo gelmezse yükleniyor gelisn videolar yüklenene kadar 
        videoları videocard sayfasında oluşturuyoruz */}
        {!videos ? (
          <Loader />
        ) : (
          videos.map(
            (item, i) =>
              item.type === "video" && ( <VideoCard key={i} video={item} /> )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
