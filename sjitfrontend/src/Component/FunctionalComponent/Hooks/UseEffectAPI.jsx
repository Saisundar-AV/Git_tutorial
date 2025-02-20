import React,{useState,useEffect} from 'react';
import axios from 'axios'
const UseEffectAPI=()=>{
    var[posts,setPosts]=useState([]);
    useEffect(()=>{
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((res) =>
            console
              .log(res)
              .catch((err) => console.log("Couldn't read the Api"))
          );

    },[]);
    return(
        <div>
            <h1>UseEffect API</h1>
            <h1>We are </h1>
        </div>
    )
}

export default UseEffectAPI;