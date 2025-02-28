import { Alert as BootstrapAlert } from "react-bootstrap";

interface AlertMessageIncorrectProps {
  message: string;
  onClose: () => void;
}
// I decided to make my alerts non dismissable, but to disappear instead with back or next button press.
const AlertMessageIncorrect = ({
  message,
  onClose,
}: AlertMessageIncorrectProps) => {
  return (
    <BootstrapAlert variant="danger" onClose={onClose}>
      {message}
    </BootstrapAlert>
  );
};

export default AlertMessageIncorrect;
