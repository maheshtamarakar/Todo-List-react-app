import "./Item.css";

export const TodoItem = ({
  todo1,
  title,
  onDelete,
  setTitle,
  setButton,
  setTodo,
  button
}) => {
  const crossLine = (e) => {
    e.target.classList.toggle("active");
  };
  const edit = (todo1) => {
    setTitle(title);
    setButton("Update");
    console.log(button)
    setTodo(todo1);
  };
  
  return (
    <>
      <div className="todoItem" onClick={crossLine} >
        <h1 className="my-2 title" >{title}
        <p className="line"></p></h1>
        
        <div className="operation">
          <i className="fas fa-trash-alt" onClick={() => onDelete(todo1)}></i>
          <i className="far fa-edit" onClick={() => edit(todo1)}></i>
        </div>
      </div>
    </>
  );
};
