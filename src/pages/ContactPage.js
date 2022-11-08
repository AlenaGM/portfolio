import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Contact from "../components/contact/Contact";

const ContactPage = () => {
  const { errors, loading } = useContext(DataContext);

  const spinner = loading ? <div>spinner</div> : null;
  const error = errors ? <div>error</div> : null;
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
