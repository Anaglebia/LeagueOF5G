import { api } from "../../lib/axios";
import { useForm } from "react-hook-form";
import * as S from "./CadastroStyled";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  function Create(data) {
    api.post("/cadastro", data);
    navigate("/Dashboard");
    reset();
  }

  return (
    <S.Container>
      <S.Title>Cadastro</S.Title>
      <S.Form onSubmit={handleSubmit(Create)}>
        <S.Fieldset>
          <S.Label>
            Primeiro nome
            <S.Input type="text" id="nome" name="nome" {...register("nome", { required: true })} />
          </S.Label>
          {errors.nome && <S.ErrorMessage>Favor preencher o nome.</S.ErrorMessage>}

          <S.Label>
            Sobrenome
            <S.Input type="text" id="Unome" name="Unome" {...register("Unome", { required: true })} />
          </S.Label>
          {errors.Unome && <S.ErrorMessage>Favor preencher o sobrenome.</S.ErrorMessage>}
        </S.Fieldset>

        <S.Fieldset>
          <S.Label>
            Email
            <S.Input type="email" id="email" name="email" {...register("email", { required: true })} />
          </S.Label>
          {errors.email && <S.ErrorMessage>O campo email é obrigatório.</S.ErrorMessage>}

          <S.Label>
            Telefone
            <S.Input type="tel" id="phone" name="phone" {...register("phone", { required: true })} />
          </S.Label>
          {errors.phone && <S.ErrorMessage>O campo telefone é obrigatório.</S.ErrorMessage>}
        </S.Fieldset>

        <S.Fieldset>
          <S.Label>
            Data de Nascimento
            <S.Input type="date" id="dateNasc" name="dateNasc" {...register("dateNasc", { required: true })} />
          </S.Label>
          {errors.dateNasc && <S.ErrorMessage>Favor preencher a data de nascimento corretamente.</S.ErrorMessage>}

          <S.Label>
            Endereço
            <S.Input type="text" id="end" name="end" {...register("end")} />
          </S.Label>
        </S.Fieldset>

        <S.Button type="submit">Enviar</S.Button>
      </S.Form>
    </S.Container>
  );
}

export default Cadastro;
