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
}

export default Cadastro;
