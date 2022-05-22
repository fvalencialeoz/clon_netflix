import React from "react";
import { apiBuilder, apiEntidad, apiQuality } from "../../config/apiConfig";
import useApi from "../../hooks/useApi";
import { randomIndex } from "../../utils/util";
import Separator from "../Separator/Separator";
import styles from "./Banner.module.css";

const Banner = () => {
  const [movies, loading, error] = useApi(apiEntidad.popularMovies);
  let randomMovie = movies[randomIndex(0, movies.length)];
  let backImg = loading ? "" : apiBuilder.tryGetPoster(randomMovie.poster_path, apiQuality.posterLarge);
  
  return (
      <div
        className={`${styles.banner_container}`}
        style={
          loading
            ? { backgroundImage: "none" }
            : { backgroundImage: `url(${backImg})`}
        }
      >
        <div className={styles.banner_gradient}>
        <Separator height={"5vh"} />

        <div className={styles.banner_title}>
          <h1>{loading ? "Loading..." : randomMovie?.title}</h1>
        </div>
        <Separator height={"2vh"} />

        <div className={styles.banner_overview}>
          <h2>{loading ? "Loading..." : randomMovie?.overview}</h2>
        </div>
        <Separator height={"2vh"} />
        <div className={styles.banner_buttons}>
          <button
            className={styles.banner_button}
            onClick={() => {
              console.log(movies);
            }}
          >
            MAS INFORMACION
          </button>
          <button
            className={styles.banner_button}
            onClick={() => {
              alert("Preparen los Pochoclos!!!!!!");
            }}
          >REPRODUCIR</button>
        </div>
      </div>
    </div>
  );
};
export default Banner;