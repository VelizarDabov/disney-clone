import { Movie } from "@/typings";
import Image from "next/image";
import { string } from "zod";

type movie={
  movie:Movie
}

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="relative flex-shrink-0 cursor-pointer transfor hover:scale-105 trasition duration-200 ease-out">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80 z-10" />
      <p className="absolute z-20 bottom-5 left-5">{movie.name}</p>
      <Image
        className="w-fit lg:min-w-[400px] h-56 w-56 object-coverobject-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
        src={movie.image}
        alt={movie.title}
        width={1920}
        height={1080}
        key={movie.id}
      />
    </div>
  );
};

export default MovieCard;
