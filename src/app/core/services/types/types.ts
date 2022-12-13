export interface User {
  bio?: string;
  email?: string;
  image?: string;
  username?: string;
  token?: string;
}
export interface UserResponse {
  user: {
    bio?: string;
    email?: string;
    image?: string;
    username?: string;
    token?: string;
  };
}
export type LoginRegistrData = {
  user: {
    username?: 'string';
    email: 'string';
    password: 'string';
  };
};
export interface IListOfTags {
  tags: Array<string>;
}

export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: Array<string>;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}
export interface IArticles {
  articles: Array<IArticle>;
}
