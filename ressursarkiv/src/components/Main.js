import React from "react";

export default function Main(props) {
  const { resources, currentTitle } = props;

  // render inhoild hver tabs
  const renderTabDetail = () => {
    const filterArr = resources.filter((item) => {
      return item.category.toUpperCase() === currentTitle.toUpperCase();
    });

    return filterArr.map((item, index) => {
      return (
        <a key={index} target="_blank" href={item.url}>
          {item.title}
        </a>
      );
    });
  };

  return (
    <section id="content">
      <h3>{currentTitle.toUpperCase()}</h3>

      <div id="link">{renderTabDetail()}</div>
    </section>
  );
}