import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="min-h-80 my-20 flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-4">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to home page
      </Link>
    </div>
  )
}

export default NotFound