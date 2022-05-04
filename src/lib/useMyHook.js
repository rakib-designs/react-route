import { useEffect, useState } from 'react';

export default function useMyHook() {

     const [userData, setUserData] = useState([]);

     useEffect(() => {
          fetch("https://jsonplaceholder.typicode.com/posts")
          .then((data) => data.json())
          .then((res) => setUserData(res));         
     }, [])

     return userData;
}
