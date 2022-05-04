import React from 'react';
import { Link } from 'react-router-dom';
import useMyHook from '../lib/useMyHook';
import style from "../style/Blogs.module.css";

export default function Blog() {

  const userData = useMyHook();

  const truncateString = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + "..."
    } else {
      return str;
    }
  }

  return (
    <>
      <div className={style.blogs__Wrapper}>
        {userData.map((data) => {
          
          const { id, title, body } = data;
          
            return <article key={data.id} className={style.blogs}>
              <h3 className={style.title}>{title}</h3>
              <p>{ truncateString(body, 100) } <Link to={"/blogs/"+id}>see more</Link></p>
              
            </article>
          })}
      </div>
    </>
  )
}
