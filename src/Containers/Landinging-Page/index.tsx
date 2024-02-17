import React from "react";
import VideoPlayer from "../../components/video_player";

import { data } from "../../components/video_player/tracks";
export const Landing: React.FC = () => {
  return (
    <div className="container hideScroll">
      <VideoPlayer categories={data[0]?.categories} />
    </div>
  );
};
