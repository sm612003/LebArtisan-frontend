import { React, useState, useContext } from "react";


import styles from '../Signup/Signup.module.css'


const Signup = () => {
  

  return (
    <div className={styles.wrapper}>
      <form>
        <h1>Register</h1>
        <div className={styles['input-box']}>
          <input type="text" placeholder="Name" required />
        </div>
        <div className={styles['input-box']}>
          <input type="email" placeholder="Email" required />
        </div>
        <div className={styles['input-box']}>
          <input type="password" placeholder="Password" required />
        </div>
        <div className={styles['input-box']}>
          <input type="text" placeholder="Location" required />
        </div>
        <div className={styles['input-box']}>
          <input type="text" placeholder="WhatsApp" required />
        </div>
        <div className={styles['input-box']}>
          <input type="text" placeholder="Instagram" required />
        </div>
        <div className={styles['input-box']}>
          <input type="text" placeholder="Facebook" required />
        </div>
        <div className={styles['input-box']}>
          <input type="file" accept="image/*"  />
        </div>
        <button type="submit" className={styles.btn}>Register</button>
      </form>
    </div>
  );
};

export default Signup;
