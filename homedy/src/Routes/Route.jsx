import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Protected.jsx";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext.jsx";
import Signup from "../pages/Signup/Signup.jsx";
import Login from "../pages/Login/Login.jsx";
// import Unauthorized from "../Pages/Unauthorized/Unauthorized.jsx";
// import NotFound from "../Pages/NotFound/NotFound.jsx";

import Layout from "./Layout.jsx";

const Router = () => {
  // const { user, checkUser } = useContext(UserContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* <Route path="/" element={<Home />} />
            <Route index path="/confirmed" element={<ConfirmationPage />} />
            <Route path="/product" element={<Products />} />
            <Route index path="/services" element={<Services />} />
            <Route index path="/contact" element={<Contact />} />
            <Route index path="/cart" element={<Cart />} />
            <Route index path="/profile" element={<Profile />} />
            <Route index path="/summary" element={<Summary />} />
            <Route path="/productdetails/:slug" element={<ProductDetails />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/developers" element={<PoweredByUS />} />
            <Route path="/checkout" element={<Checkout />} /> */}
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
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

              <Route path="Year" index element={< YearsTable />} />
              <Route path="Model" index element={< ModelsTable />} />
              <Route path="Brand" index element={< BrandsTable />} />
              <Route path="Shipping" index element={<ShippingsTable/>} />
              <Route path="contact" index element={<ContactsTable/>} />
              <Route path="Orders" index element={<OrdersTable/>} />
              <Route path="Services" index element={<ServicesTable/>} />
              <Route path="User" index element={<UserTable/>} />
              <Route path="CompanyInfo" index element={<CompanyInfo />} /> */}

            {/* </Route> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
