
import { notFound } from "next/navigation";
import { moviesData } from "@/app/data/movies";
import Image from "next/image";
import { Movie } from "@/typings";
type Props = {
    params:{
        term:string;
    }
}

const SearchPage = ({params:{term}}:Props) => {
if(!term) notFound();

const termToUse = decodeURI(term);
const filteredMovies: Movie[] = moviesData
.filter((movie) => movie.name.toLowerCase().includes(termToUse.toLowerCase()))
.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <><div className="max-w-7xl mx-auto">
         <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
            <h1 className="text-6xl font-bold px-10">Result for {termToUse}</h1>
            <p className="px-10 font-bold text-lg">Movies</p>
            </div>
          
    {filteredMovies.length > 0 && (


filteredMovies.map((movie) =>
        
     <div className="flex p-2">

          <Image
        className="w-fit lg:min-w-[400px] h-56  object-coverobject-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
        src={movie.image}
        alt={movie.name}
        width={1920}
        height={1080}
        key={movie.id}
      />
      <div className="mt-20 pl-5">
      <h2 className="font-bold" >{movie.name}</h2>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sint ipsam officia doloribus esse. Accusantium quisquam ipsa neque itaque dolores.</p>
        </div>
  
      
     
         </div>
       )
      )}
      </div>
    </>
 
  )
}

export default SearchPage