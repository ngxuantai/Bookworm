//import { Timestamp } from "firebase/firestore";

export interface IComic {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  image: string;
  content: string;
  description: string;
}
