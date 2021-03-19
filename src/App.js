import './assets/styles/main.scss';
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import Table from "./components/Table/Table";


const tabsItems = [
  {
    name: 'Summary',
    component: () => <Table test={1} />,
  },
  {
    name: 'Holdings',
    component: () => <Table test={2} />,
  }
];

const App = ()  =>{
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
