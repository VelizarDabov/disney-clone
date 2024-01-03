'use client'
import { Movie } from '@/typings'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import getImagePath from 'lib/getImagePath';
import { moviesData } from '@/app/data/movies';
Autoplay.globalOptions={delay:8000}
const CarouselBanner = ({movies} : {movies: Movie[]}) => {
console.log(moviesData)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false , duration:100}, [
        Autoplay()
    ])
  return (
    <div className='overflow-hidden lg:-mt-40 relative cursor-pointer' ref={emblaRef}>CarouselBanner
    <div className='flex'>
        {moviesData.map(movie => (
            <div className='flex-full'key={movie.id}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eum suscipit consectetur quidem ad in! Eum vel nulla impedit exercitationem.</div>
        ))}
        </div></div>
  )
}

export default CarouselBanner