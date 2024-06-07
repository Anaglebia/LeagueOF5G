import * as S from "./AgendarStyled";
import axios from "axios";
import { useForm } from "react-hook-form";

const DeletarConsulta = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    axios
      .delete(`http://localhost:3000/consultas/${data.id}`)
      .then((response) => {
        console.log(`Consulta deletada ID ${data.id}`);
        reset();
      })
      .catch((error) => {
        console.error(`Erro ao deletar consulta: ${error}`);
      });
  }

  return (
    <S.Container>
      <S.Title>Cancelar Agendamento</S.Title>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label htmlFor="id">Id Consulta</S.Label>
        <S.Input type="text" {...register("id", { required: true })} />
        {errors.id && (
          <S.ErrorMessage>Favor preencher o ID da consulta.</S.ErrorMessage>
        )}
        <button type="submit">Enviar</button>
      </S.Form>
    </S.Container>
  );
};

export default DeletarConsulta;