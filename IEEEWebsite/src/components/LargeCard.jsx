import React from 'react'

const LargeCard = ({title, subheader, description, b1, b2, b3, b4, img}) => {
  return (
    <div className="lg:h-150 lg:w-[50%] h-auto  bg-IEEE-Light-Blue rounded-lg shadow-xl border-5 border-IEEE-Orange p-5 flex flex-col gap-5">
      <div className="w-15 h-15 bg-IEEE-Orange border-IEEE-Orange rounded-2xl flex items-center justify-center">
        <img className="w-8 h-8" src={img} alt="" />
      </div>
      <h1 className="text-white text-4xl font-extrabold uppercase">{title}</h1>
      <p className='text-white text-2xl'><span className='font-bold'>{subheader} </span>{description}</p>
      <ul className="list-['-_'] px-3 list-outside marker:text-IEEE-Orange text-xl text-Blue-Grey space-y-2">
        <li>{b1}</li>
        <li>{b2}</li>
        <li>{b3}</li>
        <li>{b4}</li>
      </ul>
    </div>
  )
}

export default LargeCard
