import * as S from "./Style";
import { api } from "../../lib/axios";
import { useForm } from "react-hook-form";

import React from "react";

const AgendarConsulta = () => {
  const { register, handleSubmit, reset } = useForm();

  // const onSubmit = (e) => {

  //   console.log(e);
  // };

  function onSubmit(data) {
    api.post("/consultas", data);
    console.log(data);
    // navigate("/Dashboard");
    reset();
  }

  return (
    <div>
      <h2>Agendar Consulta</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="dataConsulta">Data</label>
        <input type="text" {...register("dataConsulta")} />

        <label htmlFor="horario">Horario</label>
        <input type="text" {...register("horario")} />

        <label htmlFor="especialidade">Especialidade</label>
        <input type="text" {...register("especialidade")} />

        <label htmlFor="nome-medico">Nome Médico</label>
        <input type="text" {...register("nome-medico")} />

        <label htmlFor="observacao">Observação</label>
        <input type="text" {...register("observacao")} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default AgendarConsulta;
{
  /* 

 */
}
