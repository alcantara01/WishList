import React from 'react';
import PropTypes from 'prop-types';

function Header({ label }) {
  return (
    <h1>{label}</h1>
  );
}

Header.propTypes = {
  label: PropTypes.string,
};

Header.defaultProps = {
  label: 'My wishlist',
};

export default Header;
