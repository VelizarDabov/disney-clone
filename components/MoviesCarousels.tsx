import { Movie } from "@/typings";
import { moviesData } from "@/app/data/Categories";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
type Props = {
  title?: string;
};

const MoviesCarousels = ({ title }: Props) => {

  const categories = Array.from(new Set(moviesData.map((movie) => movie.id)));

  return (
   
    <div className="mt-20">
      {moviesData.map((categoryData) => {
        const genre = Object.keys(categoryData)[0];
        const movies = categoryData[genre];

        return (
          <div key={genre} className="mb-4">
            <h3>{genre}</h3>
            <div className="flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide">
              {movies.map((movie) => (
                <div key={movie.id} className="">
                  <MovieCard key={movie.id} movie={movie} title={movie.name} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    
    </div>
  );
};

export default MoviesCarousels;
