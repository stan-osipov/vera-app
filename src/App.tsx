import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Newsfront from './pages/Newsfront'
import Akademiya from './pages/Akademiya'
import Franch from './pages/Franch'
import CheeseExpert from './pages/CheeseExpert'
import BoioveBratstvo from './pages/BoioveBratstvo'
import PoombCreatures from './pages/PoombCreatures'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newsfront" element={<Newsfront />} />
      <Route path="/akademiya" element={<Akademiya />} />
      <Route path="/franch" element={<Franch />} />
      <Route path="/cheese-expert" element={<CheeseExpert />} />
      <Route path="/boiove-bratstvo" element={<BoioveBratstvo />} />
      <Route path="/poomb-creatures" element={<PoombCreatures />} />
    </Routes>
    </>
  )
}

export default App
