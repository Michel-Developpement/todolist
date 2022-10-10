import "./styles.css";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TodoView from "./view/TodoView";
import IndexView from "./view/IndexView";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="/todo" element={<TodoView />} />
      </Routes>
    </BrowserRouter>
  );
}
