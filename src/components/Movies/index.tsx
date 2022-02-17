import { MoviesProvider } from '../../contexts/Movies';
import MoviesList from '../MoviesList/MoviesList';
import SearchMovie from '../SearcMovie';

function Movies() {
  return (
    <MoviesProvider>
      <div className="container px-4 mx-auto">
        <div className="mt-4 mb-4">
          <SearchMovie />
        </div>
        <div data-testid="movies">
          <MoviesList />
        </div>
      </div>
    </MoviesProvider>
  );
};

export default Movies;