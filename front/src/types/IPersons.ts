import { YouTubeIds } from "./IYouTube";

export type IResponsePersonsDB = {
  _id: string;
  title: string;
  name: string;
  text: string;
  videoUrl: string;
  skills: {
    _id: string;
    name: string;
    icon: string;
  }[];
  photoUrl: string;
  clipId: YouTubeIds;
};