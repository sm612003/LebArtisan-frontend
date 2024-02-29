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
import Dashboardone from "../scenes/dashboard/index.jsx";
import Team from "../scenes/team/index.jsx";
import Invoices from "../scenes/invoices/index.jsx";
import Contacts from "../scenes/contacts/index.jsx";
import Bar from "../scenes/bar/index.jsx";
// import Form from "../../scenes/form/index.jsx";
import Line from "../scenes/line/index.jsx";
import Pie from "../scenes/pie/index.jsx";
import FAQ from "../scenes/faq/index.jsx";
import Geography from "../scenes/geography/index.jsx";
import Calendar from '../scenes/calendar/calendar.jsx'

// import Unauthorized from "../Pages/Unauthorized/Unauthorized.jsx";
// import NotFound from "../Pages/NotFound/NotFound.jsx";

import Layout from "./Layout.jsx";
import Artisan from "../pages/ArtisanPage/artisanpage.jsx";
import Eventspage from "../pages/EventsPage/eventspage.jsx";
import Eventdetails from "../pages/singlePageEvent/singlepage.jsx";
import DetailsEvent from "../pages/DetailsEvent.jsx";
import Aboutus from "../pages/AboutUs/aboutus.jsx";
import WorkshopDetails from "../pages/Blog/index.jsx";

const Router = () => {
  // const { user, checkUser } = useContext(UserContext);
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
          <Route path="/dash" element={<Dashboard />} />
          {/* <Route path="/dashboad" element={<Dashboardone />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/invoices" element={<Invoices />} /> */}
          {/* <Route path="/form" element={<Form />} /> */}
          {/* <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/line" element={<Line />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/geography" element={<Geography />} /> */}




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
