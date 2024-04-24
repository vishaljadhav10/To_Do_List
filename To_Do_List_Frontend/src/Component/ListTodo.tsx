import { useEffect, useState } from "react";
import { getAllTask,deleteTaskById, complete, inComplete } from "../Services/TodoListService";
import { error } from "console";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faSquareCheck, faSquareXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";


type Todo = {
    id: number;
    title: String;
    description: String;
    completed: String;
}

const ListToDo: React.FC = () => {
    const history = useHistory();
    const [todos, setTodos] = useState<Todo[]>([])

    const updateTaskById=(id:number)=>{
       history.push(`/edit-task/${id}`);
    }

    const removeTaskById=(id:number)=>{
        deleteTaskById(id).then(()=>listTask())
        .catch((error)=>console.log(error));
    }
    const changeToYes=(id:number)=>{
        complete(id).then(()=>listTask()).catch((error)=>console.log(error))
    }

    const changeToNo=(id:number)=>{
        inComplete(id).then(()=>listTask()).catch((error)=>console.log(error))
    }
    const listTask=()=>{
        getAllTask()
            .then((response) => {
                setTodos(response.data);
                console.log(response.data);
            })
            .catch((error) => console.log(error));
    }
    useEffect(() => listTask(), [])

    return (
        <div style={{margin:'0px 50px'}}>
            <h1 style={{textAlign:"center"}}>List of Todos</h1>
            <Link to='/add-task' className='btn btn-primary mb-2'>Add Task</Link>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Todo Title</th>
                    <th>Todo Description</th>
                    <th>Todo Completed</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody >
                {
                    todos.map(task =>
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.completed?"Yes":"No"}</td>
                            <td>
                                <button onClick={()=>updateTaskById(task.id)} style={{ marginRight: '5px',border:'0px' }}><FontAwesomeIcon icon={faFilePen} size="xl"/></button>

                                <button onClick={()=>removeTaskById(task.id)} style={{ marginRight: '5px',border:'0px' }}><FontAwesomeIcon icon={faTrashCan} size="xl"/></button>

                                <button onClick={()=>changeToYes(task.id)} style={{ marginRight: '5px',border:'0px' }}>
                                    <FontAwesomeIcon icon={faSquareCheck} size="xl" style={{ color: "#25b13d", }} />
                                    </button>

                                <button onClick={()=>changeToNo(task.id)} style={{ marginRight: '5px',border:'0px' }}><FontAwesomeIcon icon={faSquareXmark} size="xl" style={{ color: "#ff0000", }} /></button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
        </div>
    );
}

export default ListToDo;


