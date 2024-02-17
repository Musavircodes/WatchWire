import "./App.css";
import Header from "./components/Header";
import { VideoProvider } from "./components/video_player/VideoPlayerContext";
import { Landing } from "./Containers/Landinging-Page";

function App() {
  return (
    <div className="App">
      <Header />
      <VideoProvider>
        <Landing />
      </VideoProvider>
    </div>
  );
}

export default App;
