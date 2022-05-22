import React from 'react';
import { apiBuilder, apiQuality } from '../../config/apiConfig';  
import styles from "./MovieCard.module.css";

  

function MovieCard({movie}) {
 
  const imageUrl = apiBuilder.tryGetPoster(movie.backdrop_path, apiQuality.backdropMedium);
  // const imageUrl = apiConfig.imageURL + apiConfig.quality.posterMedium + movie.poster_path;
  
  return (
      <div className={styles.movieCard}>
        <div className={styles.movieCardNormal}>
          <img className={styles.movieImage}
               src={imageUrl}
               alt={(movie.title?? "") + (movie.name?? "")}
          />
          <div className={styles.movieTitulo}>
            {movie.title && <div>{movie.title}</div>}
            {movie.name && <div>{movie.name}</div>}
          </div>
        </div>
        <div className={styles.movieCardEnFoco}>
          <img className={styles.movieImage}
               src={imageUrl}
               alt={(movie.title?? "") + (movie.name?? "")}
          />
          <p> (P)lay / (A)gregar / (L)ike </p>
          <div className={styles.movieTitulo}>
            {movie.title && <div>{movie.title}</div>}
            {movie.name && <div>{movie.name}</div>}
          </div>
        </div>
      </div>  
  )
}

export default MovieCard