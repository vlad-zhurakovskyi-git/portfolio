import React  from 'react';
import Checkbox from "../Checkbox/Checkbox";
import { Label } from "../../stories/Label/Label";

const defineColor = (el) => {
  const getSymbol = el.indexOf('-');

  if(getSymbol) return 'green';
  return 'red'
};

const defineLabelType = (el) => {
  const getInt = parseInt(el);

  if(el === 'NR') return 'grey';
  if (getInt === 1) return 'dark-red';
  if (getInt === 2) return 'light-red';
  if (getInt === 3) return 'yellow';
  if (getInt === 4) return 'light-green';
  if (getInt === 5) return 'dark-green';
};

const Table = ({ tableData }) => {
  return (
      <table className="table">
        <thead className="table__thead">
          <tr className="table__tr">
            <th className="table__th symbol">Symbol</th>
            <th className="table__th price">Price</th>
            <th className="table__th change">Change</th>
            <th className="table__th change-percent">Change %</th>
            <th className="table__th alerts">Alerts</th>
            <th className="table__th volume">Volume</th>
            <th className="table__th avg">Avg. Vol</th>
            <th className="table__th prev">Prev Close</th>
            <th className="table__th quant">Quant</th>
            <th className="table__th sa">SA Authors </th>
            <th className="table__th sell">Sell Side</th>
            <th className="table__th day">Day Range</th>
            <th className="table__th wk">52 Wk Range</th>
          </tr>
        </thead>

        <tbody className="table__tbody">
          {tableData.map(({ symbol, price, change, changePercent, alerts, volume, avgVol, prevClose, quant, saAuthors, sellSide, dayRange, wkRange }) => (
            <tr className="table__tr">
              <td className="table__td symbol">{symbol}</td>
              <td className="table__td price number">{price}</td>
              <td className={`table__td change number ${defineColor(change)}`}>{change}</td>
              <td className={`table__td change-percent number ${defineColor(change)}`}>{changePercent}</td>
              <td className="table__td alerts">
                <Checkbox checked={alerts} checkboxId={symbol}/>
              </td>
              <td className="table__td volume number">{volume}</td>
              <td className="table__td avg number">{avgVol}</td>
              <td className="table__td prev number">{prevClose}</td>
              <td className="table__td quant">
                <Label type={defineLabelType(quant)} label={quant}/>
              </td>
              <td className="table__td sa">
                <Label type={defineLabelType(saAuthors)} label={saAuthors}/>
              </td>
              <td className="table__td sell">
                <Label type={defineLabelType(sellSide)} label={sellSide}/>
              </td>
              <td className="table__td day">{dayRange[0]}</td>
              <td className="table__td wk">{wkRange[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Table;
