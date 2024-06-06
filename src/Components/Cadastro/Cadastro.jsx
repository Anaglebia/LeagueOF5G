import {api} from '../../lib/axios';
import { useForm } from "react-hook-form";
import * as S from './CadastroStyled';
import { useNavigate } from 'react-router-dom';



function Cadastro() {


  const {
    register,
    handleSubmit, reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  function Create(data){
    api.post('/cadastro', data)
    navigate('/Dashboard')
    reset()
  }

  return (
    <>
     <h1>Cadastro</h1>
     <S.Div>
     <S.Form onSubmit={handleSubmit(Create)}>
    <div>
    <S.Label>Primeiro nome </S.Label>
      <S.Input className="w3-input" type="text" id="nome" name="nome" {...register('nome')} />
     {errors.nome && <p>Favor preencher o nome .</p>}

     <S.Label>Ultimo nome <S.Input className="w3-input" type="text" id="Unome" name="Unome" {...register('Unome')} /></S.Label>
     {errors.unome && <p>Favor preencher o sobrenome .</p>}

    </div>
      
    <S.Label>Email <S.Input className="w3-input" type="email" id="email" name="email" {...register('email')}/></S.Label>
     {errors.unome && <p>O campo email e obrigatorio .</p>}

     <S.Label>Telefone <S.Input className="w3-input" type="tel" id="phone" name="phone" {...register('phone')}/></S.Label>
     {errors.unome && <p>O campo telefone e obrigatorio .</p>}
     
     <S.Label>Data de Nascimento<S.Input className="w3-input" type="date" id="dateNasc" name="dateNasc"{...register('dateNasc')} /></S.Label>
     {errors.unome && <p>Favor a data de nascimento corretamente .</p>}
     
     <S.Label>Senha<S.Input className="w3-input" type="password" id="password" name="password" {...register('password')}/></S.Label>
     
        <S.Button>Enviar</S.Button>
     </S.Form>
    </S.Div>
    </>
  )
}

export default Cadastro