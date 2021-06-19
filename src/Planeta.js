function Planeta(props) {
  return (
    <div  className="card">
      <img src={props.imagen} alt={props.nombre} />
      <div key={props.index} className="container">
        <h1>{props.nombre}</h1>
        <p>{props.color}</p>
        <p>{props.temperatura}ºC</p>
      </div>
      <button
        onClick={() => {
          props.borrar(props.key); //aqui esta la funcion que nos hemos enviado desde app.js de borrar
        }}
      >
        Borrar último
      </button>
    </div>
  );
}

export default Planeta;
