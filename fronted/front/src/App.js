import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Nav from './Component/Nav';

import Home from "./Component/Home";
import ProductDetails from "./Component/ProductDetails";
import Login from "./Component/Login";
//import Account from "./Component/Account";
import Register from "./Component/Register";
import Profile from "./Component/Profile";
import store from "./Store";
import React from "react";
import { loadUser } from "./actions/userAction";
import UserOptions from "./Component/UserOptions.js"
import { useSelector } from "react-redux";
import ResetPassword from "./Component/ResetPassword";
import ShowUsers from "./Component/ShowUsers";
import CardStyle from "./Component/Card/CardStyle";
import DesignedCard from "./Component/Card/DesignedCard";
import FirstPage from "./Component/Figma/FirstPage";
import CvUploadForm from "./Component/CvUploadForm";
import Dashboard from "./Component/Dashboard";
import UpdateUserByAdmin from "./Component/UpdateUserByAdmin";
import AllProducts from "./Component/Admin/AllProducts";
import AddProduct from "./Component/Admin/AddProduct.js";

function App() {

 
const {isAuthenticated,user}=useSelector(state=>state.user)



  React.useEffect(()=>{

   store.dispatch(loadUser())

  },[])
  return (
    
    <Router>
     
     <Nav/>
       {isAuthenticated && <UserOptions user={user} />}
      <Routes> 
      
        <Route exact path="/about/contact" element={<Home/>} ></Route>
        {isAuthenticated&&user.role==='admin' &&  <Route exact path="/Dashboard" element={<Dashboard/>} ></Route> }
        {isAuthenticated&&user.role==='admin' &&  <Route exact path="/admin/users" element={<ShowUsers/>} ></Route> }
        {isAuthenticated&&user.role==='admin' &&  <Route exact path="/admin/products" element={<AllProducts/>} ></Route> }
        {isAuthenticated&&user.role==='admin' &&  <Route exact path="/admin/update/:id" element={<UpdateUserByAdmin/>} ></Route> }
        {isAuthenticated&&user.role==='admin' &&  <Route exact path="/admin/add/product" element={<AddProduct/>} ></Route> }
        <Route exact path="/product/:id" element={<ProductDetails/>} ></Route>
        <Route exact path="/login" element={ <Login/>} ></Route>
        <Route exact path="/account" element={isAuthenticated && <Profile/>} ></Route>
        <Route exact path="/register" element={!isAuthenticated &&  <Register/>} ></Route>
        <Route exact path="/update/password" element={isAuthenticated &&  <ResetPassword/>} ></Route>
        <Route exact path="/card" element={ <CardStyle/>} ></Route>
        <Route exact path="/printing" element={ <DesignedCard/>} ></Route>
        <Route exact path="/figma" element={ <FirstPage/>} ></Route>
        <Route exact path="/career" element={ <CvUploadForm/>} ></Route>

        
      </Routes>
      
      
      
    </Router>
    
  );
}

export default App;
