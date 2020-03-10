import './App.css';
import axios from "axios"
import Show from "./components/show";
import React ,{ useState} from 'react';
import Create from "./components/create";
import { Router, navigate } from '@reach/router';




function App() {

  const [resData, setResData] = useState({
    id:'',
    name:'people',

  });
  const[listData, setListData] = useState ([])
  const changeHandler = (event) => {
    setResData ({
      ...resData,
      [event.target.name]: event.target.value
    })
  }
  const submitHandler= (event) => {
    event.preventDefault();
    axios.get(`https://swapi.co/api/${resData.name}/${resData.id}`)
      .then(Response =>{
        console.log (Response.data)
        setListData(Response.data)
      })
      navigate(`/${resData.name}/${resData.id}`)

      
  }
      

  return (
    <div className="App">
      <h1>Pick your Resorce </h1>
      <h1>and an Id number</h1>
      <Create path='/' submit={submitHandler} changeHandler={changeHandler}/>
      <Router>
        <Show path='/:name/:id' info={listData}/>
      </Router>
    </div>
  );
}

export default App;
