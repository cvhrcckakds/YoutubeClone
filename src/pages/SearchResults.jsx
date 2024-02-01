import { useSearchParams } from "react-router-dom";
import SideBar from "../componenets/SideBar";
import { useEffect, useState } from "react";
import { getData } from "../utils/getData";
import Loader from "../componenets/Loader";
import VideoCard from "../componenets/VideoCard";

const SearchResults = () => {
  const [results, setResults] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  useEffect(() => {
    //her isteğin başında önceki istekteki verileri sil
    getData(`/search?query=${query}&type=video`).then((data) =>
      setResults(data)
    );
  }, [query]);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex justify-center flex-1 p-4 h-screen overflow-auto">
        <div className="flex flex-col max-w-lg gap-10 ">
          <p className="text-lg"><span className="font-bold">{query}</span> için sonuçlar</p>
        {!results ? (
          <Loader />
        ) : (
          results.data.map(
            (item) => item.type === "video" && <VideoCard video={item} />
          )
        )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
