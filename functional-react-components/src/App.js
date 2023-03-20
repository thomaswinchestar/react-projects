import React, { createRef, useState } from "react";

// const Item = props => {
//   return (
//     <li>
//       {props.name},
//       ${props.price}
//     </li>
//   )
// }

const Item = ({ name, price }) => (
  <li>
    {name}, ${price}
  </li>
);

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Apple", price: 0.99 },
    { id: 2, name: "Orange", price: 0.89 },
  ]);

  const nameRef = createRef();
  const priceRef = createRef();

  const add = () => {
    const id = items.length + 1;
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    setItems([...items, { id, name, price }]);
  };
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item key={item.id} name={item.name} price={item.price} />
        ))}
      </ul>
      <input type="text" ref={nameRef} />
      <br />
      <input type="text" ref={priceRef} />
      <br />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default App;
