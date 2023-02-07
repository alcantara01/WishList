import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function WishItem({
  text, id, done, onDoneChange,
}) {
  const [age, setAge] = useState(0);
  useEffect(() => {
    let ageInterval;
    if (done) {
      // Si el deseo está cumplido(tachado) dejo de contar y
      // limpiamos el intervalo(se le quita el color)
      setAge(0);
      clearInterval(ageInterval); // Liberar el intervalo (10seg/20seg)
    } else {
      // Si el deseo no está completado creo un intervalo que incrementa
      // en 1 la edad del deseo cada 1000 ms
      ageInterval = setInterval(() => {
        setAge((a) => a + 1); // Incrementamos los segs
      }, 1000);
    }
    // La funcion que devuelve return se ejecuta solo cuando
    // solo cuadno se desmonta el componente
    return () => clearInterval(ageInterval); // Limpiar el intervalo otra vez
  }, [done]); // done es la que "vigilamos"
  return (
    <li
      className={classNames('wish-list__item', {
        'wish-list__item--done': done, // Si está hecho -> tachado
        'wish-list__item--warn': age >= 10 && age < 20, // Entre 10 y 20 se pone naanja (warning)
        'wish-list__item--danger': age >= 20, // Igual o más de 20 se pone rojo (danger)
      })}
    >
      <input
        type="checkbox"
        id={`wish${id}`}
        checked={done}
        onChange={(e) => onDoneChange(e.target.checked)}
      />
      <label
        className="wish-input__label"
        htmlFor={`wish${id}`}
      >
        {text}
      </label>
    </li>
  );
}

WishItem.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.number.isRequired,
  onDoneChange: PropTypes.func.isRequired,
};

WishItem.defaultProps = {
  done: false,
  text: '',
  // onDoneChange: () => { },
};

export default WishItem;
