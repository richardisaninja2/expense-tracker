import logo from './logo.svg';
import './App.css';
import Subscriptions from './Components/Subscriptions/Subscriptions';
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet, HashRouter } from "react-router-dom";
import General from './Components/General/General';
import * as si from 'react-icons/si';
import { useState } from 'react';
import AddNew from './Components/AddNew/AddNew';


function App() {
  const[chosen, setChosen] = useState();
  const style = {
    background: '#0368c7',
    borderRadius: '10px 10px 10px 10px',
    background: '#0368c7',
  }


  return (
    <div className="App">

      <HashRouter>      
      <div className="choice">

        <NavLink to="/"><button className="choiceSpan" ><si.SiSpotify/>General</button></NavLink>
        <NavLink to="/subscriptions"><button className="choiceSpan"><si.SiSpotify/>MySubs</button></NavLink>
      
      </div>


        <Routes>
          <Route path="/" element={<General/>}/>
          <Route path="/subscriptions" element={<Subscriptions/>}/>
          <Route path="/addNew" element={<AddNew/>}/>
        </Routes>
        
      </HashRouter>


    </div>
  );
}

export default App;
