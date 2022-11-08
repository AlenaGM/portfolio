import { Link } from "react-router-dom";
import ErrorMessage from "../components/errors/ErrorMessage";

const Page404 = () => {
  return (
    <div className="errorMessage">
      <ErrorMessage />
      <Link className="backHomeLink" to="/">
        Back to home page
      </Link>
    </div>
  );
};

export default Page404;
