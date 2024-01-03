import MoviesCarousels from "@/components/MoviesCarousels"
import { moviesData } from "./data/Categories"
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper"

export default function Home() {
  return (
    <main className=''> 
<CarouselBannerWrapper />
 <div className="flex flex-col space-y-2 xl-mt-48">
  <MoviesCarousels title='Upcomming'/>

 </div>
    </main>
  )
}
