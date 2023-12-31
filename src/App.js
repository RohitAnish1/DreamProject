import './App.css';
import Login from './pages/login/Login';
import Shop from './pages/shop/Shop'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path='/shop' element={<Shop />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
