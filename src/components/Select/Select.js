import React from 'react';
import Icon from "../Icon/Icon";

const Select = ({ options })  =>{
  return (
    <div className="select">
      <select className="select__control" name="select">
        {options.map((item) => (
          <option key={item} name={item} value={item}>{item}</option>
        ))}
      </select>
      <Icon name="caret-bottom"/>
    </div>
  );
}

export default Select;
