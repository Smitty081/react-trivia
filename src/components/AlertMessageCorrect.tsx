// src/components/AlertMessage.tsx
import { Alert as BootstrapAlert } from "react-bootstrap";

interface AlertMessageProps {
  message: string;
  onClose: () => void;
}
// This alert is not dismissable, it was not acting how I wanted.
const AlertMessage = ({ message, onClose }: AlertMessageProps) => {
  return (
    <BootstrapAlert variant="success" onClose={onClose}>
      {message}
    </BootstrapAlert>
  );
};

export default AlertMessage;
