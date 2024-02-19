import { MainPage } from "./pages/MainPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./styles/App.css"
import { Authentication } from "./pages/Authentication"
import { Navbar } from "./components/Navbar"
import { AuthProvider } from "./contexts/authContext"

function App() {

  return (


    <div className="App">
      <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Authentication/>}></Route>
          <Route path="/main" element={<MainPage/>}></Route>
        </Routes>
      </Router>
      </AuthProvider>
    </div>

  )
}

export default App
