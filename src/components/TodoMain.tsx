import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../config/Firebase";
import { Task } from "./Task";


export interface Task {
    taskID: string;
    content: string;
}




export const TodoMain = () => {

    const [taskList, setTaskList] = useState<Task[]>();
    const taskRef = collection(db,"Todos");


    const getTasks = async () => {
        const data = await getDocs(taskRef);
        setTaskList(data.docs.map((doc)=>({...doc.data(), taskID: doc.id})) as Task[]);
    }

    useEffect(() =>{
        getTasks()   
    },[]);


    return (
        <div className="todo-list">
            {taskList?.map((task) => (
                <li key={task.taskID}>
                    <Task task={task}></Task>
                </li>
            ))}
        </div>
    )
}