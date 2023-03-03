import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>
        <Route exact path="/product" element={<Product/>}></Route>
        <Route exact path="/products" element={<ProductList/>}></Route>

      </Routes>
    </BrowserRouter>
  )
};

export default App;