export default function Nav(){
    return (
        <div>
        <ul className="navBtns">
        <li><Link to="">Kategori_1</Link></li>
        <li><Link to="">Kategori_2</Link></li>
        <li><Link to="">Kategori_3</Link></li>
        <li><Link to="">Kategori_4</Link></li>
        <li><Link to="">Kategori_5</Link></li>
        </ul>
        </div>
        
        
        
        )
}

export default Nav;
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
