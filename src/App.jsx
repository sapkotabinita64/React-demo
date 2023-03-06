import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackRoutes } from "./routes/BackRoutes";
import { FrontRoutes } from "./routes/FrontRoutes";

function App() {
  return <BrowserRouter>
    <FrontRoutes/>
    <BackRoutes/>
  </BrowserRouter>
}

export default App
