import { useState } from "react";

import "./App.css";
import sistemaSolar from "./sistema";

import Planeta from "./Planeta";

function App() {
  let [sistema, setSistema] = useState(sistemaSolar);

  function borrar(i) {
    console.log(i);
    let copia = [...sistema];// esto crea una copia del array y luego modificarlo con el splice
    copia.splice(i, 1);//a copia le quita el ultimo 
    setSistema(copia); 
  }

  const mostrarPlanetas = sistema.map((planeta, index) => {
    return (
      <Planeta
        key={index} //recuerda que no puedes enviar key porque es una palabra reservada
        nombre={planeta.nombre}
        color={planeta.color}
        temperatura={planeta.temperatura}
        imagen={planeta.imagen}
        borrar={borrar}
      />
    );
  });

  return (
    <>
      <div className="catalogo">{mostrarPlanetas}</div>
    </>
  );
}

export default App;
