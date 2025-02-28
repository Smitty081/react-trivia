import { useState } from "react";
import Message from "./Message";
import AlertMessage from "./components/AlertMessageCorrect";
import AlertMessageIncorrect from "./components/AlertMessageIncorrect";
import QuestionCard from "./components/QuestionCard";
import { Button as BootstrapButton } from "react-bootstrap";

const App = () => {
  const questions = [
    {
      question: "What country is credited with inventing pizza?",
      options: ["Italy", "France", "Germany", "United States"],
      correctAnswer: "Italy",
    },
    {
      question: "What is the main cheese used in traditional pizza?",
      options: ["Mozzarella", "Cheddar", "Parmesan", "Ricotta"],
      correctAnswer: "Mozzarella",
    },
    {
      question: "Which pizza topping is considered the most popular worldwide?",
      options: ["Pepperoni", "Mushrooms", "Cheese", "Olives"],
      correctAnswer: "Pepperoni",
    },
    {
      question: "In which city did the first pizzeria open?",
      options: ["Naples", "Rome", "New York", "Milan"],
      correctAnswer: "Naples",
    },
    {
      question:
        "What is the name of the thick crust pizza often associated with Chicago?",
      options: [
        "Deep-dish pizza",
        "Thin-crust pizza",
        "Neapolitan pizza",
        "Stuffed crust pizza",
      ],
      correctAnswer: "Deep-dish pizza",
    },
    {
      question: "What is the main ingredient in the pizza sauce?",
      options: ["Tomatoes", "Peppers", "Onions", "Basil"],
      correctAnswer: "Tomatoes",
    },
    {
      question:
        "Which of the following is a traditional pizza topping in Italy?",
      options: ["Anchovies", "Pineapple", "Bacon", "Chicken"],
      correctAnswer: "Anchovies",
    },
    {
      question: "What year did pizza become popular in the United States?",
      options: ["1940s", "1900s", "1960s", "1980s"],
      correctAnswer: "1940s",
    },
    {
      question: "Which region of Italy is famous for its pizza Margherita?",
      options: ["Naples", "Rome", "Milan", "Venice"],
      correctAnswer: "Naples",
    },
    {
      question: "Which U.S. state is home to the world’s largest pizza?",
      options: ["California", "New York", "Nevada", "Texas"],
      correctAnswer: "California",
    },
    {
      question: "What is a common side dish served with pizza?",
      options: ["Garlic bread", "Fries", "Salad", "Onion rings"],
      correctAnswer: "Garlic bread",
    },
    {
      question:
        "Which type of cheese is most commonly used in pizza in the U.S.?",
      options: ["Mozzarella", "Cheddar", "Provolone", "Gouda"],
      correctAnswer: "Mozzarella",
    },
    {
      question:
        "What is the name of the pizza made with only one topping, typically cheese?",
      options: ["Margherita", "Napolitana", "Quattro Stagioni", "Hawaiian"],
      correctAnswer: "Margherita",
    },
    {
      question:
        "What is the traditional diameter size for a personal pizza in Italy?",
      options: ["20 cm", "30 cm", "40 cm", "50 cm"],
      correctAnswer: "30 cm",
    },
    {
      question: "What is the main characteristic of a Neapolitan pizza?",
      options: [
        "Thin crust",
        "Thick crust",
        "Multiple layers of cheese",
        "Extra toppings",
      ],
      correctAnswer: "Thin crust",
    },
    {
      question:
        "In which country was the first pizza chain, Domino's, founded?",
      options: ["United States", "Italy", "Canada", "United Kingdom"],
      correctAnswer: "United States",
    },
    {
      question:
        "What is the popular pizza topping that is also a type of pepper?",
      options: ["Jalapeños", "Bell peppers", "Chili peppers", "Banana peppers"],
      correctAnswer: "Jalapeños",
    },
    {
      question:
        "What pizza topping is famous for being on a pizza named after a Hawaiian island?",
      options: [
        "Ham and pineapple",
        "Anchovies and olives",
        "Mushrooms and peppers",
        "Bacon and eggs",
      ],
      correctAnswer: "Ham and pineapple",
    },
    {
      question: "What is the name of the dough used for Neapolitan pizza?",
      options: ["Focaccia", "Pita", "Pizza dough", "Ciabatta"],
      correctAnswer: "Pizza dough",
    },
    {
      question:
        "What popular pizza chain introduced the 'Stuffed Crust' pizza in the 1990s?",
      options: ["Pizza Hut", "Domino's", "Papa John's", "Little Caesars"],
      correctAnswer: "Pizza Hut",
    },
    {
      question:
        "Which Italian dish is often considered the precursor to pizza?",
      options: ["Focaccia", "Pasta", "Lasagna", "Risotto"],
      correctAnswer: "Focaccia",
    },
  ];

  const [alertVisible, setAlertVisible] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false); // To track if the question is answered.
  const [showGoBackButton, setShowGoBackButton] = useState(false); // Track visibility of go back button I do not want it to show on 1st question.

  const handleAnswer = (selectedAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];

    // Check if the selected answer is correct.
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setAlertVisible(true); // Show alert for correct answer.
    } else {
      setAlertVisible(false); // Hide alert if wrong.
    }

    setAnswered(true); // Show that the question as answered.
    setShowGoBackButton(true); // Show the go back button after answering first question.
  };

  const handleNextQuestion = () => {
    setAlertVisible(false); // Hide the alerts immediately when moving to the next question.

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question.
      setAnswered(false); // Reset the answered state for the next question.
      setShowGoBackButton(true); // Ensure the go back button remains visible.
    } else {
      alert(`Game Over! Your final score is: ${score}`); // To end the game at last question.
      setCurrentQuestionIndex(0); // Restart the game.
      setScore(0); // Reset score
      setAnswered(false); // Reset answered state
      setShowGoBackButton(false); // Hide the go back button when at the first question.
    }
  };

  const handleGoBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1); // Go back to the previous question.
      setAnswered(false); // Reset the answered state when going back.
      setAlertVisible(false); // Hide any alert when going back.
    } else {
      setShowGoBackButton(false); // Hide the go back button if at the first question.
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div
      className="container-fluid"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "600px",
          width: "100%",
          padding: "20px",
        }}
      >
        <div className="container d-flex justify-content-center align-items-center">
          <Message />
        </div>

        <div>
          <h3>Score: {score}</h3>
        </div>

        <QuestionCard
          question={currentQuestion.question}
          options={currentQuestion.options}
          onAnswer={handleAnswer}
          answered={answered}
        />
        {alertVisible && (
          <AlertMessage
            onClose={() => setAlertVisible(false)}
            message="Correct Answer!"
          />
        )}

        {!alertVisible && answered && (
          <AlertMessageIncorrect
            onClose={() => setAlertVisible(false)}
            message="Wrong Answer! Try again."
          />
        )}

        <div className="mt-3">
          {showGoBackButton && (
            <BootstrapButton
              variant="outline-secondary"
              onClick={handleGoBack}
              className="me-5"
            >
              Go Back
            </BootstrapButton>
          )}

          {answered && (
            <BootstrapButton
              variant="outline-success"
              onClick={handleNextQuestion}
            >
              Next Question
            </BootstrapButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

/*<div>
        <Button color="danger" onClick={() => setAlertVisible(true)}>
          My Button
        </Button>
      </div>*/
