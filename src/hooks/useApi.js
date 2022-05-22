import {useEffect, useState} from "react";
import { apiBuilder, apiLanguage } from "../config/apiConfig";

const useApi = (entidad, lang = apiLanguage.spanish, pagination = 1) => {
    const [values, setValues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(pagination);
  
    // const [pages, setPagesTotal] = useState(0);
 
    const getData = async () => {
      
      setError(null);
      setLoading(true);
 
      const res = await apiBuilder.tryGet(entidad, lang, page);
     
      if (res.length === 0 ) {   /*para ver el error porque se puso el try en tryGet */
        setError("Error al cargar los datos");
        // console.log("Status error: ",res.response.status);
      } else {
        // console.log("TotalPages: ",res);
        // setPagesTotal(totalPages);
        setValues(res);
    
      }
      setLoading(false); 

    return res;
    };
   
    useEffect(() => {

      getData();
    }, [page]);

  
    const handleNextPage = () => {
      console.log("page: ",page);
      // console.log(res.response.status)
      // console.log(values);
      // console.log("Totalpages: ",setPagesTotal);
      return (page < 1000) ? setPage(page + 1) : null};


    const handlePreviousPage = () => {
      console.log("page: ",page);
   // return (page > 1) ? setPage(page - 1) : (setPage(page-1), setPage(page))};
      if (page > 1) { 
        setPage(page - 1)
      } else {
        setPage(page - 1);
        setPage(page + 1);
      };
    };
  
    return [values, loading, error, handleNextPage, handlePreviousPage];
    // return [values, loading, error, page, handleNextPage, handlePreviousPage];

  };
  export default useApi;

  /*
    const nextPage = () => {};
    const previusPage = () => {};
  */