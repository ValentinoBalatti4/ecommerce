import Sidebar from "./components/Sidebar";
import React, { Fragment } from "react";
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
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`

function App() {
  
  const admin = useSelector(state => {
    if(state.user.currentUser !== null){
      if(state.user.currentUser.isAdmin === true){
        return true
      }
    }
    return false
  })
  

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        {!admin && <Route path="*" element={<Navigate to="/login" />} />}
      </Routes>

      {admin && (
        <>
          <Topbar />
          <Container>
            <Sidebar />
            <Routes>
              <>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/users" element={<UserList />} />
                <Route exact path="/user/:userId" element={<User />} />
                <Route exact path="/newUser" element={<NewUser />} />
                <Route exact path="/products" element={<ProductList />} />
                <Route exact path="/product/:productId" element={<Product />} />
                <Route exact path="/newproduct" element={<NewProduct />} />
                <Route exact path="/login" element={<Navigate to="/"/>}/>
              </>
            </Routes>
          </Container>
        </>
      )}

    </Router>
  );
}

export default App;
