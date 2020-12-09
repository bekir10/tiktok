import React from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function VideoSidebar({ likes, messages, shares }) {
  const [liked, setliked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar-button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setliked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setliked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className="videoSidebar-button">
        <MessageIcon fontSize="large"></MessageIcon>
        <p>{messages}</p>
      </div>

      <div className="videoSidebar-button">
        <ShareIcon fontSize="large"></ShareIcon>
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
