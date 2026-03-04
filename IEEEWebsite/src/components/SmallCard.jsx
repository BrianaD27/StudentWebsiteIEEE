import React from 'react'

const SmallCard = ({title, description}) => {
  return (
    <div className='w-80 h-40 bg-IEEE-Light-Blue rounded-lg flex flex-col items-center justify-center border-2 border-IEEE-Orange shadow-lg gap-2'>
        <h1 className='text-IEEE-Orange text-6xl font-extrabold'>{title}</h1>
        <p className='text-Blue-Grey font-semibold'> {description}</p>
      
    </div>
  )
}

export default SmallCard
