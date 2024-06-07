import axios from "axios";
import { useEffect, useState } from "react";

import * as S from "./Style";

const TodasConsultas = () => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const response = await axios.get("http://localhost:3000/consultas");
        setConsultas(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchConsultas();
  }, []);

  return (
    <S.MainTodasConsultas>
      <h2>Relatório de Consultas</h2>

      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Horário</th>
            <th>Especialidade</th>
            <th>Nome do Médico</th>
            <th>Observação</th>
          </tr>
        </thead>
        <tbody>
          {consultas.length > 0 ? (
            consultas.map((consulta) => (
              <tr key={consulta.id}>
                <td>{consulta.dataConsulta}</td>
                <td>{consulta.horario}</td>
                <td>{consulta.especialidade}</td>
                <td>{consulta["nome-medico"]}</td>
                <td>{consulta.observacao}</td>
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
  );
};

export default TodasConsultas;
