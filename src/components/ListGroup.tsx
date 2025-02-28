import triviaImage from "/src/assets/trivia.jpg";

import { useState } from "react";

interface Props {
  items: string[]; // List of options
  heading: string; // Heading for the trivia
  question: string; // Current trivia question
  onSelectItem: (item: string) => void; // Function to handle selected answer
  onNextQuestion: () => void; // Function to handle next question
  onGoBack: () => void; // Function to handle going back
}

function ListGroup({
  items,
  heading,
  question,
  onSelectItem,
  onNextQuestion,
  onGoBack,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="container-fluid col-md-4">
        <div className="card container-sm">
          <img
            src={triviaImage}
            className="image-responsive card-img-top p-3 mx-auto"
            alt="Trivia"
            style={{ display: "block", width: "75%", height: "auto" }}
          />
          <div className="card-body mx-auto">
            <h2 className="card-text">{heading}</h2>
            <h3 className="card-text">{question}</h3>
          </div>
          <ul className="list-group list-group-flush">
            {items.map((item, index) => (
              <li
                key={item}
                className={`list-group-item ${
                  selectedIndex === index ? "bg-primary text-white" : ""
                }`}
                onClick={() => {
                  setSelectedIndex(index);
                  onSelectItem(item);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="card-body">
            <a href="#" className="card-link" onClick={onGoBack}>
              Go Back
            </a>
            <a href="#" className="card-link" onClick={onNextQuestion}>
              Next Question
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListGroup;

/*<>
      <h2 className="container d-flex justify-content-center align-items-center">
        {heading}
      </h2>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group container col-md-6 mx-auto">
        {items.map((item, index) => (
          <li
            key={item}
            className={`list-group-item ${
              selectedIndex === index ? "transparent" : "bg-primary"
            }`} // Apply bg-success when selected
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li> //use curly braces to add item. and wrap entire expression in curly braces.
        ))}
      </ul>
    </>*/
