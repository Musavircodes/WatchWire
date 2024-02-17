import React, { useState, useRef } from "react";
import { Category, data, Video } from "./tracks";
import DragToReorderList from "../Play_List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpDownLeftRight } from "@fortawesome/free-solid-svg-icons";

interface VideoPlayerProps {
  categories: Category[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ categories }) => {
  const [currentVideo, setCurrentVideo] = useState<string>(
    categories[0].videos[0].sources[0]
  );
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [watchNow, setWatchNow] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsPaused(false);

    if (videoRef.current) {
      videoRef.current.src = videoUrl;
      videoRef.current.load();
      videoRef.current.addEventListener("loadedmetadata", () => {
        videoRef.current?.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      });
    }

    setWatchNow(true);
  };

  const handleVideoPause = () => {
    setIsPaused(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleVideoPlay = () => {
    setIsPaused(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoEnded = () => {
    setIsPaused(true);
  };

  return (
    <div className="flex">
      <div className="video-container">
        <div className="m-3 flex">
          {watchNow ? (
            <>
              <video
                ref={videoRef}
                src={currentVideo}
                className="w-full rounded-lg shadow-lg object-cover h-v"
                controls
                autoPlay
                onPause={handleVideoPause}
                onPlay={handleVideoPlay}
                onEnded={handleVideoEnded}
              />
            </>
          ) : (
            <>
              <img
                src="https://i.ibb.co/Y2Hjxj3/Deepin-Screenshot-select-area-20240215233537.png"
                alt=""
                className="w-full rounded-lg shadow-lg object-cover h-v"
              />
              <button
                onClick={() =>
                  handleVideoClick(categories[0].videos[0].sources[0])
                }
                className="absolute mobile-w p-9 m-9 bg-transparent border border-blue-300 px-8 py-2 rounded-full font-medium shadow-md text-gray-900 transition-colors duration-300"
              >
                Watch Now
              </button>
            </>
          )}
        </div>

        <div className="relative w-full">
          <div className="overflow-x-auto scroll-indicator-container hideScroll">
            <div
              className="m-2  flex justify-between items-center"
              style={{ backgroundColor: "#282c34", color: "whitesmoke" }}
            >
              <h1 className="p-2">Similar Videos</h1>
              <FontAwesomeIcon
                className="p-2 w-6 h-6"
                icon={faUpDownLeftRight}
                title="Drag and Drop to reorder"
              />
            </div>
            <div className="flex pb-2">
              <DragToReorderList
                data={data[0]}
                handleVideoClick={handleVideoClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 px-4 overflow-y-scroll hideScroll side-container element-to-hide">
        <div className="flex flex-col ">
          {categories.map((category) => (
            <React.Fragment key={category.name}>
              {category.videos.map((video: Video) => (
                <div className="flex justify-between">
                  <img
                    key={video.id}
                    src={video.thumb}
                    alt={video.title}
                    className="image-container-side cursor-pointer ml-5 mb-2  shadow-sm hover:shadow-lg"
                    onClick={() => handleVideoClick(video.sources[0])}
                  />
                  <div className="text-center pt-4">
                    <h3>{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.subtitle}</p>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
