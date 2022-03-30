import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Home/Login/Login';
import Admin from './components/Home/Admin/Admin';
import AddService from './components/Home/AddService/AddService';
import ProcessOder from './components/ProcessOder/ProcessOder';
import CreateAdmin from './components/CreateAdmin/CreateAdmin';
import Odered from './components/ProcessOder/PaymentProcess/Odered/Odered';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Services from './components/Home/Services/Services';
import Reviews from './components/Reviews/Reviews';
import ManageItem from './components/ManageItem/ManageItem';
import OderList from './components/OderList/OderList';
import TotalOder from './components/TotalOder/TotalOder';
import Footer from './components/Footer/Footer';

export const userContex = createContext();

function App() {
 const [loggedInUser,setLoggedInUser] = useState({});

  return (
    <div className="App">
      <userContex.Provider value={[loggedInUser,setLoggedInUser]} >
     <Router>
      <Switch>
     <Route exact path="/">
       <Home></Home>
     </Route>
     <Route path="/login">
      <Login></Login>
     </Route>
     <Route path="/processing/:id">
      <ProcessOder></ProcessOder>
     </Route>
    

       {/* <Route path="/admin">
      <Admin></Admin>
     </Route>   */}

     <PrivateRoute path="/admin">
      <Admin></Admin>
     </PrivateRoute>
     <PrivateRoute path="/dashboard">
     <Dashboard></Dashboard>
     </PrivateRoute>
     
     {/* <Route path="/oder/:id">
      <Odered></Odered>
     </Route> */}

     <Route path="/reviws">
     <Reviews></Reviews>
     </Route>
     
     <Route path="/total">
     <TotalOder></TotalOder>
     </Route>

     <Route path="/oderList/:id">
     <OderList></OderList>
     </Route>


     <PrivateRoute path="/services">
     <Services></Services>
     </PrivateRoute>
     <Route path="/manage">
     <ManageItem></ManageItem>
     </Route>

     {/* <Route path="/addService">
      <AddService></AddService>
     </Route> */}

     <PrivateRoute path="/addService">
      <AddService></AddService>
     </PrivateRoute>
     <Route path="/createAdmin">
      <CreateAdmin></CreateAdmin>
     </Route>

     <Route path="/footer">
     <Footer></Footer>
     </Route>


      </Switch>

     </Router>


    </userContex.Provider>
    </div>
  ); 
}

export default App;
