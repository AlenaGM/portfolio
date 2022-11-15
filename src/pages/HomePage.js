import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Home from "../components/home/Home";
//import Spinner from "../components/spinner/Spinner";
import NothingToShow from "../components/errors/NothingToShow";
import ParticlesBackground from "../components/background/ParticlesBackground";

const HomePage = () => {
  const { errors, loading, author } = useContext(DataContext);
  //const spinner = loading ? <Spinner /> : null;
  const error = errors ? <NothingToShow /> : null;
  const content = !(loading || errors) ? <Home author={author} /> : null;

  return (
    <div className="app__home">
      {error}
      {content}
      <ParticlesBackground />
    </div>
  );
};

export default HomePage;
