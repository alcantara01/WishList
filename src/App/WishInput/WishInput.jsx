import React, { useState } from 'react';
import PropTypes from 'prop-types';

function WishInput({ onNewWish }) {
  // hook del estado, nuevo deseo
  const [newWish, setNewWish] = useState('');
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">
        New Wish
      </legend>
      <input
        className="wish-input__field"
        type="text"
        placeholder="Write a new wish"
        value={newWish}
        onChange={(e) => setNewWish(e.target.value)}
        onKeyUp={(e) => {
          // Si se ha pulsado intro y el nuevo deseeo NO es vacío
          if (e.key === 'Enter' && newWish.length) {
            // llamamos a la funcion callback pasándole el nuevo ovjeto deseo
            onNewWish({ text: newWish, done: false, id: new Date().getTime() });
            // reiniciamos el nuevo deseo (y el value del input)
            setNewWish('');
          }
        }}
      />
    </fieldset>
  );
}
// Definimos los tipos de datos de los props
WishInput.propTypes = {
  onNewWish: PropTypes.func,
};
// valor por defecto de l aaprop si no le pasas nada
WishInput.defaultProps = {
  onNewWish: () => { },
};

export default WishInput;
