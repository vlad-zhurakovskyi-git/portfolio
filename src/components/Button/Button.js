import React from 'react';
import Icon from "../Icon/Icon";

const Button = ({ type, text, icon, onClick }) => {
  const handleClick = (e) => {
    onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={`btn ${type ? type : ''} ${!text ? 'only-icon' : ''}`}
      type="button"
    >
      {icon && <Icon name={icon} />}
      {text && <span className="btn__text">{text}</span>}
    </button>
  );
};

export default Button;
