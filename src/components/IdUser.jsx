import React from 'react'

const IdUser = ({user}) => {
  return (
    <div className='mt-32 items-center flex flex-col gap-y-5 text-black p-6 bg-gray-400 rounded-xl' >
      <h2 className='font-bold' >
        {user.first_name} {user.last_name}
      </h2>
      <p className='font-semibold' >
        Email: {user.email}
      </p>
      <img src={user.avatar} alt={user.first_name} className='rounded-lg' />
    </div>
  )
}

export default IdUser