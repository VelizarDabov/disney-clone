import { Movie } from "@/typings";
import { moviesData } from "@/app/data/Categories";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
type Props = {
  title?: string;
  isVertical?: boolean;
};

const MoviesCarousels = ({ title, isVertical }: Props) => {

  const categories = Array.from(new Set(moviesData.map((movie) => movie.id)));

  return (
   
    <div className="mt-20">
      {moviesData.map((categoryData) => {
        const genre = Object.keys(categoryData)[0];
        const movies = categoryData[genre];

        return (
          <div key={genre} className="mb-4">
            <h3>{genre}</h3>
            <div className={cn("flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide", isVertical && 'flex-col space-x-0 space-y-12')}>
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
