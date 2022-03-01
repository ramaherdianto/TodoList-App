import { useState } from "react";
import "./App.css";
import { Container, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./Add";
import List from "./List";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [openNotificationSave, setOpenNotificationSave] = useState(false);
  const [openNotificationDelete, setOpenNotificationDelete] = useState(false);
  const [openNotificationEdit, setOpenNotificationEdit] = useState(false);

  const addTodo = () => {
    const dataTodo = { todoName, status: false };
    setTodoList([dataTodo, ...todoList]);
    setTodoName("");
    setOpenNotificationSave(true);
  };

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((value, idx) => index !== idx));
    setOpenNotificationDelete(true);
  };

  const finishTodo = (index) => {
    const cloneTodoList = [...todoList];
    cloneTodoList[index].status = !cloneTodoList[index].status;
    setTodoList(cloneTodoList);
  };

  const handleChangeTodoName = (e) => {
    const data = e.target.value;
    setTodoName(data);
  };

  const editTodo = (index, name) => {
    setSelectedTodo({ index, name });
  };

  const handleChangeEditTodoName = (e) => {
    const name = e.target.value;
    setSelectedTodo({ ...selectedTodo, name });
  };

  const finishEditTodo = () => {
    const cloneTodoList = [...todoList];
    cloneTodoList[selectedTodo.index].todoName = selectedTodo.name;
    setTodoList(cloneTodoList);
    setSelectedTodo({});
    setOpenNotificationEdit(true);
  };

  return (
    <Container>
      <h1 className="text-center mt-5">Todo Web App</h1>

      {/* Notifikasi */}
      <div className="fixed-top mt-3 ms-3">
        {/* Notifikasi Save */}
        <Toast show={openNotificationSave} autohide delay={3000} onClose={() => setOpenNotificationSave(false)} bg="success">
          <Toast.Body className="text-white">Berhasil menambahkan data</Toast.Body>
        </Toast>

        {/* Notifikasi Delete */}
        <Toast show={openNotificationDelete} autohide delay={3000} onClose={() => setOpenNotificationDelete(false)} bg="success">
          <Toast.Body className="text-white">Berhasil menghapus data</Toast.Body>
        </Toast>

        {/* Notifikasi Edit */}
        <Toast show={openNotificationEdit} autohide delay={3000} onClose={() => setOpenNotificationEdit(false)} bg="success">
          <Toast.Body className="text-white">Berhasil edit data</Toast.Body>
        </Toast>
      </div>

      {/* Input Todo */}
      <Add handleChangeTodoName={handleChangeTodoName} todoName={todoName} addTodo={addTodo} />

      {/* List Todo */}
      <div className="mt-5">
        <List todoList={todoList} deleteTodo={deleteTodo} finishTodo={finishTodo} editTodo={editTodo} selectedTodo={selectedTodo} handleChangeEditTodoName={handleChangeEditTodoName} finishEditTodo={finishEditTodo} />
      </div>
    </Container>
  );
}

export default App;
