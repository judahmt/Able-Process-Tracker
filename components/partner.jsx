import React from 'react'

const partner = ({name}) => {
  return (
    <div className='px-10 py-5'>
        <div className='mx-10 rounded-full text-gray-600 shadow-md border-2 border-gray-600 hover:bg-gray-600 hover:text-white'>
            <p className='px-5 py-5'>{name}</p>
        </div>
    </div>
  )
}

export default partner