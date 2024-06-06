import { useState } from "react"
import Tours from "./components/Tours"
import data from './data'

import './App.css'

function App() {

  const [tours,setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter((tour)=>
      tour.id!==id
    
      
    )
    setTours(newTours);
  }

  function refreshHandler(){
        setTours(data);
  }

  return (
    <div>
      
      {tours.length?<Tours tours={tours} removeTour={removeTour}></Tours>:
      <div className="refresh">
        <h1>No Tours Left</h1>
      <button className="btn-wht" onClick={() => refreshHandler()}
      >Refresh</button>
      </div>
      }
    </div>
  )
}

export default App
