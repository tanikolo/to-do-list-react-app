
import './App.css';
import image from './heading.png';
import { ToDoList } from './ToDoList.js';

function App() {
  return (
    <div className='App'>
      <div className='container'>
<img src={image} width="250px" alt="To Do List"/>
</div>
    <ToDoList />
    </div>
  );
}

export default App;
