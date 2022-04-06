import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/todolist">ToDoList</Link>
      </nav>
    </div>
  );
}

export default Home;
