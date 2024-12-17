import { Route, Routes } from 'react-router-dom'
import './App.css'
import PlayGame from './pages/PlayGame'
import StartGame from './pages/StartGame'

function App() {

  return (
    <Routes>
      {/* <Route path='/play/:text' element={<PlayGame/>}/> => this method is for Path params only. 
      Query params and react-router-dom don't need this BS */}
      <Route path='/play' element={<PlayGame/>} />
      <Route path='/' element={<StartGame/>}/>
    </Routes>
  )
}

export default App