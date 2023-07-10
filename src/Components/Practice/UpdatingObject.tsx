import { useState } from "react";
import { produce } from "immer";

function UpdatingObject() {
  const [drink, setdrink] = useState({ title: "Americano", price: 10 });
  const tagsValue = ["happy", "cheerful"];
  const [tags, setTags] = useState(tagsValue);
  const [bugs, setBugs] = useState([
    { id: 1, title: "bugs1", fixed: false },
    { id: 2, title: "bugs2", fixed: false },
  ]);
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "LA",
      zipcode: 33137,
    },
  });
  const [game, setGame] = useState({
    id: 0,
    player: {
      name: "Jack",
    },
  });
  // Update Name :
  const handleGame = () => {
    setGame({ ...game, player: { ...game.player, name: "John" } });
  };
  const [pizza, setPizza] = useState({
    name: "spicy",
    toppings: ["mushroom"],
  });
  const handlePizza = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
    // pizza.toppings.push('cheese')
  };

  const [car, setCar] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product1", quantity: 10 },
      { id: 2, title: "product2", quantity: 20 },
    ],
  });
  const handleCar = () => {
    setCar({
      ...car,
      items: car.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  // updating objects
  const handleClick = () => {
    setdrink({ ...drink, price: 5 });
  };
  // const newdrink = {
  //   ...drink,
  //   price: 5,
  // };
  // setdrink(newdrink);

  // updating nested objects
  const handleNestedClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: 88950 },
    });
  };
  // *** Updating an Array :
  //1. Add object to Array
  //tag.push()  No
  const addArrayObject = () => {
    setTags([...tags, "exciting"]);
  };
  // 2.Remove ('happy') from Array
  const removeArrayObject = () => {
    setTags(tags.filter((tag) => tag !== "happy"));
  };

  //3.Update an object of Array
  const updateArrayObject = () => {
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };
  //.4.Reset
  const resetArray = () => {
    setTags(tagsValue);
  };
  //5. Remove
  const removeArrayItem = (tag: string) => {
    setTags(tags.filter((id) => id !== tag));
  };
  // 6. Updating an Array of Objects
  /*   const handleBugClick = () => {
  setbugs(bugs.map((bug) => (bug.id === 1 ? { ...bugs, fixed: true } : bug)));
  }; */
  // 7. Updating an Array of Objects using Immer
  const handleBugClickImmer = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {drink.price} <br />
      <button onClick={handleClick}> Click to update object</button> <br />
      <br />
      {customer.address.zipcode} <br />
      <button onClick={handleNestedClick}>Click to update nested object</button>
      <br />
      <ul>
        {tags.map((tag) => (
          <li>
            {tag}
            <button onClick={() => removeArrayItem(tag)}>Remove</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={addArrayObject}> Click to Add Array Object </button>
      <br />
      <button onClick={resetArray}> Click to Reset </button> <br />
      <button onClick={removeArrayObject}> Click to Remove Array Object</button>
      <br />
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title}
          {bug.fixed ? "fixed" : "New"}
        </p>
      ))}
      <br />
      <button onClick={handleBugClickImmer}>
        {" "}
        Click to Remove Array Object
      </button>
    </div>
  );
}
export default UpdatingObject;
