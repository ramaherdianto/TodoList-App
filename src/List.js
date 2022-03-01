import { Button, Card, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const List = ({ todoList, deleteTodo, finishTodo, editTodo, selectedTodo, handleChangeEditTodoName, finishEditTodo }) => {
  return todoList.map((value, index) => {
    return (
      <Card className="mt-3" key={index.toString()} border={value.status && "primary"}>
        <Card.Body>
          <Row>
            {/* Nama Todonya */}

            <Col>{selectedTodo.index === index ? <Form.Control type="text" placeholder="Masukan todo..." onChange={handleChangeEditTodoName} value={selectedTodo.name} /> : <h3>{value.todoName}</h3>}</Col>

            {/* Button nya */}
            <Col xl="1">
              <Button onClick={() => finishTodo(index)} variant={value.status ? "secondary" : "primary"} className="w-100">
                {value.status ? <FaTimes /> : <FaCheck />}
              </Button>
            </Col>
          </Row>
          <div className="mt-4">
            {selectedTodo.index === index ? (
              <Button onClick={finishEditTodo}>Simpan</Button>
            ) : (
              <div>
                <Button variant="warning" className="me-3" onClick={() => editTodo(index, value.todoName)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => deleteTodo(index)}>
                  Hapus
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    );
  });
};

export default List;
