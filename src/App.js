import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home  from './components/Home';
import ImgCards from './components/Cards';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Register from './components/Register';
import Contact from './components/Contact';
import Login from './components/Login';

function App() {
  return (
    <div >
      <div><Header/></div>
      {/* <div ><Home/></div> */}
      {/* <br></br>
      <br></br> */}
      {/* <h1 style={{textAlign:"center"}}><b>-:Our Services:-</b></h1> */}
      {/* <div><ImgCards/></div> */}

      <BrowserRouter>
        <Routes>
          <Route  path='/' element = {<Home/>} exact />
          <Route  path='/contact' element = {<Contact/>} exact />
          <Route  path='/auth/signin' element = {<Login/>}/>
          <Route  path='/auth/signup' element = {<Register/>}/>
          {/* <Route  path='/auth/signup' element = {<Register/>}/> */}
        
        </Routes>
  
      </BrowserRouter>


    </div>

  );
}

export default App;
