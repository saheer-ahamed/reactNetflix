import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Horror, Originals } from "./Components/urls";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={Originals} title='Netflix Originals'/>
      <RowPost url={Horror} title='Horror Movies' isSmall/>
    </div>
  );
}

export default App;
