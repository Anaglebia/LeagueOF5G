import * as S from "./AgendarStyled";
import { api } from "../../lib/axios";
import { useForm } from "react-hook-form";

const AgendarConsulta = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    api.post("/consultas", data);
    console.log(data);
    reset();
  }

  return (
    <S.Container>
      <S.Title>Agendar Consulta</S.Title>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label htmlFor="dataConsulta">Data</S.Label>
        <S.Input
          type="date"
          {...register("dataConsulta", { required: true })}
        />
        {errors.dataConsulta && (
          <S.ErrorMessage>Favor preencher a data da consulta.</S.ErrorMessage>
        )}

        <label htmlFor="horario">Horario</label>
        <S.Input type="time" {...register("horario", { required: true })} />
        {errors.horario && (
          <S.ErrorMessage>Favor preencher o horário.</S.ErrorMessage>
        )}

        <label htmlFor="especialidade">Especialidade</label>
        <S.Input
          type="text"
          {...register("especialidade", { required: true })}
        />
        {errors.especialidade && (
          <S.ErrorMessage>Favor preencher a especialidade.</S.ErrorMessage>
        )}

        <label htmlFor="nomeMedico">Nome Médico</label>
        <S.Input type="text" {...register("nomeMedico", { required: true })} />
        {errors.nomeMedico && (
          <S.ErrorMessage>Favor preencher o nome do médico.</S.ErrorMessage>
        )}

        <label htmlFor="observacao">Observação</label>
        <S.Input type="text" {...register("observacao")} />

        <button type="submit">Enviar</button>
      </S.Form>
    </S.Container>
  );
};

export default AgendarConsulta;
{
  /* 

 */
}
