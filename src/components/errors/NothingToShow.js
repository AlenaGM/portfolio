import img from "../../assets/images/tenor.gif";
import "./errorMessage.scss";

const NothingToShow = () => {
  return (
    <div className="nothingToShow">
      <img className="error_img" src={img} alt="Error" />
      <p>Sorry, we can't upload or download anything!</p>
      <p>No connection! Or we are very busy!</p>
    </div>
  );
};

export default NothingToShow;
