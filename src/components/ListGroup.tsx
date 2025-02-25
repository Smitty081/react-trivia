//import { Fragment } from "react/jsx-runtime"; instead of a div or use empty angle brackets.
//import { MouseEvent } from "react";
// object {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

import { useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event Handler, handles events.
  //const handleClick = (event: MouseEvent) => console.log(event);

  /*const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null; //function to clean up the message under the h1.
  };*/

  // props are immutable and state is mutable.

  return (
    <>
      <h1 className="container d-flex justify-content-center align-items-center">
        {heading}
      </h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group container col-md-6 mx-auto">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li> //use curly braces to add item. and wrap entire expression in curly braces.
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
