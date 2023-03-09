//import resources from Ressurser.js
import { Link } from 'react-router-dom';
//import Information from './Information';
import resources from './Ressurser';

/*export default function Nav(){

}*/
  
  /*return (
        <div>
        <Link to="/"> Home </Link>
        <Link to="/html"> HTML </Link>
        <Link to="/css"> CSS </Link>
        <Link to="/javascript"> Javascript </Link>
        <Link to="/react"> React </Link>
        <Link to="/sanity"> Sanity </Link>
        </div>
        
        
        
        );*/


//write by Giang
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

