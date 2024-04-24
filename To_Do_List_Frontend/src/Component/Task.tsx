import { FormEvent, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { createTask, getTaskById, updateTaskById } from "../Services/TodoListService";

type RouteParam = {
  id: string;
}

const Task: React.FC = () => {

  const { id } = useParams<RouteParam>();

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [completed, setCompleted] = useState<string>();
  const history = useHistory();

  const saveOrUpdate = ((e: FormEvent) => {
    e.preventDefault();

    const doTask = { title, description, completed };
    if (id) {
      updateTaskById(doTask, Number(id))
        .then((response) => history.push("/task"))
        .catch((error) => console.log(error))
    }
    else {
      createTask(doTask)
        .then((response) => history.push("/task"))
        .catch((error) => console.log(error))
    }
  })

  function Heading() {
    if (id) {
      return <h1 className="text-center">Update Task</h1>;
    }
    else
      return <h1 className="text-center">New Task</h1>;
  }
  useEffect(() => {
    if (id) {
      getTaskById(Number(id)).then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description)
        setCompleted(response.data.completed)
      })
    }
  }, [id])
  return (
    <>
      <Container>
        {Heading()}
        <Form>
          <Form.Label>Title of Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title of task" value={title} onChange={(e) => setTitle(e.target.value)}
          />

          <Form.Label>Description of task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description of task" value={description} onChange={(e) => setDescription(e.target.value)}
          />

          <Form.Label>Status of task</Form.Label>
          <Form.Control
            type="text"
            placeholder="If yes type 'true' or else 'false'" value={completed} onChange={(e) => setCompleted(e.target.value)}
          />

          <br />
        </Form>
        <Button onClick={(e) => saveOrUpdate(e)} variant="primary">Submit</Button>
      </Container>
    </>
  );
}

export default Task;