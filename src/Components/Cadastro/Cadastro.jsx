import {api} from '../../lib/axios';
import { useForm } from "react-hook-form";
import * as S from './CadastroStyled';
import { useNavigate } from 'react-router-dom';



function Cadastro() {

  // const {register, handleSubmit, reset} = useForm({ 
  // })
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
      <label>Primeiro nome <input type="text" id="nome" name="nome" {...register('nome')} /></label>
     {errors.nome && <p>Favor preencher o nome .</p>}

     <label>Ultimo nome <input type="text" id="Unome" name="Unome" {...register('Unome')} /></label>
     {errors.unome && <p>Favor preencher o sobrenome .</p>}

      </div>
    <div>
    <label>Email <input type="email" id="email" name="email" {...register('email')}/></label>
     {errors.unome && <p>O campo email e obrigatorio .</p>}

     <label>Telefone <input type="tel" id="phone" name="phone" {...register('phone')}/></label>
     {errors.unome && <p>O campo telefone e obrigatorio .</p>}
     
     <label>Data de Nascimento<input type="date" id="dateNasc" name="dateNasc"{...register('dateNasc')} /></label>
     {errors.unome && <p>Favor a data de nascimento corretamente .</p>}

    </div>
     
     <label>Idade<input type="number" id="idade" name="didade"{...register('idade')} /></label>

     <label>Senha<input type="password" id="password" name="password" {...register('password')}/></label>
     
        <button>Enviar </button>
     </S.Form>
    </S.Div>
    </>
  )
}

export default Cadastro