import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import MsgPage from './pages/MsgPage';
import Message from './pages/Message';

function App() {

  const [user, setLoginUser] = useState({})
  
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/Register" element={<Register/>}></Route>
           <Route path="/Message/:username" element={<MsgPage/>}></Route>
           <Route path="/" element={<Login setLoginUser={setLoginUser}/>}></Route>
           
           <Route path="/message/Rahul" element={<Message/>}></Route>
           <Route path="/" { ...user && user.id ? < MsgPage/> : <Login setLoginUser={setLoginUser}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
