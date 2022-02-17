import { memo, FC } from 'react';
import style from './MovieItem.module.scss';

type MovieItemProp = {
  title: string;
  poster: string;
}

const MovieItem: FC<MovieItemProp> = memo(({ title, poster }) => {
  return (
    <div className={style['movie-item']}>
      <div
        className={style['movie-item__banner']}
        style={{ backgroundImage: 'url(' + poster + ')' }}
      ></div>
      <h4 className="m-4">{ title }</h4>
    </div>
  );
});

export default MovieItem;