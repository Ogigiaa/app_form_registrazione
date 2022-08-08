import {React, useState} from 'react';
import FormRegistrazione from './FormRegistrazione';
import ElencoRegistrati from './ElencoRegistrati';
import { set } from 'react-hook-form';

function App() {
  let [ui, setUi] = useState('elenco_registrati')

  if(ui == 'form_registrazione') return ( <FormRegistrazione setUi={setUi} />) 
  if(ui == 'elenco_registrati') return ( <ElencoRegistrati setUi={setUi} />) 


}

export default App;

