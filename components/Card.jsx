import Image from 'next/image'

const Card = ({background_image, name, genres, rating,released}) => {
  return (
    <div className='rounded-lg overflow-hidden shadow-lg relative bg-[#16162791] text-white transition-transform hover:scale-105'>
          <div>
            <Image 
            src={background_image}
            alt={name}
            width={300}
            height={200}
            className='object-cover w-full h-48'
            />
          </div>
          <div className='p-4'>
            <h2 className='text-xl font-bold mb-2 line-clamp-1'>
            {name}
            </h2>
            <p  className='text-gray-400 mb-4'>
              {genres?.map((genre) => genre.name).join(', ')}
            </p>
          <div className='flex items-center justify-between gap-3'>
            <span className='text-gray-300'>Rating: {rating}</span>
            <span className='text-gray-300'>Released: {released}</span>
          </div>
        </div>
      </div>
  )
}

export default Card