import { useState,useEffect, use } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from "@env";r\


const useFetch=({endpoint,query})=>{
    const [data,setData]=useState([]);
    const [isLoading,setisLoading]=useState(false);
    const [error,seterror]=useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'x-rapidapi-key': 'b7a8576793mshf6e7d5bdc42c050p1a9b37jsna39333f54ffd'
            ,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
        
    };

    const fetchData= async()=>{
        setisLoading(true);

        try{
            const response= await axios.request(options);

            setData(response.data.data);
            setisLoading(false);
        }catch(error){
            seterror(error);
            alert('There is an Error from api side...');

        }finally{
            setisLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const refetch =()=>{
        setisLoading(true);
        fetchData();
    }

    return {data,isLoading,error,refetch};

}

export default useFetch