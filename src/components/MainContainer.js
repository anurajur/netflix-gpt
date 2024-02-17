import { useSelector } from "react-redux";

const MainContailer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  return <div> MainContailer</div>;
};

export default MainContailer;
