import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/home.js';
import Camaras from './Components/camaras.js';
import Curiosity from './Components/Curiosity/curiosity.js';
import Opportunity from './Components/Opportunity/opportunity';
import Spirit from './Components/Spirit/spirit';
import Perseverance from './Components/Perseverance/perseverance';

function App() {


  //<Route exact path = '/' element = {</>}></Route>

  return (
    <Routes>
      <Route exact path = '/' element = {<Home/>}></Route>
      <Route exact path = '/camaras' element = {<Camaras/>}></Route>
      <Route exact path = '/Curiosity' element = {<Curiosity/>}></Route>
      <Route exact path = '/Opportunity' element = {<Opportunity/>}></Route>
      <Route exact path = '/Spirit' element = {<Spirit/>}></Route>
      <Route exact path = '/Perseverance' element = {<Perseverance/>}></Route>
    </Routes>
  )
}

export default App;
