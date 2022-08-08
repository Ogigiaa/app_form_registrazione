import {React, useState} from 'react';
import { useForm } from "react-hook-form";


function FormRegistrazione(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  let [salvato, setSalvato] = useState(false)

  const onSubmit = (data) => {
    let value = JSON.stringify(data)
    fetch(`http://localhost:5050/redis/set/${data.email}/${value}`)
      .then(r => r.text()).then( (t) => {
        console.log(t)
        if(t=='Ok'){
          setSalvato(true)
        }
      })
    //console.log(data)
  };
  return (
    <div className="App">
        
        <button onClick={()=>{
            props.setUi('elenco_registrati')
        }}>Elenco registrati</button>

      <h1>Registrazione</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

          <label>Nome</label>
          <input placeholder="Nome" {...register("nome", {required: true})} />
          {errors.nome && <span>Campo obbligatorio</span>}

          <label>Cognome</label>
          <input placeholder="cognome" {...register("cognome")} />

          <label>E-mail</label>
          <input placeholder="email" {...register("email")} />
          
          <label>Data di nascita</label>
          <input type='date'  {...register("dob")} />
          
          <label style={{display:'flex', alignItems:'center'}}>
            <input type='checkbox' {...register("provacy")} />
            Condizioni Privacy
          </label>

          <div style={{display:'flex', alignItems:'center'}}>  
            <input type="radio" name="maschio" id="maschio"  value="maschio" 
                {...register("sesso")} />
            <label htmlFor='maschio'>Maschio</label>
            <input type="radio" name="femmina" id="femmina"  value="femmina" 
                {...register("sesso")} />
            <label htmlFor='femmina'>Femmina</label>
          </div>


          <label>PIN Numerico</label>
          <input type='number' {...register("pin")} />

          <br />
          {!salvato && <input type="submit" /> }
          {salvato  && <div>I dati sono stati salvati</div>}
      </form>
    </div>
  );
}

export default FormRegistrazione;
