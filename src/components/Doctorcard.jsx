import { useNavigate } from 'react-router-dom'

function Doctorcard({ name, gender, specialization, id,deldata,updatedata }) {
  const navigate = useNavigate()

  return (
    <div>
      <div>
        <img
          width="100"
          src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
          alt="Doctor"
        />
      </div>

      <h3>{name}</h3>
      <p>{gender}</p>
      <p>{specialization}</p>

      <button onClick={() => navigate(`/doctor/${id}`)}>
        View Details
      </button>
      <button onClick={() =>deldata(id)}>
        Delete
      </button>
      <button onClick={() => updatedata(id)}>
        Update
      </button>
    </div>
  )
}

export default Doctorcard