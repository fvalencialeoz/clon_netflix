import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './componentes/Layout/Layout';
import Banner from './componentes/Banner/Banner';
import MiCarousel from './componentes/MiCarousel/MiCarousel';
import { apiEntidad } from './config/apiConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Banner />
      <div className="carrouseles">
        <MiCarousel titulo="Peliculas Populares" entidad={apiEntidad.popularMovies}  irA = "peliPopulares" />
        <MiCarousel titulo="Peliculas Mejor Rankeadas" entidad={apiEntidad.topRatedMovies}  irA = "peliMejorRanking" />
        <MiCarousel titulo="Series Populares" entidad={apiEntidad.populatTv} irA = "seriesPopulares"/>
        <MiCarousel titulo="Series Mejor Rankeadas" entidad={apiEntidad.topRatedTv} irA = "seriesMejorRanking" />
      </div>
    </Layout>
  </React.StrictMode>
);

