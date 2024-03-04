import React, { useState } from "react";
import toast from "react-hot-toast";
import styles from "./Header.module.css";
import logo from '../../assets/Souhad - log-29.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext/UserContext";
import { useContext } from "react";
import axios from 'axios';
import Avatar from '@mui/material/Avatar';

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  const [nav, setNav] = useState({
    isOpen: false,
    isCartOpen: false,
  });

  const location = useLocation();

  const logout = async () => {
    try {
      const action = await axios.post(`${process.env.REACT_APP_BACKEND}/logout`, {}, { withCredentials: true });
      if (action) {
        localStorage.removeItem('token');
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

  const closeNav = () => {
    setNav({ isOpen: false });
  };

  return (
    <div>
      <header className={`${styles.headerContainer} ${location.pathname.startsWith('/productdetails') ? styles.headerBule : styles.headerTransparent}`}>
        <div className={styles.navbar}>
          {/* Logo */}
          <NavLink to="/" onClick={closeNav}>
            <div>
              <img className={styles.imagee} src={logo} alt="/" />
              {/* <p>AL Monla</p>       */}
            </div>
          </NavLink>
          {/* Navigation Links */}
          <div className={styles.whatever}>
            <nav style={{ display: "flex", gap: "2rem" }}>
              <ul className={nav.isOpen ? [styles.menu, styles.active].join(' ') : [styles.menu]} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                {/* NavLink for Home */}
                {nav.isOpen && window.innerWidth <= 768 && (
  <span className={styles.closeMenu} onClick={() => setNav({ isOpen: !nav.isOpen })}><AiOutlineClose size={25} /></span>
)}
                <li>
                  <NavLink to='/' activeClassName={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/' ? styles.activeNavItem : ''} ${location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === '/profile' || location.pathname === "/cart" ? styles.blue : styles.white}`} onClick={closeNav}>
                    Home
                  </NavLink>
                </li>

                {/* NavLink for Services */}
                <li>
                  <NavLink to='/product' activeClassName={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/product' ? styles.activeNavItem : ''} ${location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === '/profile' || location.pathname === "/cart" ? styles.blue : styles.white}`} onClick={closeNav}>
                    Artisans
                  </NavLink>
                </li>

                {/* NavLink for Product page */}
                <li>
                  <NavLink to='/workshop' activeClassName={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/workshop' ? styles.activeNavItem : ''} ${location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === '/profile' || location.pathname === "/cart" ? styles.blue : styles.white}`} onClick={closeNav}>
                    Workshop
                  </NavLink>
                </li>

                {/* NavLink for About Us */}
                <li>
                  <NavLink to='/events' activeClassName={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/events' ? styles.activeNavItem : ''} ${location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === '/profile' || location.pathname === "/cart" ? styles.blue : styles.white}`} onClick={closeNav}>
                    Events
                  </NavLink>
                </li>

                {/* NavLink for Contact Us */}
                <li>
                  <NavLink to='/About' activeClassName={styles.activeLink} className={`${styles.menuItem} ${location.pathname === '/About' ? styles.activeNavItem : ''} ${location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === '/profile' || location.pathname === "/cart" ? styles.blue : styles.white}`} onClick={closeNav}>
                    About us
                  </NavLink>
                </li>

                {user ? (
                  user.role === "admin" ? (
                    <li>
                      <NavLink
                        to="/dash"
                        activeClassName={styles.activeLink}
                        className={`${styles.menuItem} ${location.pathname === '/dash' ? styles.activeNavItem : ''} ${location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === '/profile' || location.pathname === '/cart' ? styles.blue : styles.white}`}
                        onClick={closeNav}
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
                      activeClassName={styles.activeLink}
                      className={`${styles.menuItem} ${location.pathname === '/signup' ? styles.activeNavItem : ''} ${location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === '/profile' || location.pathname === '/cart' ? styles.blue : styles.white}`}
                      onClick={closeNav}
                    >
                      SignUp
                    </NavLink>
                  </li>
                )}
              </ul>
            </nav>

            <div onClick={() => setNav({ isOpen: !nav.isOpen })} className={location.pathname === '/checkout' || location.pathname === '/confirmed' || location.pathname === '/developers' || location.pathname === "/profile" || location.pathname === "/cart" ? styles.mobile_btn_blue : styles.mobile_btn}>
              {nav.isOpen ? <AiOutlineMenu size={25} style={{ visibility: "hidden" }} /> : <AiOutlineMenu size={25} />}
            </div>

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
  );
}
