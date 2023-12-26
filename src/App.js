import Home from "./Componts/Home/Home";
import About from "./Componts/About/About";
import Store from "./Componts/Store/Store";
import NavBar from './Componts/NavBar/NavBar'
import Products from "./Componts/Products/Products";
import News from "./Componts/Products/News";
import Action from "./Componts/Products/Action";
import Users from "./Componts/Users/Users";
import {  Routes , Route } from "react-router-dom";
import UsersDitals from "./Componts/Users/UsersDitals";
import AdminDitals from "./Componts/Users/AdminDitals";
import Profile from "./Componts/Profile/Profile";
import {  ContextProvider } from "./Context/Auth";
import Login from "./Componts/Profile/Login";
import RquierAuth from "./Context/RquierAuth";




function App() {
  return (
   

      <ContextProvider>
      <NavBar />
      <Routes>

          <Route path="/"       element={<Home/>}/>
          <Route path="/about"  element={<About/>}/>
          <Route path="/store"  element={<Store/>}/>
          <Route path="/products" element={<Products/>}>
              <Route path="action" element={<Action/>} />
              <Route path="news" element={<News/>} />

          </Route>

          <Route path="/users" element={<Users/>}>
             
          </Route>
          <Route path="users/:Id" element={<UsersDitals/>}/>
          <Route path="users/admin" element={<AdminDitals/>}/>
          <Route path="profile" element={
            <RquierAuth>
              <Profile/>
            </RquierAuth>}
            />
          <Route path="login" element={<Login/>}/>

          
         
          <Route path="*" element={<h2>Page Not Found 404</h2>}/>
      </Routes>
      </ContextProvider>
      
   
  );
}

export default App;
