import React, { useState, useContext } from "react";
import styles from '../Login/Login.module.css';
import axios from "axios";
import { UserContext } from "../../UserContext/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {user, setUser, fetchUserData} = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email:'',
      password:'',
    });

    const handleInputChange = (e) => {
      const {name, value} = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND}/login`,
        formData, {withCredentials:true}
        );
        if(response.data){
          // await fetchUserData();
          console.log(response.data)
          setUser(response.data.data);
          navigate("/", {replace: true});
        }
      } catch (error) {
        console.log(error.message);
      }
    };

  return (
    <div className={styles.background}>
    <div className={styles.wrapper}>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className={styles['input-box']}>
          <input type="text" name="email" placeholder="Username" onChange={handleInputChange} value={formData.email} required />
          <i className='bx bxs-user'></i>
        </div>
        <div className={styles['input-box']}>
          <input type="password" name="password" placeholder="Password" required onChange={handleInputChange} value={formData.password} />
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
  );
};

export default Login;
