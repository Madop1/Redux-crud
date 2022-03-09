import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUsers from "./pages/EditUsers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/editUsers/:id" element={<EditUsers />} />
      </Routes>
    </div>
  );
}

export default App;
