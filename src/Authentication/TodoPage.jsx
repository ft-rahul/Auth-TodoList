import Header from "../Components/header"
import Card from '../Components/card';
import Todocontainer from '../Components/Todocontainer';
import { data, useLocation } from "react-router-dom";
function TodoPage() {

  const now = new Date();
  const data = useLocation()

  const currentDate = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const currentTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  return (
    <div className='bg-black p-16'>
      <div className='bg-white p-10 border rounded-md'>
        {/* Header */}
        <Header username={data.state.user} />

        {/* Mid */}
        <div className='flex gap-5 justify-between py-5 flex-wrap '>
          <Card bgcolor={"#9ae5f3"} title={"23*"} subtitle={"Chennai"} /> 
          <Card bgcolor={"#f39ac9"} title={currentDate} subtitle={currentTime} />
          <Card bgcolor={"#d2f39a"} title={"React"} subtitle={"Using React"} />
        </div>
        
        {/* manage activites parent */}
        <Todocontainer/>
      </div>
    </div>
  );
}

export default TodoPage;
