import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [checkUser, setCheckUser] = useState(true);
  const [userUpdated, setUserUpdated] = useState(false);

  useEffect(() => {
    if (!user || userUpdated) {
      fetchUserData();
    }
  }, [user, userUpdated]);

  const fetchUserData = async () => {
    try {
      setCheckUser(true);

      const response = await axios.get(
        `http://localhost:5000/logged-in-user`,
        { withCredentials: true }
      );
      setUser(response.data.data);
      console.log("userr",response.data.data)
      setUserUpdated(false); // Reset the flag after updating user
    } catch (err) {
      setUser(null);
      console.log(err);
    } finally {
      setCheckUser(false);
    }
  };

  const logOut = async () => {
    await axios.post(`http://localhost:5000/logout`);
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logOut,
        fetchUserData,
        checkUser,
        setUserUpdated,
      }}>
      {children}
    </UserContext.Provider>
  );
};
