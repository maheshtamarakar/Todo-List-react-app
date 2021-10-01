import { Todos } from "./Todos";
import { AddItem } from "./AddItem";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [button, setButton] = useState('Add_Item');
  // useEffect(() => {
  // setButton(button);
    
  // }, [button])
  const [title, setTitle] = useState("");
  const onDelete = (todo) => {
    setData(
      data.filter((e) => {
        return e !== todo;
      })
    );
  };
  const deleteAll = (data) => {
    setData((data = ""));
  };

  let inIt;
  if (!localStorage.getItem("todos")) {
    inIt = [];
  } else {
    inIt = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title) => {
    let sno;
    data.length === 0 ? (sno = 1) : (sno = data[data.length - 1].sno + 1);

    const myTodos = {
      sno: sno,
      title: title,
    };
    setData([...data, myTodos]);
  };
  const [data, setData] = useState(inIt);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);

  return (
    <div className="center-element">
      <h1 className="my-4">What's the Plan for Today?</h1>
      <AddItem
        todo={todo}
        button={button}
        setButton={setButton}
        setTitle={setTitle}
        title={title}
        addTodo={addTodo}
        inIt = {inIt}
        setData = {setData}
        data = {data}
      />
      <Todos
        setButton={setButton}
        deleteAll={deleteAll}
        data={data}
        onDelete={onDelete}
        setTitle={setTitle}
        setTodo={setTodo}
        button = {button}
      />
    </div>
  );
}

export default App;
