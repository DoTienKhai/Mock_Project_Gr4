import {Profile} from "./profile.model";

export interface Comment{
  id: number;
  createdAt: Date;
  updatedAt: Date;
  body: string;
  author: Profile
}
