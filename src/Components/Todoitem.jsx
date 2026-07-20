function Todoitem(props) {

    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr

    function handleDeleteitem(deleteid)
    {
        var temparr = activityarr.filter(function(item){
            if(item.id === deleteid){
                return false
            }

            else{
                return true
            }
        })

        setactivityarr(temparr)
    }

    return (
        <>
            <div className="flex justify-between p-2 flex-wrap">
                <p className="text-lg">{props.index + 1}.{props.item.activity}</p>
                <button className="bg-red-500 p-2 rounded-full text-sm" onClick={function(){handleDeleteitem(props.id)} }>🗑️</button>
            </div>
        </>
    )
}

export default Todoitem