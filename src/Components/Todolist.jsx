import Todoitem from "./Todoitem"

function Todolist(props) {

    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr
    
    return (
        <div style={{ backgroundColor: "#f4f47f" }} className="flex-grow p-5">
            <h3 className="font-medium text-2xl">Activity List</h3>
            
            {activityarr.length === 0 ? <p> The Activity  list is empty :( Please Add some activity...</p>: ""}
            <p>{activityarr.map(function (item, index) {
                return (
                    <>
                        <Todoitem id={item.id} item={item} index={index} activityarr={activityarr} setactivityarr={setactivityarr} />
                    </>
                )
            })}</p>
        </div>
    )

}

export default Todolist