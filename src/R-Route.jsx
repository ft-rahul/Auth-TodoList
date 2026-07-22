import Login from "./Authentication/R-Login"
import Signup from "./Authentication/R-Signup"
import TodoPage from "./Authentication/TodoPage"
import { Route,Routes,BrowserRouter } from "react-router-dom"
function Routeyy({userpw,setuserpw})
{
    return(
        <>
            <BrowserRouter basename="/auth-todolist" >
            <Routes>
                <Route path="/" element={<Login userpw={userpw}/>} ></Route>
                <Route path="/signup" element={<Signup userpw={userpw} setuserpw={setuserpw}/>} ></Route>
                <Route path="/todolist" element={<TodoPage/>}></Route>
            </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routeyy