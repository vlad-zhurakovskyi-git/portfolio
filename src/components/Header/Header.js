import React from 'react';
import Select from "../Select/Select";

const Header = ()  =>{
  const options = ['Portfolio 1 - Dividends & Income', 'item2', 'item3', 'item4', 'item5'];

  return (
    <header className="header">
      <Select options={options}/>
    </header>
  );
}

export default Header;
