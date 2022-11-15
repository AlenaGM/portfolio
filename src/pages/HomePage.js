import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Home from "../components/home/Home";
import NothingToShow from "../components/errors/NothingToShow";
import ParticlesBackground from "../components/background/ParticlesBackground";

const HomePage = () => {
  const { errors, loading } = useContext(DataContext);
  const error = errors ? <NothingToShow /> : null;
  const content = !(loading || errors) ? <Home /> : null;

  return (
    <div className="app__home">
      {error}
      {content}
      <ParticlesBackground />
    </div>
  );
};

export default HomePage;
