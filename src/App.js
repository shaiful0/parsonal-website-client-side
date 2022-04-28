import logo from './logo.svg';
import './App.css';
import Heder from './component/Home/Header/Heder';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Heder></Heder>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
