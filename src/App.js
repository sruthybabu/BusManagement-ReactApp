import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addbus from './components/Addbus';
import Searchbus from './components/Searchbus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewbus from './components/Viewbus';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Addbus/>}/>
       <Route path="/search" exact element={<Searchbus/>}/>
       <Route path="/view" exact element={<Viewbus/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
