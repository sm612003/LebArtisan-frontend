import { React, useState, useContext } from "react";
import styles from '../Signup/Signup.module.css'
import { Prev } from "react-bootstrap/esm/PageItem";
import axios from "axios";
import { UserContext } from "../../UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const {user, setUser}=useContext(UserContext)
  const navigate = useNavigate()

  const [formData, setFormData] =useState({
    name:'',
    email:'',
    password:'',
    location :'',
    whatsapp:'',
    instagram:'',
    facebook:'',
    image:''
  })

  const handleInputChange =(e)=>{
    const {name, value}= e.target;
    setFormData({
      ...formData,
      [name]: value
    })
    console.log(formData)

  }
  const handleImageChange = (e) => {

    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/user/register`,
       formData,
       { withCredentials: true, headers: { 'Content-Type': 'multipart/form-data' } }
      );
      if(response.data){
        setUser(response.data)
        console.log(response.data)
      }
      console.log (response);
      navigate("/");
      // Handle response
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <div className={styles.background}>

    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className={styles['input-box']}>
          <input type="text" placeholder="Name" required value={formData.name}  name="name" onChange={handleInputChange}/>
        </div>
        <div className={styles['input-box']}>
          <input type="email" placeholder="Email" required  value={formData.email} name="email" onChange={handleInputChange} />
        </div>
        <div className={styles['input-box']}>
          <input type="password" placeholder="Password" required  value={formData.password} name="password"  onChange={handleInputChange}/>
        </div>
        <div className={styles['input-box']}>
          <input type="text" placeholder="Location" required   value={formData.location} name="location" onChange={handleInputChange}/>
        </div>
        <div className={styles['input-box']}>
          <input type="text" placeholder="WhatsApp" required  value={formData.whatsapp} name="whatsapp" onChange={handleInputChange}/>
        </div>
        <div className={styles['input-box']}>
          <input type="text" placeholder="Instagram" required value={formData.instagram} name="instagram"  onChange={handleInputChange}/>
        </div>
        <div className={styles['input-box']}>
          <input type="text" placeholder="Facebook" required  value={formData.facebook}  name="facebook" onChange={handleInputChange}/>
        </div>
        <div className={styles['input-box']}>
          <input type="file"   name="image"   onChange={handleImageChange} />
        </div>
        <button type="submit" className={styles.btn}>Register</button>
      </form>
      <p>Already have an account? <Link style={{color:'white'}} to="/login">Login here</Link></p>
    </div>
    </div>

  );
};

export default Signup;
