import * as S from "./Style";

import React from "react";

const AgendarConsulta = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <h2>Agendar Consulta</h2>

      <form onSubmit={onSubmit}>
        <label htmlFor="data">Data</label>
        <input type="text" {...register("")} />

        <label htmlFor="horario">Horario</label>
        <input type="text" {...register("")} />

        <label htmlFor="especialidade">Especialidade</label>
        <input type="text" {...register("")} />

        <label htmlFor="nome-medico">Nome Médico</label>
        <input type="text" {...register("")} />

        <label htmlFor="observacao">Observação</label>
        <input type="text" {...register("")} />
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default AgendarConsulta;
