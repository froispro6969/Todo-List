import { deleteDoc, doc, updateDoc } from "firebase/firestore"
import { Task as TaskProps } from "./TodoMain"
import { db } from "../config/Firebase";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

interface Props {
    task: TaskProps
}

export const Task = (props: Props) => {

    const { task } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState("");
    


    const removeTask = async (id: string) => {
        const taskDocRef = doc(db, 'Todos', id);

        try {
            await deleteDoc(taskDocRef);
            location.reload();
        } catch (err) {
            console.error("Error removing document: ", err);
        }
    }

    const isTaskEditing = () => {
        setIsEditing(true)
    }

    const updateTask = async (id: string, editedTask: string) => {
        const taskDocRef = doc(db, "Todos", id);
        try {
            await updateDoc(taskDocRef, {
                content: editedTask,
            })
            location.reload();
        }
        catch (err) {
            console.log("Error updating task: ", err);
        }
    }


   

    return (
        <>
            {isEditing ?
                <div className="isEditingTask">
                    <input type="text" onChange={(e) => setEditedTask(e.target.value)} />
                    <button onClick={() => updateTask(task.taskID, editedTask)}>Accept</button>
                </div>
                :
                <div className="task">
                    <input type="checkbox" className="task-checkbox"/>
                    <p className="task-content">{task.content}</p>
                    <div className="task-buttons">
                        <button onClick={() => isTaskEditing()}><FontAwesomeIcon icon={faPen} className="task-buttons-penIcon"></FontAwesomeIcon></button>
                        <button onClick={() => removeTask(task.taskID)}><FontAwesomeIcon icon={faTrash} className="task-buttons-trashIcon"></FontAwesomeIcon></button>
                    </div>
                </div>
            }
        </>
    )
}