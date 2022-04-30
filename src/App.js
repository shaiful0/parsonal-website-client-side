import './App.css';
import Heder from './component/Home/Header/Heder';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home/Home';
import Footer from './component/Footer/Footer';
import NotFound from './component/Home/NotFound/NotFound';
import Blogs from './component/Home/Blogs/Blogs';
import Login from './component/Home/Login/Login';
import Register from './component/Home/Register/Register';

function App() {
  return (
    <div className="App">
      <Heder></Heder>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
