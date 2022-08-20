import './App.css';
import {Route,Routes,Link} from 'react-router-dom';
import Home from './pages/Home';
import FirstSteps from './pages/FirstSteps';

export default function App() {
  return (
    <>     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/primerospasos' element={<FirstSteps/>}/>
      </Routes>
    </>
    
  )
}