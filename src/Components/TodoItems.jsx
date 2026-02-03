import TodoItem from "./TodoItem";
function TodoItems({ todoItems , onDeleteClick}) {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
