import React from "react";

export default function Nav(props) {
  // render tab title
  const renderTabTitle = () => {
    const titleArr = props.resources.reduce((acc, current) => {
      if (!acc.includes(current.category)) {
        acc.push(current.category);
      }
      return acc;
    }, []);

    return titleArr.map((titleItem, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            props.setCurrentTitle(titleItem);
          }}
          className={`tabs ${
            props.currentTitle.toUpperCase() === titleItem.toUpperCase()
              ? "active"
              : ""
          }`}
        >
          {titleItem}
        </div>
      );
    });
  };
  return <section id="title">{renderTabTitle()}</section>;
}

