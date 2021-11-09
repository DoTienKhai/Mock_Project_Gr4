import {Profile} from "./profile.model";

export interface Articles{
  articles: Article;
  articlesCount: number
}

export interface Article{
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}
