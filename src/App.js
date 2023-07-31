import './App.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Update from './Update';
import Create from './Create';
function App() {

  // const buttonClick = ()=>{
  //   console.log("Hey why are hitting the button")
  // }
  return (
    // <Home />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/edit/:id' element={<Update/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
