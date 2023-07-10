import { useState } from "react";

function Home() {
  const [drink, setdrink] = useState({ title: "Americano", price: 10 });

  const handleclick = () => {};

  return <button onclick={handleclick}> Click Me</button>;
}
export default Home;
