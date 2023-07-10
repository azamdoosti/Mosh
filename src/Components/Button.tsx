import exp from "constants";
import react, { ReactNode } from "react";
import Alert from "./Alert";
interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: string;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <>
      <button className="btn btn-secondary" onClick={onClick}>
        {children}
      </button>
    </>
  );
};
export default Button;
