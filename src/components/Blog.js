import React from 'react';
import { useParams } from "react-router-dom";
import useMyHook from '../lib/useMyHook';

export default function Blog() {

     const { id } = useParams();
     const userData = useMyHook();

     const parseId = parseInt(id);
     const filteredData = userData.filter((data) => data.id === parseId)

     console.log(filteredData);
     
     return (
          <div>
               <h1>Blog</h1>
               {/* <h3>{ filteredData[0].title }</h3>
               <p>{ filteredData[0].body }</p> */}
          </div>
     )
}
