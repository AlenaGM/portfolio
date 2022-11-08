import img from "../../assets/images/error.gif";
import "./errorMessage.scss";

const ErrorMessage = () => {
  return (
    <>
      <img className="error_img" src={img} alt="Error" />
      <p>This page doesn't exist</p>
    </>
  );
};

export default ErrorMessage;
