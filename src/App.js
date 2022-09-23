
import './App.css';
// import { useState } from 'react';
// import { useEffect } from 'react';
import React from 'react';
import Home from './components/Lms/Home/Home';
import Nav from './components/Lms/Home/Nav';
import Login from './components/Lms/Login/Login';
import SignUp from './components/Lms/Signup/SignUp';
import About from './components/Lms/About/About';
import Dashboard from './components/Lms/Dashboard/Dashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Reset from './components/Lms/Signup/Reset';




class App extends React.Component{
  // constructor (props){
  //   super(props);
  //   this.state={apiResponse: ''}
  // }
  // callAPI(){
  //   fetch('http://localhost:3000/testAPI')
  //   .then(res=>res.text())
  //   .then(res=> this.setState({apiResponse:res}))
  // }
  // componentWillMount(){
  //   this.callAPI()
  // }

//   const [data,setData]= useState('')

// useEffect(()=>{
//   fetch('/api').then(res=>res.json()).then(data => setData(data.message))
// }, [])
render(){
  return (
    <div className="App">
      <Router>
      <Nav/>
      {/* <p>{this.state.apiResponse}</p> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/> 
          <Route path='/forgot' element={<Reset/>}/>

        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}
}
export default App;
