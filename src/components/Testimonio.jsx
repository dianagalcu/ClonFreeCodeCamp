function Testimonio(props) {
  return (
    <div className="container-testimonio">
      <img
        className="imagen-testimonio"
        src={(`../assets/imagenes/testimonio-${props.imagen}.png`)}
        alt="imagen Emma"
      />
      <div className="container-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}<strong>{props.select}</strong>"</p>
      </div>
    </div>
  );
}

export default Testimonio
