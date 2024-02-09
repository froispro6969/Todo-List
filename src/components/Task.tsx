import { deleteDoc, doc} from "firebase/firestore"
import { Task as TaskProps} from "./TodoMain"
import { db } from "../config/Firebase";

interface Props {
    task: TaskProps
}



const removeTask = async (id: string) => {
    const taskDocRef = doc(db, 'Todos', id);

    try {
        await deleteDoc(taskDocRef);
    } catch (e) {
        console.error("Error removing document: ", e);
    }
}



export const Task = (props: Props) => {

    const { task } = props;


    return (
        <>
            <input type="checkbox" />
            {task.content}
            <button onClick={()=>removeTask(task.taskID)}>Remove</button>
            <button>Update</button>
        </>
    )
}