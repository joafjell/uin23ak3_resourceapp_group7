//import resources from Ressurser.js
import { Link } from 'react-router-dom';
//import Information from './Information';
import resources from './Ressurser';

export default function Nav(){
  const list = []
  resources.forEach(item => list.push(item.category))
  const filterList = [...new Set(list)]
  return (
    <nav>
      <ul className="uin-informasjon">
       {filterList.map((item, index) => (
        <li id={index} key={index}>
          <Link to={`/${item}`}>{item}</Link>
        </li>
        ))}
      </ul>
      </nav> 
      );  
    }
  
  /*return (
        <div>
        <Link to="/"> Home </Link>
        <Link to="/html"> HTML </Link>
        <Link to="/css"> CSS </Link>
        <Link to="/javascript"> Javascript </Link>
        <Link to="/react"> React </Link>
        <Link to="/sanity"> Sanity </Link>
        </div>
        
        
        
        );
};*/


/*export default Nav;
write by Giang
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
