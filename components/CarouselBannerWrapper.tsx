import React from 'react'
import CarouselBanner from './CarouselBanner';
import { Movie } from '@/typings';
type Props={
  id?:string;
  keywords?:string;
  movies: Movie[];
}
const CarouselBannerWrapper = ({ movies, id, keywords }: Props) => {
  
  return (

<CarouselBanner movies={movies}/>
 
  )
}

export default CarouselBannerWrapper