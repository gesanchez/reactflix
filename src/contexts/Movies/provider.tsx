import { useState } from 'react';
import { MoviesContext, Context, MovieType } from './context';

const data: Array<MovieType> = [
  {"id":"287947","title":"Shazam!","poster":"https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg","overview":"A boy is given the ability to become an adult superhero in times of need with a single magic word.","release_date":1553299200},
  {"id":"299537","title":"Captain Marvel","poster":"https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg","overview":"The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.","release_date":1551830400}
]

export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {

  const [ movies, setMovies ] = useState<Array<MovieType>>(data);
  
  const value: Context = {
    movies: movies,
    actions: {
      setMovies,
      filterMovies: (str: string) => {
        if (str) {
          return setMovies(movies.filter((movie: MovieType) => movie.title.toLocaleUpperCase().includes(str.toLocaleUpperCase())));
        }
        setMovies(data);
      }
    },
  };
  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  )
}