import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Contact from "../components/contact/Contact";
import Spinner from "../components/spinner/Spinner";
import NothingToShow from "../components/errors/NothingToShow";

const ContactPage = () => {
  const { errors, loading } = useContext(DataContext);

  const spinner = loading ? <Spinner /> : null;
  const error = errors ? <NothingToShow /> : null;
  const content = !(loading || errors) ? <Contact /> : null;

  return (
    <div className="app__contact">
      {error}
      {spinner}
      {content}
    </div>
  );
};

export default ContactPage;
