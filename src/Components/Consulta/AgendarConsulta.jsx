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

        <S.Label htmlFor="horario">Horario</S.Label>
        <S.Input type="time" {...register("horario", { required: true })} />
        {errors.horario && (
          <S.ErrorMessage>Favor preencher o horário.</S.ErrorMessage>
        )}

        <S.Label htmlFor="especialidade">Especialidade</S.Label>
        <S.Input
          type="text"
          {...register("especialidade", { required: true })}
        />
        {errors.especialidade && (
          <S.ErrorMessage>Favor preencher a especialidade.</S.ErrorMessage>
        )}

        <S.Label htmlFor="nomeMedico">Nome do Médico</S.Label>
        <S.Input type="text" {...register("nomeMedico", { required: true })} />
        {errors.nomeMedico && (
          <S.ErrorMessage>Favor preencher o nome do médico.</S.ErrorMessage>
        )}

        <S.Label htmlFor="observacao">Observação</S.Label>
        <S.Input type="text" {...register("observacao")} />

        <S.Button type="submit">
          <div>
            <div className="folder">
              <div className="top">
                <svg viewBox="0 0 24 24">
                <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
              </div>
              <div className="paper"></div>
            </div>
            <div className="pencil"></div>
          </div>
          Enviar
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default AgendarConsulta;
