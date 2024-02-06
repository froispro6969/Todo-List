import { Task as TaskProps} from "./TodoMain"

interface Props {
    task: TaskProps
}


export const Task = (props: Props) => {

    const { task } = props;

    return (
        <>
            <input type="checkbox" />
            {task.content}
            <button>Remove</button>
        </>
    )
}