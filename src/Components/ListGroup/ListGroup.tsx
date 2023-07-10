// import { Fragment } from "react";

import { useState } from "react";
import styles from "./ListGroup.module.css";

//import { MouseEvent } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  let selectedindex = -1;
  // const hendleClick = (event: MouseEvent) => console.log(event);
  // let selecteditem = 0;
  //const arr = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //items = []
  // const message = items.length === 0 ? <p> No item found</p> : null >>تابع بنویسیم
  {
    /* const getmessage() = () => {
    return items.length === 0 ? <p> No item found</p> 
  }/*}

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1> List </h1>
  //       <p> No item found </p>
  //     </> )

  // arrow function : take item and convert it to a different type
  // the method array.map >> convert an array to an item of different type
  
  
      
      // {getmessage()} 
  {/* {message} */
  }
  return (
    <>
      <h1> {heading} </h1>
      {items.length === 0 ? <p> No item found</p> : null}
      {/* //we use in in a constant for clean code */}
      {items.length === 0 && <p> No item found</p>}
      <ul className={[styles.listGroup, styles.listGroup].join("")}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
        {/* { with braces we can render anything dynamically }
        { key prop : react keeps track of item: }
        {in jsx : just html and react - to render data dynamically and use wrap in braces by using }
        { <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> } */}
      </ul>
    </>
  );
}
export default ListGroup;
