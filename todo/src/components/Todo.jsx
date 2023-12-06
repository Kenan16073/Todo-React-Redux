

export function Todo({id,text}) {

    const deleteTodo = () => {
        onCheck(id);
      };
    
  return (
    <div className="todo" onClick={deleteTodo}>
       <input type="checkbox"></input>
       <label>{text}</label>
     </div>
  )
}
