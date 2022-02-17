import { createContext, Dispatch, SetStateAction} from "react";

export type MovieType = {
    "id": string,
    "title": string,
    "poster": string,
    "overview": string,
    "release_date": number
}

export type Context = {
  movies: Array<MovieType>,
  actions?: {
    setMovies: Dispatch<SetStateAction<Array<MovieType>>>,
    filterMovies: Dispatch<string>
  }
}

export const MoviesContext = createContext<Context>({
  movies: []
});
