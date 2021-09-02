
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert =(message,type)=>{

    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {

      setAlert(null)
    }, 3000);

  }

  const toggleMode =()=>{
    if(mode==='light')
    {
    setmode('dark');
    document.body.style.backgroundColor='black';
    showAlert("Dark Mode has Been Enabled","Success");

    }else
    {setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light Mode has Been Enabled", "Success");
    }
  }


  return (
        <>
    <Router>
    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert= {alert} />  
    <div className="container my-3"> 
    <Switch>
          <Route exact path="/About">
            
            <About></About>
          </Route>
          
          <Route exact path="/">
          <TextForm  showAlert={showAlert}heading="Enter the text to Analyze " mode={mode}/>
           </Route>
        </Switch>
    
    {/*  */}
    </div>
    
    
    </Router>
    </>
  );

  }
export default App;
