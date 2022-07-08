import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Register/>}></Route>
           <Route path="/Message/:username" element={<msgPage/>}></Route>
           <Route path="/Login" element={<Login/>}></Route>
           <Route path="/Home" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
