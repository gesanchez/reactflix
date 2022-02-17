import styles from './MoviesList.module.scss';
import MovieItem from '../MovieItem';
import { useMoviesContext } from '../../contexts/Movies'


function MoviesList(): JSX.Element {
  const { movies } = useMoviesContext();
  return (
    <div className={`${styles['movies-list']} grid grid-cols-4 gap-6`}>
      {
        movies.map((element) => {
          return (
            <div key={element.id} className='shadow mb-4'>
              <MovieItem  {...element}></MovieItem>
            </div>
          );
        })
      }
    </div>
  );
}

export default MoviesList;