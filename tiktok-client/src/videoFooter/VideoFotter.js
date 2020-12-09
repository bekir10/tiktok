import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFotter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p> {description}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon"></MusicNoteIcon>
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFoter_record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      ></img>
    </div>
  );
}

export default VideoFotter;
