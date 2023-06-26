
// import { Fragment } from "react";
function ListGroup() {
  let items = ['NewYork', 'San Fansisco', 'Tokyo', 'London', 'paris',]
  items = []
  // const message = items.length === 0 ? <p> No item found</p> : null >>تابع بنویسیم
  {/* const getmessage() = () => {
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
  return (
    <>
      <h1> List </h1>
      {/* {getmessage()} */}
  {/* {message} */ }
  { items.length === 0 ? <p> No item found</p> : null } //we use in in a constant for clean code 
  { items.length === 0 && <p> No item found</p> }
  <ul className="list-group">
    {items.map(item => <li key={item}>{item}</li>)}
    {/* with braces we can render anything dynamically */}
    {/* key prop : react keeps track of item: */}
    {/* in jsx : just html and react - to render data dynamically and use wrap in braces by using */}
    {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
  </ul>
    </>
  )
}
export default ListGroup;