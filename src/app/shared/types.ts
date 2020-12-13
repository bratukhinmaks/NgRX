export interface CurrentUserInterface {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  bio: string | null;
  image: string | null;
  token: string;
}

export interface RequestUserInterface {
  user:{
    password: number;
    email: string;
    username: string;
  }
}

export interface LoginUserInterface {
  user:{
    password: number;
    email: string;
  }
}

export interface AuthStateInterface {
  isSubmitting: boolean,
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackEndErrors | null;
}

export interface AppStateInterface {
  auth: AuthStateInterface,
  feed: FeedInitialState,
}

export interface AuthResponse {
  user: CurrentUserInterface
}

export interface BackEndErrors {
  [key: string]: string[],
}

export interface Feed {
  articles: ArticleInterface[],
  articleCount: number,
}

export interface FeedInitialState {
  feedList: Feed | null,
  isLoading: boolean | null,
  error: string | null
}

export interface ArticleInterface {
  author: Author,
  createdAt: Date,
  description: string,
  favorited: boolean,
  favoritesCount: number,
  slug: string | null,
  tagList: string[],
  title: string,
  updatedAt: Date,
}

export interface Author {
  username: string,
  bio: string | null,
  image: string | null,
  following: boolean ,
}
