import Home from "../components/home/Home";
//import Spinner from "../components/spinner/Spinner";
//import NothingToShow from "../components/errors/NothingToShow";

const HomePage = () => {
  console.log("render home");
  //const spinner = loading ? <Spinner /> : null;
  //const error = errors ? <NothingToShow /> : null;
  //const content = !(loading || errors) ? <Home /> : null;

  return (
    <div className="app__home">
      <Home />
    </div>
  );
};

export default HomePage;
