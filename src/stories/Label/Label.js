import React from 'react';
import PropTypes from 'prop-types';
import './label.css';

export const Label = ({ type, size, label, ...props }) => {
  return (
    <div
      className={`
        label
        ${type}
        ${size}
      `}
      {...props}
    >
      {label}
    </div>
  );
};

Label.propTypes = {
  type: PropTypes.oneOf(['light-green', 'dark-green', 'light-red', 'dark-red', 'yellow', 'grey']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
};

Label.defaultProps = {
  type: 'grey',
  size: 'small',
};
