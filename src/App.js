import React, { useEffect } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './component/Login/Login';
import EmployeeData from './component/Dashboard/EmployeeData';
import './App.css'


function App() {

  // const sessionId = sessionStorage.getItem("key")
  // const Auth = (sessionId === "data")
  
 
  useEffect(()=>{
     console.log("app running")
  },[])

  return (
    <Router>
        <>
        <div className="app">
            <div className="body"> 
                    <Switch>
                      <Route path="/" exact component={Login} />
                      <Route path="/employeedata" component={EmployeeData} />
                      {/* {Auth && <Redirect to="/" /> } */}
                    </Switch>
              </div>

        </div>  
         
        </>
    </Router>
    
  );
}

export default App;
