import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import StockUpdate from "./Pages/StockUpdate/StockUpdate";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/stockUpdate/:id"
          element={
            <RequireAuth>
              <StockUpdate></StockUpdate>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
