import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
function Doctordetails() {
    let {id}=useParams()
    let [doctor,setDoctor]=useState('')
    async function fetchdata(){
     let response=await axios.get(`https://doctorapibackend.onrender.com/doctors/${id}`)
     let finaldata=response.data.find((val)=>val.id==id)
    setDoctor(finaldata)
    }
    useEffect(()=>{
     fetchdata()
    },[])
  return (
    <div className='details'>
        <h1>{doctor.id}</h1>
        <h2>{doctor.name}</h2>
        <h2>{doctor.specialization}</h2>
        <h2>{doctor.age}</h2>
        <h2>{doctor.salary}</h2>
        <h2>{doctor.gender}</h2>
    </div>
  )
}

export default Doctordetails