import { Movie } from "@/typings";
import { movies } from "@/app/data/Categories";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
type Props = {
  title?: string;
  categories: Movie[];
  isVertical?: boolean;
};

const MoviesCarousels = ({ title, categories, isVertical }: Props) => {
 

  return (
    <div className="">  
        
       <div className={cn('flex space-x-4 overflow-scroll  px-5 lg:px-10 py-5 scrollbar-hide ')}>
       { movies.map((movie) => (
            <div key={movie.id}>
                 <MovieCard key={movie.id} movie={movie} title={movie.name} />
            </div>
       
           
          ))}
           </div>
    </div>
  );
};

export default MoviesCarousels;
