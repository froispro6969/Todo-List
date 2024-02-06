import { addDoc, collection } from "firebase/firestore";
import { useState } from "react"
import { db } from "../config/Firebase";




export const CreateTodo = () => {

    const [task, setTask] = useState("");
    const taskRef = collection(db, "Todos");


    const onCreateTask = async () => {

        try {
            await addDoc(taskRef, {
                taskID: crypto.randomUUID(),
                content: task
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="create-Todo">
            <input type="text" onChange={(e) => setTask(e.target.value)} />
            <button onClick={onCreateTask}>Create</button>
        </div>
    )
}