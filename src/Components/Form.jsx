import { useState } from 'react';
import Card from './Card';

const Form = () => {
  const [formdog, setFormdog] = useState({
    name: '',
    dog: '',
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSumbit = e => {
    e.preventDefault();

    if (formdog.name.trim().length >= 3 && formdog.dog.length >= 6) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <h1 className="title">Tu perro favorito</h1>
      {show ? (
        <div className="">
          <Card name={formdog.name} dog={formdog.dog} />
        </div>
      ) : (
        <div className="container">
          <form onSubmit={handleSumbit} className="form">
            <h2 className="form__title">Ingresa tu perro favorito</h2>

            <label className="form__label" htmlFor="name">
              Nombre
            </label>
            <input
              className="form__input"
              type="text"
              placeholder="Ingresa tu nombre"
              id="name"
              value={formdog.name}
              onChange={e => setFormdog({ ...formdog, name: e.target.value })}
            />

            <label className="form__label" htmlFor="dog">
              Perro Favorito
            </label>
            <input
              placeholder="Ingresa tu perro favorito"
              className="form__input"
              type="text"
              id="dog"
              value={formdog.dog}
              onChange={e => setFormdog({ ...formdog, dog: e.target.value })}
            />

            {error && (
              <p className="form__error">
                Por favor chequea que la información sea correcta
              </p>
            )}
            <button className="form__button" type="submit">
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;