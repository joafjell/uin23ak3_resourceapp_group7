
export default function Nav(title,ingress) {
 return(
  <article className="recipe-card">
            <h3>{title}</h3>
            <p>{ingress}</p>
        </article>
    )
 
//   // render tab title
//   const renderTabTitle = () => {
//     const titleArr = props.resources.reduce((acc, current) => {
//       if (!acc.includes(current.category)) {
//         acc.push(current.category);
//       }
//       return acc;
//     }, []);

//     return titleArr.map((titleItem, index) => {
//       return (
//         <div
//           key={index}
//           onClick={() => {
//             props.setCurrentTitle(titleItem);
//           }}
//           className={`tabs ${
//             props.currentTitle.toUpperCase() === titleItem.toUpperCase()
//               ? "active"
//               : ""
//           }`}
//         >
//           {titleItem}
//         </div>
//       );
//     });
//   };
//   return <section id="title">{renderTabTitle()}</section>;
 }
 
