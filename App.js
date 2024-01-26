import React, { useState } from 'react'
import Axios from "axios"
import "./App.css"

const key='3c4b9caaba972c7e4ba5aa8ebda1a929';

const App = () => {
  const [city,setCity]=useState("");
  const [data,setData]=useState();

  const fetchData=async () => {
    try{
      const response= await Axios.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+key);
      setData(response.data);
    }
    catch(err){
      alert('please Enter City Name Correctly');
    }
  }
  return (
    <div className='App'>
      <h1 className='title'>Weather App</h1>
      <div className='input-container'>
        <input type='text' className='input' 
        onChange={e => setCity(e.target.value)}
        placeholder='Enter the city Name'
        />
        <button className='button' onClick={fetchData}>fetch</button>
      </div>
      <div>
        {data && (
          <div>
            <h1>{data.name},{data.sys.country}</h1>
            <div>
              <div>{Math.round(data.main.temp)}C</div>
              <div>
                <div>lat-{data.coord.lat}</div>
                <div>lon-{data.coord.lon}</div>
              </div>
            </div>

          </div>
        )}
      </div>

      
    </div>
    
  )
}




export default App;
