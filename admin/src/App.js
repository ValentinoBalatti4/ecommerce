import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";


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
          <Route exact path="/NewUser" element={<NewUser/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
