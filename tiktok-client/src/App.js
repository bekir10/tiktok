import "./App.css";
import React from "react";
import Video from "./video/Video";
import { useEffect, useState } from "react";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPost() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response; //for cleanup
    }
    fetchPost();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, song, description, likes, shares, messages }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              description={description}
              likes={likes}
              shares={shares}
              messages={messages}
            ></Video>
          )
        )}
      </div>
    </div>
  );
}

export default App;
