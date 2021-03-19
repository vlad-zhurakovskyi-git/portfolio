import React, { useState, useEffect } from 'react';
import Icon from "../Icon/Icon";

const contentComponent = (items, activeTabId) => {
  const Component = items[activeTabId].component;

  return <Component />;
};

const Tabs = ({ items, activeId }) => {
  const [activeTabId, setActiveTab] = useState(activeId);

  useEffect(() => {
    setActiveTab(activeId);
  }, [activeId]);

  return (
    <>
      <div className="tabs">
        <div className="tabs__list">
          {items.map(({ name }, index) => (
            <button
              key={name}
              onClick={() => setActiveTab(index)}
              className={`tabs__item ${activeTabId === index ? 'active' : ''}`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="tabs-nav">
          <button className="tabs-nav__btn disabled" type="button">
            <Icon name="caret-left"/>
          </button>

          <button className="tabs-nav__btn" type="button">
            <Icon name="caret-right"/>
          </button>
        </div>
      </div>

      {contentComponent(items, activeTabId)}
    </>
  );
};

export default Tabs;
