import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import '../src/components/styles.css'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
// import { useState } from 'react'
import{useState,useEffect} from 'react'
function App() {
  let[c,setc]=useState(0)
  let[count,setcount]=useState(0)
  useEffect(()=>{
    console.log('api call running')
  },[count])
  // let [c,setC]=useState(0)
  return (
    <div>
      {count}
      <button onClick={()=>setcount(count+1)}>increment count</button>
      {c}
      <button onClick={()=>setc(c+1)}>increment c</button>
      {/* {c}
      <button onClick={()=>{
        setC(c+1)
        console.log(c)
      }}>increment</button> */}
      <Navbar/>
      <Section/>
      <div className='doctorcontainer'>
        <Doctorcard name='John' gender='male' specialization='Bones specialist'/>
        <Doctorcard name='Jessy' gender='female' specialization='Heart specialist'/>
        <Doctorcard name='Jack' gender='male' specialization='Muscles specialist'/>
        <Doctorcard name='Jane' gender='female' specialization='Neurology'/>
        <Doctorcard name='Jordan' gender='male' specialization='Orthopedic'/>
      </div>
      <Addnewdoctor/>
    </div>
  )
}

export default App
