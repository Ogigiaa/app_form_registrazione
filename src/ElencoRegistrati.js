import {React, useState, useEffect} from 'react';


function ElencoRegistrati(props) {
    let [elenco, setElenco] = useState([])
    useEffect(()=>{
      fetch('http://localhost:5050/redis/keys')
        .then( r => r.text())  
        .then( t => JSON.parse(t) )
        .then( j => setElenco(j))
        
    },[])
  return (
    <div style={{paddingLeft:'20px'}}>
        
        <button onClick={()=>{
            props.setUi('form_registrazione')
        }}>Modulo registrazione</button>

        <h1>Elenco Registrati</h1>

        <Elenco elenco={elenco} />
    </div>
  )
}

function Elenco(props){
    let out = []
    props.elenco.map( (i) =>{
        out.push(<h3>{i}</h3>)
    })
    return out
}

export default ElencoRegistrati;