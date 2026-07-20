import { useState } from "react"
import Todolist from "./Todolist"
function Todocontainer() {
    const [activityarr, setactivityarr] = useState([
        {
            id: 1,
            activity: "go for a walk"
        },
        {
            id: 2,
            activity: "Have a Breakfast"
        },
        {
            id: 3,
            activity: "Good morning"
        }
    ])

    const [newactivity, setnewactivity] = useState()

    function handlechange(evt)
    {
        setnewactivity(evt.target.value)
    }

    function addactivity()
    {
        setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
        setnewactivity("")
    }


    return (
        <div className="flex gap-3 flex-wrap">

            <div className="">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <input type="text" value={newactivity} onChange={handlechange} placeholder="Enter your task..." className="outline-none border border-black " />
                <button onClick={addactivity} className="bg-black text-white border border-black cursor-pointer">Add</button>
            </div>
            <Todolist activityarr ={activityarr} setactivityarr={setactivityarr}/>

        </div>
    )
}

export default Todocontainer