
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardUser from './Component/CardUser';
import Home from './Component/Home';
import ListUsers from './Component/ListUsers';
import Navbarre from './Component/Navbarre';

function App() {
  return (
  <div>
    <Navbarre/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/List' element={<ListUsers/>}></Route>
    <Route path='/List/:id' element={<CardUser/>}></Route>
    </Routes>
  </div>
  );
}

export default App;
