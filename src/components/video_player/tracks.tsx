export interface Video {
  id: string;
  description: string;
  sources: string[];
  subtitle: string;
  thumb: string;
  title: string;
}

export interface Category {
  name: string;
  videos: Video[];
}

export interface Data {
  categories: Category[];
}

export const data: Data[] = [
  {
    categories: [
      {
        name: "Movies",
        videos: [
          {
            id: "1",
            description:
              "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
            sources: [
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            ],
            subtitle: "By Blender Foundation",
            thumb: "https://i.ibb.co/kMcdvvY/1.webp",
            title: "Big Buck Bunny",
          },

          {
            id: "2",
            description:
              "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
            sources: [
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            ],
            subtitle: "By Google",
            thumb: "https://i.ibb.co/Tk0mtrD/2.webp",
            title: "For Bigger Blazes",
          },
          {
            id: "3",
            description:
              "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
            sources: [
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            ],
            subtitle: "By Google",
            thumb: "https://i.ibb.co/rQmNvLt/3.webp",
            title: "For Bigger Escape",
          },
          {
            id: "4",
            description:
              "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
            sources: [
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
            ],
            subtitle: "By Google",
            thumb: "https://i.ibb.co/rcNPbt9/4.webp",
            title: "For Bigger Fun",
          },
          {
            id: "5",
            description:
              "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
            sources: [
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
            ],
            subtitle: "By Google",
            thumb: "https://i.ibb.co/02CYLMN/5.webp",
            title: "For Bigger Joyrides",
          },
          {
            id: "6",
            description:
              "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
            sources: [
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
            ],
            subtitle: "By Google",
            thumb: "https://i.ibb.co/rfL0L6F/6.webp",
            title: "For Bigger Meltdowns",
          },
          {
            id: "7",
            description:
              "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
            sources: [
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            ],
            subtitle: "By Blender Foundation",
            thumb: "https://i.ibb.co/vZdX8WD/7.webp",
            title: "Sintel",
          },

          {
            id: "8",
            description:
              "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",
            sources: [
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
            ],
            subtitle: "By Blender Foundation",
            thumb: "https://i.ibb.co/59MM0mg/8.webp",
            title: "Tears of Steel",
          },
        ],
      },
    ],
  },
];
