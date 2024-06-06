import axios from "axios";
import { useEffect, useState } from "react";


const TodasConsultas = () => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const response = await axios.get("http://localhost:8000/consultas");
        setConsultas(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchConsultas();
  }, []);

  return (
    <div>
      <h2>TodasConsultas</h2>
      {consultas.length > 0 ? (
        consultas.map((consulta) => (
          <div key={consulta.id}>
            <p>Data: {consulta.data}</p>
            <p>Horário: {consulta.horario}</p>
            <p>Especialidade: {consulta.especialidade}</p>
            <p>Nome do Médico: {consulta["nome-medico"]}</p>
            <p>Observação: {consulta.observacao}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>Carregando consultas...</p>
      )}
    </div>
  );
};

export default TodasConsultas;
