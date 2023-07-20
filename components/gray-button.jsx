import React from 'react'

const GrayButton = ({ text, size, onClick }) => {
    const buttonClasses = `bg-gray-600 rounded-full text-white shadow-md`;
    let textClasses = '';
    if (size == 'bg') {
        textClasses = 'mx-20 my-5'
    }
    else if (size == 'sm') {
        textClasses = 'mx-5 my-1'
    }
    else if (size == 'md') {
        textClasses = 'mx-10 my-2'
    }
    return (
    <button className={buttonClasses} onClick={onClick}>
        <div className={textClasses}>{text}</div>
    </button>
  )
}

export default GrayButton