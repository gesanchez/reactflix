import { FC, useState } from 'react';
import { useMoviesContext } from '../../contexts/Movies';

const SearchMovie: FC = () => {
  const [input, setInput] = useState('');
  const { actions } = useMoviesContext();
  
  const setValue = (value: string) => {
    setInput(value);
    actions?.filterMovies(value);
  }

  return (
    <input className="
      form-input
      block
      w-full
      rounded
      bg-gray-100
      border-transparent
      focus:border-gray-500
      focus:bg-white
      focus:ring-0"
      value={input}
      onInput={(e) => setValue(e.currentTarget.value)}
      placeholder="Escribe el nombre de tu pelicula"
    />
  );
}

export default SearchMovie;