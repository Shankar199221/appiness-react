import React  from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './component/Login/Login';
import EmployeeData from './component/Dashboard/EmployeeData';
import './App.css'


function App() {


  return (
    <Router>
        <>
        <div className="app">
            <div className="body"> 
                    <Switch>
                      <Route path="/" exact component={Login} />
                      <Route path="/employeedata" component={EmployeeData} /> 
                    </Switch>
              </div>

        </div>  
         
        </>
    </Router>
    
  );
}

export default App;
