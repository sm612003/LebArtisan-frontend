import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./Protected.jsx";
import React, { useContext } from "react";
// import { useContext } from "react";
// import { UserContext } from "../UserContext/UserContext.jsx";
import Signup from "../pages/Signup/Signup.jsx";
import Login from "../pages/Login/Login.jsx";
import Home from "../pages/home/home.jsx";
import Workshop from "../pages/WorkShop/workshop.jsx";
// import Blog from '../pages/Blog/index.jsx';
import Dashboard from "../pages/Dashboard/Dashboar.jsx";
import ProductDetail from "../pages/portfolioArtisan/portfolio.jsx";
// import Team from "../scenes/team/index.jsx";

// import Unauthorized from "../Pages/Unauthorized/Unauthorized.jsx";
// import NotFound from "../Pages/NotFound/NotFound.jsx";

import Layout from "./Layout.jsx";
import Artisan from "../pages/ArtisanPage/artisanpage.jsx";
import Eventspage from "../pages/EventsPage/eventspage.jsx";
// import Eventdetails from "../pages/singlePageEvent/singlepage.jsx";
import DetailsEvent from "../pages/DetailsEvent.jsx";
import Aboutus from "../pages/AboutUs/aboutus.jsx";
import WorkshopDetails from "../pages/Blog/index.jsx";
import ProtectedRoute from "./Protected.jsx";
import { UserContext } from "../UserContext/UserContext.jsx";

const Router = () => {
  const { user, checkUser } = useContext(UserContext);
  console.log(user)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />



            {/* /* <Route index path="/confirmed" element={<ConfirmationPage />} /> */}
            {/* <Route path="/product" element={<Products />} /> */}
            <Route index path="/product" element={<Artisan />} />
            <Route path="/product/:artistId" element={<ProductDetail />} />

            <Route index path="/workshop" element={<Workshop />} />
            <Route exact path="/workshop/:id" element={<WorkshopDetails />} />


            <Route index path="/events" element={<Eventspage />} />
            <Route path="/event/:eventId" element={<DetailsEvent />} />

            <Route index path="/About" element={<Aboutus />} />
            {/* Route to render single event details based on the event ID */}


          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/dash" element={<Dashboard />} /> */}
          <Route path="/dash" element={user && user.role === 'admin' ? (
            <ProtectedRoute isAllowed={true}><Dashboard /></ProtectedRoute>
          ) : (
            <Navigate to='/' />
          )}>


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
