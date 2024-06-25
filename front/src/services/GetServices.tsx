import { useQuery } from "@tanstack/react-query";
import { IResponsePersonsDB } from "types/IPersons";
import { IResponseAPIYoutube } from "types/IYouTube";
import { YouTubeIds } from "types/IYouTube";
import { PersonsNames } from "types/IYouTube";


const getDurationVideo = async (idVideo: YouTubeIds): Promise<IResponseAPIYoutube> => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?id=${idVideo}&part=contentDetails&key=${
      import.meta.env.VITE_YOUTUBE_API_KEY
    }`
  );
  if (!response.ok) {
    throw new Error("Fetch video error!");
  }
  return response.json();
};

export const getDurationVideoQuery = (idVideo: YouTubeIds) => {
  return useQuery({
    queryKey: ["video", idVideo],
    queryFn: () => getDurationVideo(idVideo),
    staleTime: 24 * 60 * 60 * 1000,
    select: (data) => {
      const duration = data.items[0].contentDetails.duration;
      const regex = /PT(?:(\d+)M)?(?:(\d+)S)?/;
      const matches = duration.match(regex);
    
      if (matches) {
        const minutes = matches[1] ? parseInt(matches[1], 10) : 0;
        const seconds = matches[2] ? parseInt(matches[2], 10) : 0;
        const formattedMinutes = minutes.toString().padStart(2, "0");
        return `${formattedMinutes}:${seconds.toString().padStart(2, "0")}`;
      }
    
      return "";
    }
  });
};



const getPersonData = async ({ name }: { name: PersonsNames }): Promise<IResponsePersonsDB> => {
  const response = await fetch(`http://localhost:3000/mainpage/${name}`);
  if (!response.ok) {
    throw new Error("Fetch persons error");
  }
  return response.json();
};

export const getPersonDataQuery = ({ name }: { name: PersonsNames }) => {
  return useQuery<IResponsePersonsDB, Error>({
    queryKey: ["person", name],
    queryFn: () => getPersonData({ name }),
    staleTime: 24 * 60 * 60 * 1000,
    gcTime: 24 * 60 * 60 * 1000,
  });
};


// NOT USED. The person's data request is based on the answer to the second request for the duration of the video.

// export const getPersonAndDurationVIdeoQuery = ({ name }: { name: PersonsNames }) => {
//   const {
//     data: personData,
//     isSuccess: isSuccessPersonData,
//     isLoading: isLoadingPersonData,
//   } = useQuery({
//     queryKey: ["person", name],
//     queryFn: () => getPersonData({ name }),
//     staleTime: 24 * 60 * 60 * 1000,
//     gcTime: 24 * 60 * 60 * 1000,
//   });

//   const idVideo = personData?.clipId!;

//   const {
//     data: durationVideo,
//     isSuccess: isSuccessDurationVideo,
//     isLoading: isLoadingDurationVideo,
//   } = useQuery({
//     queryKey: ["video", idVideo],
//     queryFn: () => getDurationVideo(idVideo),
//     select: (durationVideo) => {
//       const duration = durationVideo.items[0].contentDetails.duration;
//       const regex = /PT(?:(\d+)M)?(?:(\d+)S)?/;
//       const matches = duration.match(regex);

//       if (matches) {
//         const minutes = matches[1] ? parseInt(matches[1], 10) : 0;
//         const seconds = matches[2] ? parseInt(matches[2], 10) : 0;
//         return `${minutes}:${seconds.toString().padStart(2, "0")}`;
//       }

//       return "";
//     },
//     staleTime: 24 * 60 * 60 * 1000,
//     enabled: !!idVideo,
//   });

//   return {
//     personData,
//     isSuccessPersonData,
//     isLoadingPersonData,
//     durationVideo,
//     isSuccessDurationVideo,
//     isLoadingDurationVideo,
//   };
// };
