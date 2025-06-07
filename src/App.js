import React from "react";
import './App.css'
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,actions,horror,comedy,documentary} from './urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals}title='Netflix Originals'/>
      <RowPost url={actions} title='Action Movies' isSmall />
      <RowPost url={horror}  title='Horror Movies' isSmall/>
      <RowPost url={comedy} title='Comedy Movies' isSmall />
      <RowPost url={documentary} title='Documentaries' isSmall />
    
    </div>
  );
}

export default App;
