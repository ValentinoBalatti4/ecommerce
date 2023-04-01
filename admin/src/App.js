import Sidebar from "./components/Sidebar";
import React from "react";
import Topbar from "./components/Topbar"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";
import { useSelector } from "react-redux";



function App() {

  let admin = false;
  try {
    admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      .currentUser.isAdmin;
  }catch {}

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {admin && (
          <>
            <Topbar />
            <div>
              <Sidebar />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/users" element={<UserList />} />
              <Route exact path="/user/:userId" element={<User />} />
              <Route exact path="/newUser" element={<NewUser />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route exact path="/product/:productId" element={<Product />} />
              <Route exact path="/newproduct" element={<NewProduct />} />
            </div>
          </>
        )}
        {!admin && <Route path="*" element={<Navigate to="/login" />} />}
      </Routes>
    </Router>
  );
}

export default App;
