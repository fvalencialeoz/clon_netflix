import axios from "axios";

export const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '?api_key=37180edb21bf14afa3b7be06e2a2b7fd',
    entidad: {
        topRatedMovies: 'movie/top_rated',
        topRatedTv: 'tv/top_rated',
        popularMovies: 'movie/popular',
        populatTv: 'tv/popular',        
    },
    language: {
        en: "&language=en-US",
        es: "&language=es-ES",
    },
    pagination: '&page=',
    imageURL: 'https://image.tmdb.org/t/p',
    quality: {
        posterSmall: '/w200',
        posterMedium: '/w300',
        posterLarge: '/w500',
        backdropSmall: '/w300',
        backdropMedium: '/w780',
        backdropLarge: '/w1280',
    }
};

export const apiEntidad = {
    topRatedMovies: 'topRatedMovies',
    topRatedTv: 'topRatedTv',
    popularMovies: 'popularMovies',
    populatTv: 'populatTv',
};
export const apiQuality = {
    posterSmall: "posterSmall",
    posterMedium: "posterMedium",
    posterLarge: "posterLarge",
    backdropSmall: "backdropSmall",
    backdropMedium: "backdropMedium",
    backdropLarge: "backdropLarge",
  };

export const apiLanguage = {
    english: "en",
    spanish: "es",
  };


/*  La forma de hacerlo mas sencillo */
export const tryGetTopRatedMovies = async (apiKey, page) => {
    try {
        const res = await axios.get(
            'https://api.themoviedb.org/3/movie/top_rated/' + 
            apiKey + 
            '&language=es-ES&page=' + 
            page
        );
         return res.data.results;
    } catch (error) {
        return error
    }
};

export const tryGetPopularMovies = async (page = 1) => {
    try {
      const res = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=4731f843be0ef719c516f748dad07f59&language=en-US&page=${page}`
      );
      return res.data.results;
    } catch (error) {
      return error;
    }
  };
  
/////////////////////
/*La forma mas compleja */


export const apiBuilder = {
    tryGet: async (entidad, lang = 'es', page=1) => {
     
        const url = `${apiConfig.baseUrl}${apiConfig.entidad[entidad]}${apiConfig.apiKey}${apiConfig.language[lang]}${apiConfig.pagination}${page}`;
        try {
            const res = await axios.get(url);
            // console.log("Data page: ",res.data.page);
            // console.log("total results: ", res.data.total_results);
            // console.log("Path Poster: ",res.poster_path);
            return res.data.results;
          
        } catch (error) {
          return [];
        } 
    },
    tryGetById: async (entidad, id, lang= "es") => {
        const url = `${apiConfig.baseUrl}${apiConfig.entidad[entidad]}/{id}${apiConfig.apiKey}${apiConfig.language[lang]}`;
        try {
            const res = await axios.get(url);
            return res;
        } catch (error) {
          return error;
        } 
    },
    tryGetPoster: (path, quality = apiQuality.posterLarge) => {
        return path ? `${apiConfig.imageURL}${apiConfig.quality[quality]}${path}` : "";
    },
 };



/*
https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
*/