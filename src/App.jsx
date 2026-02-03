import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItem from "./Components/TodoItem";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessge from "./Components/WelcomeMessge";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];

    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessge></WelcomeMessge>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}
export default App;
