import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";


function App() {
  return (
    <Router className="App">
      <Topbar/>
      <div style={{display: 'flex'}}>
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/users" element={<UserList/>} />
          <Route exact path="/user/:id" element={<User/>} />
          <Route exact path="/newuser" element={<NewUser/>} />
          <Route exact path="/products" element={<ProductList/>}/>
          <Route exact path="/product/:id" element={<Product/>}/>
          <Route exact path="/newproduct" element={<NewProduct/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
