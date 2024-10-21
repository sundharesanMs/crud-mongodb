import {BrowserRouter, Routes, Route}  from  "react-router-dom"
import './App.css'


import Users from "./Users";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

function App() {
  return (
    <>
      <div>
        <h1>Crud operation</h1>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/update" element={<UpdateUser />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
