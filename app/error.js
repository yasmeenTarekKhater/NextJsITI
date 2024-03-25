'use client'
import React from 'react'

const Error = () => {
  return (
    <div className="flex  items-center justify-center">
      <div className=" m-10 p-10 bg-red-200 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Oops!</h1>
        <p className="text-gray-600 mb-4">
          Error.....<br/>
          Somthing wrong
        </p>
      </div>
    </div>
  )
}

export default Error