import Card from '@/components/Card'
import Header from '@/components/Header'
import Loader from '@/components/Loader'
import { fetchGames } from '@/lib/action'

export default async function () {
    const results = await fetchGames(1)
  return (
    <main className='flex max-w-screen-2xl mx-auto flex-col items-center p-4 md:p-8 lg:p-12 '>
      <Header />
     <div>
      <h1 className='text-5xl font-bold text-[#4557F6] my-8'>
        Games
      </h1>
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
     <Loader />
     </div>
    </main>
  )
}
