import Routeyy from "./R-Route"
import Login from "./Authentication/R-Login"
import { useState } from "react"
function App() {

  const [userpw, setuserpw] = useState(
    [
      {
        username: "rahul",
        password: "123"
      }
    ]
  )

  return ( 
    <>
      <Routeyy userpw={userpw} setuserpw={setuserpw} />
      {/* <Login userpw={userpw}/> */}
    </>
  )
}

export default App
