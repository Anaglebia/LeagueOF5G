import { useEffect, useState } from "react";
import {api} from '../../lib/axios';
import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';
// import { useParams } from "react-router-dom";

function Dashboard() {
  const [cadastro, setCadadastro] = useState([]);
  const {register, handleSubmit, reset} = useForm({ })
  // const {id} = useParams()
  
  // function atualizar(){
  //   api.put('/cadastro/${id}')
  // }
  

  // const navigate = useNavigate()
  function Create(data){
    api.post('/cadastro', data)
    reset()
  }

  useEffect(()=>{
    api.get('/cadastro')
    .then((response)=>{
      setCadadastro(response.data)
    })
    .catch((err)=>{
      console.log("Deu ruim!! err" + err)
    })
    
  },[])
    return (
      <>
      <h2>Historico de consultas</h2>
      <form onSubmit={handleSubmit(Create)}>
      
     <label>Especialidade <input type="text" id="especialidade" name="especialidade" {...register('especialidade')} /></label>
     <label>Hospital <input type="text" id="hospital" name="hospital" {...register('hospital')} /></label>
     <label>Data<input type="date" id="data" name="data" {...register('data')} /></label>
     <label>Hora <input type="time" id="hora" name="hora" {...register('hora')} /></label>
     <button>Confirmar agendamento</button>

     {/* <button onClick={atualizar()}>Alterar agendamento</button> */}
     <button>Excluir agendamento</button>
      </form>
        {cadastro.map((cad)=>(
      <div key={cad.id}>
          <li>Especialidade: {cad.especialidade}</li>
          <li>Hospital: {cad.hospital}</li>
          <li>Data: {cad.data}</li>
          <li>Hora: {cad.hora}</li>
      </div>
     
      
     ))}
      </>
    );
  }
  
  
  export default Dashboard;