import ListGroup from "../src/Components/ListGroup";
import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import UpdatingObject from "./Components/Practice/UpdatingObject";
import Practice1 from "./Components/Practice/ExpandableText";

function App() {
  const items = ["New York", "Los Angles", "San Fransisco"];
  const [Alertvisible, setAlertVisiblity] = useState(false);
  {
    /*let items = ["NewYork", "San Fansisco", "Tokyo", "London", "paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };*/
  }
  return (
    <BrowserRouter>
      <div>
        <h2>React Routers</h2>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/UpdatingObject">UpdatingObject</a>
        </li>
        <li>
          <a href="/Practice1">Practice1</a>
        </li>
      </ul>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="UpdatingObject" element={<UpdatingObject />} />
          <Route path="Practice1" element={<Practice1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//   /* <div>
//       <ListGroup
//         heading="Miami"
//         items={items}
//         onSelectItem={() => {}}
//       ></ListGroup> */
// // }
// // {
//   /* {Alertvisible && (
//         <Alert onClose={() => setAlertVisiblity(false)}>My Alert</Alert>
//       )}
//       <Button color="primary" onClick={() => setAlertVisiblity(true)}>
//         {" "}
//         MY Button
//       </Button> */
// }
// {
//   /* <Alert>
//         Hello World
//       </Alert> */
// }
// {
//   /* <ListGroup
//         items={items}
//         heading={"Cities"}
//         onSelectItem={handleSelectItem}
//       ></ListGroup>
//   */
// }
// // import Message from "./Message";
// // function App() {
// //   return <div>
// //     <Message></Message>
// //   </div>
// // }

// // export default App;
