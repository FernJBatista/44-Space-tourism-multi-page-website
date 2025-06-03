import Home from './pages/Home.jsx'
import Destination from './pages/Destination.jsx'
import Crew from './pages/Crew.jsx'
import Technology from './pages/Technology.jsx'
import { Routes, Route } from 'react-router-dom'

import Header from './Components/Header'

function App() {
  
  return (
    <div className='flex flex-col items-center justify-start h-screen'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} /> 
      </Routes>
    </div>
  )
}

export default App 