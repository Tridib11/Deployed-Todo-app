import ListHeader from "./components/ListHeader.jsx";
import {useEffect, useState} from "react";
import ListItem from "./components/ListItem.jsx";
function App() {
    const userEmail="tridib@mail.com"
    const[tasks,setTasks]=useState(null)
    const getData=async()=>{
        try{
            const response=await fetch(`http://localhost:8000/todos/${userEmail}`)
            const json=await response.json()
            setTasks(json)
        }catch(err){
            console.error(err)
        }
    }


    useEffect(() => {
        getData()
    }, []);

    console.log(tasks)

    //Sort by date

    const sortedTasks=tasks?.sort((a,b)=>new Date(a.date) - new Date(b.date))


    return (
    <div className="app">
      <ListHeader listName={'🌴 Holiday tick list'}/>
        {sortedTasks?.map(<ListItem key={task.id} task={task}/>)}
    </div>
  )
}

export default App
