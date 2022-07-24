import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './Landingpage';
import Postview from './Postview';
import Postform from './postform';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path ='/' element={<LandingPage/>} />
    <Route path='/Postview' element={<Postview/>}/>
    <Route path='/Postform' element={<Postform/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App;