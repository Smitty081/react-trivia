// src/components/QuestionCard.tsx
import { Card, Button as BootstrapButton } from "react-bootstrap";
import triviaImage from "/src/assets/trivia.jpg"; // Your trivia image path

interface QuestionCardProps {
  question: string;
  options: string[];
  onAnswer: (selectedAnswer: string) => void;
  answered: boolean;
}

const QuestionCard = ({ question, options, onAnswer }: QuestionCardProps) => {
  return (
    <Card className="mb-4">
      <img
        src={triviaImage}
        alt="Trivia"
        className="card-img-top p-3 mx-auto"
        style={{ width: "75%", height: "auto" }} //Image for card.
      />
      <Card.Body>
        <Card.Title>{question}</Card.Title>
        <div className="d-flex flex-column">
          {options.map((option, index) => (
            <BootstrapButton
              key={index}
              variant="outline-primary"
              className="mb-2"
              onClick={() => onAnswer(option)}
            >
              {option}
            </BootstrapButton>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
