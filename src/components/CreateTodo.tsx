import { addDoc, collection } from "firebase/firestore";
import { useState } from "react"
import { db } from "../config/Firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'



export const CreateTodo = () => {

    const [task, setTask] = useState("");
    const taskRef = collection(db, "Todos");
    const [isVisiblePopUp, setisVisiblePopUp] = useState(false);


    const onCreateTask = async () => {

        try {
            await addDoc(taskRef, {
                content: task,
            })
            location.reload();
        }
        catch (err) {
            console.log("Error adding a new Task: ", err);
        }
    }

    const handlePopUp = () => {
        setisVisiblePopUp(!isVisiblePopUp)
    }

    return (
        <>
        {isVisiblePopUp ? 
        <div className="addTodo-popup">
            <div className="createTodo-popup">
                <h2>Add a new task!</h2>
                <input type="text" onChange={(e) => setTask(e.target.value)} placeholder="I have to..."/>
                <button onClick={onCreateTask}>Create</button>
                <button onClick={handlePopUp} className="createTodo-popup-exit-btn"><FontAwesomeIcon icon={faXmark} className="fa-3x"></FontAwesomeIcon></button>
            </div>
        </div>
        :
        <div className="create-todo">
            <button onClick={handlePopUp} className="create-todo-btn">+</button>
        </div>}
        </>
    )
}