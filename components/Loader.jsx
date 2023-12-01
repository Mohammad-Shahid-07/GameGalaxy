'use client'
import { fetchGames } from '@/lib/action'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Card from './Card'

let page = 2;
const Loader = () => {
    const {ref, inView} = useInView()
    const [results, setResults] = useState([])
    useEffect(() => {
        if(inView){
          fetchGames(page)
          .then((res) => {
            setResults([...results , ...res])
            page++;
          })
        }
    }, [inView])
   
  return (
    <div>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-7'> 
       {results.map((item) => (
        <Card 
        key={item._id}
        name={item.name}
        background_image={item.background_image}
        genres={item.genres}
        rating={item.rating}
        released={item.released}
        />
       )) }
     </div>
  
    <div ref={ref}>
        <Image
        src='/spinner.svg'
        alt='Loading'
        width={100}
        height={100}
        className='rounded-full animate-spin mx-auto'
        />
    </div>
    </div>
  )
}

export default Loader