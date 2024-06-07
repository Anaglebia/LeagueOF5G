import { FaTimes  } from 'react-icons/fa'; // Importe o ícone de lixeira
import axios from "axios";
import { useEffect, useState } from "react";

import * as S from "./Style";

const TodasConsultas = () => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    fetchConsultas();
  }, []);

  const fetchConsultas = async () => {
    try {
      const response = await axios.get("http://localhost:3000/consultas");
      console.log(response)
      setConsultas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  async function handleCancelarConsulta(id) {
    axios
      .delete(`http://localhost:3000/consultas/${id}`)
      .then((response) => {
        console.log(`Consulta deletada ID ${id}`);
        fetchConsultas();
      })
      .catch((error) => {
        console.error(`Erro ao deletar consulta: ${error}`);
      });
  }

  return (
    <S.MainConsultas>
      <S.MainTodasConsultas>
        <h2>Relatório de Consultas</h2>

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Especialidade</th>
              <th>Nome do Médico</th>
              <th>Observação</th>
              <th>Cancelar Consulta</th>
            </tr>
          </thead>
          <tbody>
            {consultas.length > 0 ? (
              consultas.map((consulta) => (
                <tr key={consulta.id}>
                  <td>{consulta.id}</td>
                  <td>{consulta.dataConsulta}</td>
                  <td>{consulta.horario}</td>
                  <td>{consulta.especialidade}</td>
                  <td>{consulta["nomeMedico"]}</td>
                  <td>{consulta.observacao}</td>
                  <td>
                    <button onClick={() => handleCancelarConsulta(consulta.id)} >
                    <FaTimes /> {/* Ícone de lixeira */}
                      Cancelar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Nenhuma consulta encontrada</td>
              </tr>
            )}
          </tbody>
        </table>
      </S.MainTodasConsultas>
    </S.MainConsultas>
  );
};

export default TodasConsultas;
