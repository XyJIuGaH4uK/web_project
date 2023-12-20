import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import { useState } from 'react'
import GamePage from './pages/GamePage'

function App() {

  const [competedGames, setCompletedGames] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/feed' element={<Feed completedGames={competedGames} toggleCompletedGame={(id) => setCompletedGames(prev => prev.find(i => i == id) ? prev.filter(i => i != id) : [...prev, id])}/>}/>
          <Route path='/profile' element={<Profile toggleCompletedGame={(id) => setCompletedGames(prev => prev.find(i => i == id) ? prev.filter(i => i != id) : [...prev, id])} completedGamesId={competedGames}/>}/>
          <Route path='/game/:id' element={<GamePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
