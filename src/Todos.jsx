import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = ({
  data,
  onDelete,
  addTodo,
  edit,
  deleteAll,
  setTitle,
  setButton,
  setTodo,
  button
}) => {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          {data.length === 0
            ? "No Todos Left"
            : data.map((todo1) => {
                return (
                  <TodoItem
                    setButton={setButton}
                    edit={edit}
                    data={data}
                    addTodo={addTodo}
                    onDelete={onDelete}
                    todo1={todo1}
                    title={todo1.title}
                    key={todo1.sno}
                    setTitle={setTitle}
                    setTodo = {setTodo}
                    button = {button}
                  />
                );
              })}

          <button className="deleteAll" onClick={() => deleteAll(data)}>
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};
