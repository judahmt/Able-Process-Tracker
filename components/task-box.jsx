import React from 'react'

const TaskBox = ({task}) => {

    const {sender, receiver, documentType, urgency, deadline, additionalInfo} = task;

  return (
    <div className='px-10 py-5'>
        <div className='mx-10 rounded-lg text-gray-600 shadow-md border-2 border-gray-600 hover:bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='px-5 py-5 '>{documentType}</h3>
                <div className='flex pr-5'>
                    <p className='px-1 mx-1 my-5 bg-red-300 rounded-full'>{urgency} Urgency</p>
                    <p className='px-1 mx-1 my-5 bg-gray-600 rounded-full text-white'>{sender}</p>
                    <p className='px-1 mx-1 my-5 bg-yellow-200 rounded-full'>{receiver}</p>
                </div>
            </div>
            <p className='px-5 pb-5'>{additionalInfo}</p>
        </div>
    </div>
  )
}

export default TaskBox