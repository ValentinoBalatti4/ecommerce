import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";


const App = () => {
  const user = useSelector(state => {
    if(state.user.currentUser !== null){
      return true;
    }
    return false;
  })

  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />}/>
        <Route exact path="/cart" element={<Cart/>}></Route>
        <Route exact path="/product/:id" element={<Product/>}></Route>
        <Route exact path="/products/:category" element={<ProductList/>}></Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;