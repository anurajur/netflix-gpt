import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContailer from "./MainContainer";
import SecondaryContailer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContailer />
      <SecondaryContailer />
    </div>
  );
};

export default Browse;
