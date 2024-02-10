import { CreateTodo } from "./components/CreateTodo"
import { Header } from "./components/Header"
import { TodoMain } from "./components/TodoMain"
import "./styles/App.css"

function App() {

  return (


    <div className="App">
      <Header></Header>
      <CreateTodo></CreateTodo>
      <TodoMain></TodoMain>
    </div>

  )
}

export default App
