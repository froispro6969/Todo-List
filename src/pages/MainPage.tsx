import { CreateTodo } from "../components/CreateTodo"
import { Header } from "../components/Header"
import { TodoMain } from "../components/TodoMain"

export const MainPage = () => {
    return (
        <>
            <Header></Header>
            <CreateTodo></CreateTodo>
            <TodoMain></TodoMain>
        </>
    )
}