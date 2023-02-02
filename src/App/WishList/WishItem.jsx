import React from 'react';
import PropTypes from 'prop-types';

function WishItem({
  text, id, done, onDoneChange,
}) {
  return (
    <li
      className={`wish-list__item
            ${done ? 'wish-list__item--done' : ''}`}
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
