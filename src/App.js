import './App.css';
import {Route,Routes} from 'react-router-dom';
import FirstSteps from './pages/FirstSteps';
import Home from './pages/Home';

export default function App() {
  return (
    <>     
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/primerospasos' element={<FirstSteps/>}/>
      </Routes>
    </>
    
  )
}