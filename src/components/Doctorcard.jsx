
function Doctorcard({name,gender,specialization}) {
  return (
    <div>
        <div>
           <img width='100' src="https://cdn-icons-png.flaticon.com/512/387/387561.png" alt="" />
        </div>
        <h3>{name}</h3>
        <p>{gender}</p>
        <p>{specialization}</p>
        <button>view details</button>
    </div>
  )
}

export default Doctorcard