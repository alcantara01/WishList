import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

function WishList({ wishes, onWishChange }) {
  return (
    <ul className="wish-list">
      {wishes.map(({ text, id, done }, i) => (
        <WishItem
          key={`wish${id}`}
          text={text}
          id={id}
          done={done}
          onDoneChange={(value) => {
            // copio wishes en un array nuevo te,poral
            const tempWishes = [...wishes];
            tempWishes[i].done = value;
            onWishChange(tempWishes);
          }}
        />
      ))}
    </ul>
  );
}
WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    done: PropTypes.bool,
    text: PropTypes.string,
  })),
  onWishChange: PropTypes.func,
};

WishList.defaultProps = {
  wishes: [],
  onWishChange: () => { },
};

export default WishList;
