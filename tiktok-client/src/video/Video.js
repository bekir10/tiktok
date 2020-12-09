import React from "react";
import "./Video.css";
import { useRef, useState } from "react";
import VideoFooter from "../videoFooter/VideoFotter";
import VideoSidebar from "../videoSidebar/VideoSidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPres = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPres}
        loop
        ref={videoRef}
        className="video__player"
        src={url}
      />

      <VideoFooter
        channel={channel}
        description={description}
        song={song}
      ></VideoFooter>
      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
      ></VideoSidebar>
    </div>
  );
}
export default Video;
