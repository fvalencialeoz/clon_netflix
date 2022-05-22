import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./MiCarousel.module.css"
import Slider from "react-slick";
import useApi from '../../hooks/useApi';
import MovieCard from '../MovieCard/MovieCard';

const MiCarousel = ({titulo, entidad, irA}) => {

  irA = irA?? titulo;
  
  const [movies, loading, error, handleNextPage, handlePreviousPage] = useApi(entidad);
  
  const recargar = (indexPrev, indexNext) => {
  
    if (Math.abs(indexPrev - indexNext) > settings.slidesToShow)  {
      if (indexPrev > 0) {
        handleNextPage();        
      } else {
        handlePreviousPage();
      }
    }
  };
  
  var settings = {
    dots: false,
    accessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: false,
    beforeChange: recargar,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    {loading && <p>Cargando...</p>}
    {error && <p>{error.toString()}</p>}
    {!loading &&
      <div className={styles.miCarousel}>
        <h2 id={irA}>{titulo}</h2>
        <Slider {...settings}>
          { movies.map((movie) => 
            (<MovieCard key={movie.id} movie={movie} />))
          }
        </Slider>
      </div>
    }
    </>
  )
}

export default MiCarousel