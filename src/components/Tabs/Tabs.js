import React, { useState, useEffect } from 'react';
import Icon from "../Icon/Icon";

const contentComponent = (items, activeTabId) => {
  const Component = items[activeTabId].component;

  return <Component />;
};

const Tabs = ({ items, activeId }) => {
  const [activeTabId, setActiveTab] = useState(activeId);
  const [position, setPosition] = useState(0);
  const containerRef = React.createRef();

  useEffect(() => {
    setActiveTab(activeId);
  }, [activeId]);

  return (
    <>
      <div className="tabs">
        <div ref={containerRef} className="tabs__inner">
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
        </div>

        <div className="tabs-nav">
          <button
            onClick={() => {
              containerRef.current.scrollLeft -= 150;
              setPosition(containerRef.current.scrollLeft);
            }}
            className={`tabs-nav__btn ${position === 0 ? 'disabled' : '' }`}
            type="button"
          >
            <Icon name="caret-left"/>
          </button>

          <button
            onClick={() => {
              containerRef.current.scrollLeft += 150;
              setPosition(containerRef.current.scrollLeft);
            }}
            className={`tabs-nav__btn ${position === 369 ? 'disabled' : '' }`}
            type="button"
          >
            <Icon name="caret-right"/>
          </button>
        </div>
      </div>

      {contentComponent(items, activeTabId)}
    </>
  );
};

export default Tabs;
