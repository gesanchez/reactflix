import { useContext } from 'react';
import { MoviesContext } from './context';

export const useMoviesContext = () => {
  return useContext(MoviesContext);
}