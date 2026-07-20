import { Link } from "react-router-dom"
import Login from "./R-Login"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup({userpw, setuserpw}) {
    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()
    const navigate = useNavigate()

    function handleUserinput(evt) {
        seteusername(evt.target.value)
    }

    function handlePasswordinput(evt) {
        setepassword(evt.target.value)
    }

    function handleadd()
    {
        setuserpw([...userpw,{username:eusername, password:epassword}])
        navigate("Auth-TodoList/")
    }


    return (
        <div className="bg-black p-20">
            <div className="bg-white p-10">
                <div>
                    <h3 className="text-3xl font-bold">Hey There !</h3>
                    <p>Signup here :)</p>
                    <div className="flex flex-col gap-2 p-2 items-center">
                        <input type="text" placeholder="Username" className="border-2 p-2 w-3xs rounded-2xl" onChange={handleUserinput} />
                        <input type="text" placeholder="Password" className="border-2 p-2 w-3xs rounded-2xl" onChange={handlePasswordinput} />
                        <button className="bg-green-300 -400 w-16 p-2 rounded-2xl cursor-pointer font-semibold" onClick={handleadd}>Signup</button>
                    </div>
                    <p>If you don't have any account please...
                        <Link to="/" className="text-purple-600 underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Signup