import React, { createContext, useContext, useState } from "react";

export interface Video {
  id: any;
  title: string;
  description: string;
  thumb: string;
  sources: string[];
}

type VideoContextType = {
  mainVideo: Video | null;
  setMainVideo: React.Dispatch<React.SetStateAction<Video | null>>;
};

const VideoContext = createContext<VideoContextType>({
  mainVideo: null,
  setMainVideo: () => {},
});

export const useVideoContext = () => useContext(VideoContext);

interface VideoProviderProps {
  children: React.ReactNode;
}

export const VideoProvider: React.FC<VideoProviderProps> = ({ children }) => {
  const [mainVideo, setMainVideo] = useState<Video | null>(null);

  return (
    <VideoContext.Provider value={{ mainVideo, setMainVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
