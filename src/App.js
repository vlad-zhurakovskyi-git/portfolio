import React from 'react';
import './assets/styles/main.scss';
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import Table from "./components/Table/Table";

const tableData = [
  {
    symbol: 'Afk',
    price: 19,
    change: '-0.14',
    changePercent: '-0.71%',
    alerts: true,
    volume: '1911',
    avgVol: '11.42K',
    prevClose: '19.65',
    quant: '1.32',
    saAuthors: '2.32',
    sellSide: 'NR',
    dayRange: ['19.65', '19.69', '5'],
    wkRange: ['19.65', '19.69', '80']
  }, {
    symbol: 'BRK.A',
    price: 335,
    change: '1584.00',
    changePercent: '0.47%',
    alerts: false,
    volume: '43',
    avgVol: '-',
    prevClose: '-',
    quant: '3.00',
    saAuthors: '5.00',
    sellSide: '4.00',
    dayRange: ['42.00', '42.05', '20'],
    wkRange: ['229.04', '230.98','30']
  }, {
    symbol: 'CGW',
    price: 122,
    change: '1584.00',
    changePercent: '0.47%',
    alerts: false,
    volume: '43',
    avgVol: '-',
    prevClose: '-',
    quant: 'NR',
    saAuthors: '3.00',
    sellSide: '2.00',
    dayRange: ['42.00', '42.05', '40'],
    wkRange: ['229.04', '230.98', '60']
  }
];

const App = ()  =>{

  const tabsItems = [
    {
      name: 'Summary',
      component: () => <div className="page__inner">
        <Table tableData={tableData} />
      </div>
    },
    {
      name: 'Holdings',
      component: () => 'test',
    },
    {
      name: 'item3',
      component: () => 'test',
    },
    {
      name: 'item3',
      component: () => 'test',
    },
    {
      name: 'item4',
      component: () => 'test',
    },
    {
      name: 'item5',
      component: () => 'test',
    },
    {
      name: 'item6',
      component: () => 'test',
    },
    {
      name: 'item7',
      component: () => 'test',
    },
    {
      name: 'item8',
      component: () => 'test',
    },
    {
      name: 'item9',
      component: () => 'test',
    },
    {
      name: 'item10',
      component: () => 'test',
    },
    {
      name: 'item11',
      component: () => 'test',
    },
    {
      name: 'item12',
      component: () => 'test',
    },
    {
      name: 'item13',
      component: () => 'test',
    },
    {
      name: 'item14',
      component: () => 'test',
    },
    {
      name: 'item15',
      component: () => 'test',
    },
    {
      name: 'item16',
      component: () => 'test',
    },
    {
      name: 'item17',
      component: () => 'test',
    },
    {
      name: 'item18',
      component: () => 'test',
    },
    {
      name: 'item19',
      component: () => 'test',
    },
    {
      name: 'item20',
      component: () => 'test',
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Tabs items={tabsItems} activeId={0} />
      </div>
    </div>
  );
}

export default App;
