import { addDoc, collection } from "firebase/firestore";
import { useState } from "react"
import { db } from "../config/Firebase";




export const CreateTodo = () => {

    const [task, setTask] = useState("");
    const taskRef = collection(db, "Todos");


    const onCreateTask = async () => {

        try {
            await addDoc(taskRef, {
                content: task
            })
            location.reload();
        }
        catch (err) {
            console.log("Error adding a new Task: ", err);
        }
    }

    return (
        <>
        <div className="create-todo">
            <button className="create-todo-btn">+</button>
        </div>
        {/* <div className="create-Todo">
            <input type="text" onChange={(e) => setTask(e.target.value)} />
            <button onClick={onCreateTask}>Create</button>
        </div> */}
        </>
    )
}