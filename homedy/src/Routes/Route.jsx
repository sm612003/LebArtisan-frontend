import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Protected.jsx";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext.jsx";
import Signup from "../pages/Signup/Signup.jsx";
import Login from "../pages/Login/Login.jsx";
import Home from "../pages/home/home.jsx";
import Workshop from "../pages/WorkShop/workshop.jsx";
import Blog from '../pages/Blog/index.jsx';
import Dashboard from "../pages/Dashboard/Dashboar.jsx";
import ProductDetail from "../pages/portfolioArtisan/portfolio.jsx";

// import Unauthorized from "../Pages/Unauthorized/Unauthorized.jsx";
// import NotFound from "../Pages/NotFound/NotFound.jsx";

import Layout from "./Layout.jsx";
import Artisan from "../pages/ArtisanPage/artisanpage.jsx";
import Eventspage from "../pages/EventsPage/eventspage.jsx";
import Eventdetails from "../pages/singlePageEvent/singlepage.jsx";
import DetailsEvent from "../pages/DetailsEvent.jsx";
import Aboutus from "../pages/AboutUs/aboutus.jsx";

const Router = () => {
  // const { user, checkUser } = useContext(UserContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
             <Route path="/" element={<Home />} />
             <Route path='/work' element={<Blog/>} />

            {/* /* <Route index path="/confirmed" element={<ConfirmationPage />} /> */}
             {/* <Route path="/product" element={<Products />} /> */}
             <Route index path="/services" element={<Artisan/>} />
             <Route index path="/workshop" element={<Workshop />} />
             <Route index path="/Events" element={<Eventspage />} />
             <Route index path="/About" element={<Aboutus />} />


        
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:productId" element={<ProductDetail/>} /> {/* Define route for product detail */}
          <Route path="/single-page" element={<DetailsEvent/>} /> {/* Define route for product detail */}


        
          {/* <Route path="/unauthorized" element={<Unauthorized />} /> */}
          {/* <Route path="/*" element={<NotFound />} /> */}

          {/* <Route
            element={
              <ProtectedRoute
                isAllowed={user && user.role === "admin"}
                redirectPath="/unauthorized"
              />
            }> */}
            {/* <Route path="/dashboard" element={<Dashboard />}> */}
              {/* <Route path="overview" index element={<Overview />} />
              <Route path="category" index element={<CategoryTable />} />
              <Route path="profile" index element={<DashProfile />} />
              <Route path="Product/Add" index element={< AddProduct/>} />
              <Route path="Product/Edit" index element={< EditProduct/>} />
              <Route path="Products" element={<Productstable/>}/>

          

            {/* </Route> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
