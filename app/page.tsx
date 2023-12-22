import MoviesCarousels from "@/components/MoviesCarousels"
import { movies } from "./data/Categories"
type movies= {
movies:movies[]
} 
export default function Home() {
  return (
    <main className=''> 

 <div className="flex flex-col space-y-2 xl-mt-48">
  <MoviesCarousels movies={[]} title='Upcomming'/>
    <MoviesCarousels movies= {[]} title='Top Rated'/>
      <MoviesCarousels movies= {[]} title='Upcomming'/>
 </div>
    </main>
  )
}
