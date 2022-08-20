import './App.css';
import {Route,Routes} from 'react-router-dom';
import FirstSteps from './pages/FirstSteps';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import ZEcosystem from './pages/ZEcosystem';

export default function App() {
  return (
    <>     
      <Routes>
        <Route path='*'  element={<Page404/>}/>
        <Route path='/'  element={<Home/>}/>
        <Route path='/primerospasos' element={<FirstSteps/>}/>
        <Route path='/ecosistemazeta' element={<ZEcosystem/>}/>
      </Routes>
    </>
    
  )
}