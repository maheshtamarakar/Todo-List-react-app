import React from "react";

export const AddItem = ({
  todo,
  setButton,
  setTitle,
  title,
  addTodo,
  button,
  setData,
  data
}) => {
  


  const write = (e) => {
    setTitle(e.target.value);
  };

  const submit = (e,todo, setData, data, title) => {
    e.preventDefault();
    if (!title) {
      alert("title cannot be blank");
    } else if (button === "Add_Item") {
    console.log(button);

      addTodo(title);
    }
    else if(button === 'Update'){
      setButton("Add_Item");
    console.log(button);

    setData(
      data.map((elem)=>{  
        if(elem === todo){
          return { ...elem, title}
        }
        return elem;
    })
  )

    }
    setTitle("");
  };

  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <form onSubmit={(e) =>submit(e,todo, setData, data, title)} action="">
            <div className=" addItem">
              <input
                type="text"
                className="form-control "
                id="exampleFormControlInput1"
                placeholder="Add a todo"
                name="title"
                value={title}
                onChange={write}
              />
            </div>
            <button
              type="submit"
              className="button"
            >
              {button}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
