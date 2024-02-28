
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast"
import styles from "./Header.module.css";
import logo from '../../assets/Homédy.png';
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext/UserContext";
import { CartContext } from "../../UserContext/CartContext";
import { useContext } from "react";
import axios from 'axios';
import Avatar from '@mui/material/Avatar';

export default function Header() {
  const {user, setUser}=useContext(UserContext)

  const [nav, setNav] = useState({
    isOpen: false,
    isCartOpen: false,
  });


  const location = useLocation();

  const navigate = useNavigate();
  const logout = async () => {
    try {
      const action = await axios.post(`${process.env.REACT_APP_BACKEND}/logout`, {}, { withCredentials: true });
      if (action) {
        localStorage.removeItem('token')
        setUser(null);
        toast.success("Logout successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div>
      <header className={`${styles.headerContainer} ${location.pathname.startsWith('/productdetails') ? styles.headerBule : styles.headerTransparent}`} >
        <div className={styles.navbar} >
          {/* Logo */}
          <NavLink to="/">
            <div>
              <img className={styles.imagee} src={logo} alt="/" />
              {/* <p>AL Monla</p>       */}
            </div>
          </NavLink>
          {/* Navigation Links */}
          <div className={styles.whatever}>
            <nav style={{ display: "flex", gap: "2rem" }}>
              <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                {/* NavLink for Home */}
                {nav ? <span className={styles.closeMenu} onClick={() => setNav(!nav)}><AiOutlineClose size={25} /></span> : ""}
                <li>
                  <NavLink to='/' activeclassname={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/' ? styles.activeNavItem : ''} ${location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === '/profile' || location.pathname === "/cart" ? styles.blue : styles.white}`} >
                    Home
                  </NavLink>
                </li>

                {/* NavLink for Services */}
                <li >
                  <NavLink to='/product' activeclassname={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/product' ? styles.activeNavItem : ''} ${location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === '/profile' || location.pathname === "/cart" ? styles.blue : styles.white}`}>
                    Artisans                </NavLink>
                </li>

                {/* NavLink for Product page */}
                <li >

                  <NavLink to='/workshop' activeclassname={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/workshop' ? styles.activeNavItem : ''} ${location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === '/profile' || location.pathname === "/cart" ? styles.blue : styles.white}`}>
                    Workshop                </NavLink>
                </li>

                {/* NavLink for About Us */}
                <li >

                  <NavLink to='/events' activeclassname={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/events' ? styles.activeNavItem : ''} ${location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === '/profile' || location.pathname === "/cart" ? styles.blue : styles.white}`}>
                    Events                </NavLink>
                </li>

                {/* NavLink for Contact Us */}
                <li >

                  <NavLink to='/About' activeclassname={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/About' ? styles.activeNavItem : ''} ${location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === '/profile' || location.pathname === "/cart" ? styles.blue : styles.white}`}>
                    About us
                  </NavLink>
                </li>


                {user ? (
                user.role === "admin" ? (
                  <li>
                    <NavLink
                      to="/dashboard"
                      activeclassname={styles.activeLink}
                      className={`${styles.menuItem} ${location.pathname === '/dashboard' ? styles.activeNavItem : ''} ${location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === '/profile' || location.pathname === '/cart' ? styles.blue : styles.white}`}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                ) : (
                  <button onClick={logout} type="submit" className={styles.button}>
                    Logout
                  </button>
                )
              ) : (
                <li>
                  <NavLink
                    to="/signup"
                    activeclassname={styles.activeLink}
                    className={`${styles.menuItem} ${location.pathname === '/signup' ? styles.activeNavItem : ''} ${location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === '/profile' || location.pathname === '/cart' ? styles.blue : styles.white}`}
                  >
                    SignUp
                  </NavLink>
                </li>
              )}
              </ul>
            </nav>

            <div onClick={() => setNav(!nav)} className={location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === "/profile" || location.pathname === "/cart" ? styles.mobile_btn_blue : styles.mobile_btn}>
              {nav ? <AiOutlineMenu size={25} style={{ visibility: "hidden" }} /> : <AiOutlineMenu size={25} />}
            </div>

            {/* Cart Icon */}
            {/* <div className={`${location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname==='/profile' || location.pathname==="/cart"?styles.cartIconBlue:styles.cartIcon} ${styles.count}`} onClick={handleCartIconClick} count={cartItemCount}>
            <AiOutlineShoppingCart size={25} className={styles.shopIcon} />
          </div> */}
{user &&    
  <NavLink to="/profile" style={{ textDecoration: 'none', marginBottom:'10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Avatar
      alt={user.name}
      src={user}  
      sx={{
        cursor: "pointer",
        backgroundColor: "lightGrey",
        color: "#163357",
        height: "3rem",
        width: "3rem"
      }}
    />
  </NavLink>
}

          </div>




        </div>
      </header>

    </div>
  )
}
