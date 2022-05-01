import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItems from "./Pages/AddItems/AddItems";
import Blogs from "./Pages/Blogs/Blogs";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import ManegeProduct from "./Pages/ManegeProduct/ManegeProduct";
import MyItems from "./Pages/MyItems/MyItems";
import Register from "./Pages/Register/Register";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";

import StockUpdate from "./Pages/StockUpdate/StockUpdate";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/stockUpdate/:id"
          element={
            <RequireAuth>
              <StockUpdate></StockUpdate>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manege"
          element={
            <RequireAuth>
              <ManegeProduct></ManegeProduct>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myItems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addItems"
          element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
