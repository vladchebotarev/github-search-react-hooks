import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Profile} from './pages/Profile'
import {Alert} from './components/Alert'
import {AlertState} from './context/alert/AlertState'
import {GithubState} from './context/github/GithubState'

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert/>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/profile/:name" element={<Profile />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

export default App
