import React from 'react';
import { Link } from 'react-router-dom';
import style from "../style/navbar.module.css";

export default function Navbar() {
  return (
     <nav className={style.navbar}>
          <div className={style.brand}>
               <Link to={"/"} className={style.brand__logo}>
                    <h1 >Blogs</h1>
               </Link>
          </div>

          <ul className={style.un__Order__List}>
               <li className={style.item}><Link to={"/"} className={style.items}>Home</Link></li>
               <li className={style.item}><Link to={"/blogs"} className={style.items}>Blogs</Link></li>
               <li className={style.item}><Link to={"/service"} className={style.items}>Service</Link></li>
               <li className={style.item}><Link to={"/about-us"} className={style.items}>About us</Link></li>
               <li className={style.item}><Link to={"/contact-us"} className={style.items}>Contact us</Link></li>
          </ul>
     </nav>
  )
}
