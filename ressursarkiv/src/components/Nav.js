export const Navbarr = () => {
    return (
        <div>
        <Link to=""> HTML </Link>
        <Link to=""> CSS </Link>
        <Link to=""> Javascript </Link>
        <Link to=""> React </Link>
        <Link to=""> Sanity </Link>
        </div>
        
        
        
        );
};


/* write by Giang
export default function NavBar(props) {
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
 */
