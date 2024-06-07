import { api } from "../../lib/axios";
import { useForm } from "react-hook-form";
import * as S from "./CadastroStyled";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  function Create(data) {
    api.post("/cadastro", data);
    // navigate("/Dashboard");
    reset();
  }

  return (
    <S.Container>
      <S.Title>Cadastro</S.Title>
      <S.Form onSubmit={handleSubmit(Create)}>
        <S.Fieldset>
          <S.Label>
            Primeiro nome
            <S.Input
              type="text"
              id="nome"
              name="nome"
              {...register("nome", { required: true })}
            />
            {errors.nome && (
              <S.ErrorMessage>Favor preencher o nome.</S.ErrorMessage>
            )}
          </S.Label>

          <S.Label>
            Sobrenome
            <S.Input
              type="text"
              id="Unome"
              name="Unome"
              {...register("Unome", { required: true })}
            />
            {errors.Unome && (
              <S.ErrorMessage>Favor preencher o sobrenome.</S.ErrorMessage>
            )}
          </S.Label>
        </S.Fieldset>

        <S.Fieldset>
          <S.Label>
            Email
            <S.Input
              type="email"
              id="email"
              name="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <S.ErrorMessage>O campo email é obrigatório.</S.ErrorMessage>
            )}
          </S.Label>

          <S.Label>
            Telefone
            <S.Input
              type="tel"
              id="phone"
              name="phone"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <S.ErrorMessage>O campo telefone é obrigatório.</S.ErrorMessage>
            )}
          </S.Label>
        </S.Fieldset>

        <S.Fieldset>
          <S.Label>
            Data de Nascimento
            <S.Input
              type="date"
              id="dateNasc"
              name="dateNasc"
              {...register("dateNasc", { required: true })}
            />

          {errors.dateNasc && (
            <S.ErrorMessage>
              Favor preencher a data de nascimento corretamente.
            </S.ErrorMessage>
          )}
          </S.Label>

          <S.Label>
            Endereço
            <S.Input type="text" id="end" name="end" {...register("end")} />
            {errors.end && (
            <S.ErrorMessage>
              Favor preencher o endereço corretamente.
            </S.ErrorMessage>
          )}
          </S.Label>
        </S.Fieldset>

        <S.Button type="submit">Enviar</S.Button>
      </S.Form>
    </S.Container>
  );
}

export default Cadastro;
