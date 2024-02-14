import { MainPage } from "./pages/MainPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./styles/App.css"
import { Authentication } from "./pages/Authentication"

function App() {

  return (


    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Authentication/>}></Route>
          <Route path="/main" element={<MainPage/>}></Route>
        </Routes>
      </Router>
    </div>

  )
}

export default App
