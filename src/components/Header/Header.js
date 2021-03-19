import React from 'react';
import Select from "../Select/Select";
import Button from "../Button/Button";

const Header = ()  =>{
  const options = [
    'Portfolio 1 - Dividends & Income',
    'Portfolio 2 - Dividends & Income',
    'Portfolio 3 - Dividends & Income',
    'Portfolio 4 - Dividends & Income',
    'Portfolio 5 - Dividends & Income',
  ];

  return (
    <header className="header">
      <Select options={options}/>

      <div className="header-controls">
        <div className="header-controls__col">
          <Button type="secondary" onClick={() => alert('Add Symbol')} text="+ Add Symbol" />
          <Button type="primary" onClick={() => alert('Edit Portfolio')} text="Edit Portfolio" icon="edit" />
        </div>

        <div className="header-controls__col">
          <Button type="primary" onClick={() => alert('Excel')} icon="excel" />
          <Button type="primary" onClick={() => alert('Print')} icon="print" />
        </div>

        <div className="header-controls__col">
          <Button type="primary" onClick={() => alert('View')} text="View Headlines" icon="view" />
        </div>
      </div>
    </header>
  );
}

export default Header;
