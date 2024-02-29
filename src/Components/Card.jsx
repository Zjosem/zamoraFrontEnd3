const Card = ({ name, dog }) => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Gracias por enviar tu perro favorito</h2>
        <h4 className="card__title">Nombre: {name}</h4>
        <p className="card__title">Perro Favorito: {dog}</p>

        <button className="card__btn" onClick={handleClick}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default Card;
