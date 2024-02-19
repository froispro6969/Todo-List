import { CreateTodo } from "../components/CreateTodo"
import { Header } from "../components/Header"
import { TodoMain } from "../components/TodoMain"

export const MainPage = () => {
    return (
        <>
            <div className="main-page">
                <Header></Header>
                <CreateTodo></CreateTodo>
                <TodoMain></TodoMain>
            </div>
        </>
    )
}