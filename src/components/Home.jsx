import axios from 'axios'
import {useState,useEffect} from 'react'
import Doctorcard from './Doctorcard';

function Home({newdoctor,deldata,updatedata}) {
    let [doctors,setDoctors]=useState([])
    let [search,setSearch]=useState('')
    let [specialization,setSpecialization]=useState('')

    async function fetchdata(){
     let response=await axios.get('https://doctorapibackend.onrender.com/doctors')
         console.log(response.data)
          setDoctors(response.data)
    }
    useEffect(()=>{
        fetchdata()
    },[newdoctor])
    
    // useEffect(()=>{
    //     if(newdoctor){
    //        setDoctors(prev=>[...prev,newdoctor]) 
    //     }
    // },[newdoctor])
    
    let filtereddoctors=doctors.filter((val)=>{
      return (val.name.toLowerCase().includes(search.toLowerCase())) &&
       (specialization=="" || val.specialization==specialization) 
    })
  return (
    <div >

       <div className='filters'>
      <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search your doctor' />
        <select value={specialization} onChange={(e)=>setSpecialization(e.target.value)}>
          <option disabled selected>Enter Specialization</option>
          <option value="">All</option>
          <option value="Muscles">Muscles</option>
          <option value="Bones">Bones</option>
          <option value="Heart">Heart</option>
        </select>
       </div>

        {filtereddoctors.length>0?(
              <div className='doctorcontainer'>
            {filtereddoctors.map((doctor)=>(
                   <Doctorcard updatedata={updatedata} deldata={deldata} id={doctor.id} key={doctor.id} name={doctor.name} gender={doctor.gender} specialization={doctor.specialization}/>
            ))}
        </div>
        ):<h1>doctors not  found</h1>}
      


    </div>
  )
}
export default Home