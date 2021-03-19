import React, { useState } from 'react';
import Icon from "../Icon/Icon";

const Checkbox = (props) => {
  const { checkboxId, checked } = props;
  const [isChecked, setChecked] = useState(checked);

  return (
    <div className={`checkbox ${isChecked ? 'active' : ''}`}>
      <input
        id={checkboxId}
        className="checkbox__input"
        type="checkbox"
        onChange={() => setChecked(!isChecked)}
        checked={checked}
      />
      <label className="checkbox__view" htmlFor={checkboxId}>
        <Icon name="check"/>
      </label>
    </div>
  );
};

export default Checkbox;
