import { React, useState, useContext } from "react";
import styles from '../Login/Login.module.css'
const Login = () => {


  return (
    <div className={styles.background}>
    <div className={styles.wrapper}>
      <form>
        <h1>Login</h1>
        <div className={styles['input-box']}>
          <input type="text" placeholder="Username" required />
          <i className='bx bxs-user'></i>
        </div>
        <div className={styles['input-box']}>
          <input type="password" placeholder="Password" required />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <div className={styles['remember-forgot']}>
        </div>
        <button type="submit" className={styles.btn}>Login</button>
        <div className={styles['register-link']}>
          <p>Don't have an account? <a href="/signup">Register</a></p>
        </div>
      </form>
    </div>
    </div>
  )
  }
export default Login;
