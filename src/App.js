import React from 'react';
import './App.css';
import Principal from './componente/Principal';
//import ListaULM from './componente/SeleccionQuiz';

function App() {
  useEffect(()=>{
    console.log(process.env)
  },[])
  
  // 2. Crear un useEfect que se encargue de llamar el metodo getQuestionTopics y guarde en localstorag  
  return (
    <Principal /> //3. pasarle por Prop esa informacion cargada, 
  );
}

export default App;