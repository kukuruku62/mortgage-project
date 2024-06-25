export const PersonsNameAndYTIds = {
  Intro: "mU69g6Ao47A",
  Justin: "sWQo50Im8Es",
  Scott: "zhygCI9Iy-o",
} as const;

export type PersonsNames = keyof typeof PersonsNameAndYTIds;
export type YouTubeIds = typeof PersonsNameAndYTIds[PersonsNames];

export enum YouTubePathsEnum {
  Intro = "https://www.youtube.com/watch?v=mU69g6Ao47A",
}

export interface IResponseAPIYoutube {
  kind: string;
  etag: string;
  items: {
    kind: string;
    etag: string;
    id: string;
    contentDetails: {
      duration: string;
      dimension: string;
      definition: string;
      caption: string;
      licensedContent: boolean;
      contentRating: object;
      projection: string;
    };
  }[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}