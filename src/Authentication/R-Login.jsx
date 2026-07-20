import { Link } from "react-router-dom"
import Signup from "./R-Signup"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(props) {

    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()
    const navigate = useNavigate()
    const [check, setcheck] = useState(true)
    var usercheck = true

    function handleUserinput(evt) {
        seteusername(evt.target.value)
    }

    function handlePasswordinput(evt) {
        setepassword(evt.target.value)
    }

    function checkuser() {
        props.userpw.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Login Successfully")
                setcheck(true)
                usercheck = false
                navigate("/todolist", {state:{user:eusername}})
            }
        })
        if (usercheck === true) {
            console.log("Login failed")
            setcheck(false)
        }
    }

    function handlekeydown(e) {
        if (e.key === "Enter") {
            checkuser();
        }
    }

    function handleusercheck() {

    }


    return (
        <div className="bg-black p-20">
            <div className="bg-white p-10">
                <div>
                    <h3 className="text-3xl font-bold">Hey There !</h3>
                    {check ? <p>Login Here :)</p> : <p className="text-red-600">Kindly Please Check your Username and Password</p>}
                    <div className="flex flex-col gap-2 p-2 items-center">
                        <input type="text" placeholder="Username" className="border-2 p-2 w-3xs rounded-2xl" onChange={handleUserinput} />
                        <input type="password" placeholder="Password" className="border-2 p-2 w-3xs rounded-2xl" onKeyDown={handlekeydown} onChange={handlePasswordinput} />
                        <button className="bg-blue-300 w-14 p-2 rounded-2xl cursor-pointer font-semibold" onClick={checkuser} >Login</button>
                    </div>
                    <p>If you don't have any account please...
                        <Link to="/signup" className="text-purple-600 underline">Signup</Link>
                    </p>
                </div>
            </div>
        </div>

    )
}
export default Login