import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/alert";
import { useState } from "react";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div className="container-fluid col-md-6 border border-black rounded mt-5">
      <div className="container d-flex justify-content-center align-items-center">
        <Message />
      </div>
      <div>
        <ListGroup
          items={items}
          heading="Lets Play!"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>
            PRICE IS WRONG BITCH!
          </Alert>
        )}
      </div>
      <div>
        <Button color="danger" onClick={() => setAlertVisible(true)}>
          My Button
        </Button>
      </div>
    </div>
  );
}

export default App;
