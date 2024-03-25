import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
        <nav className="flex items-center justify-between py-4 px-8 bg-gray-800">
            <div className="flex items-center">
                <h3 className='text-gray-400'>Logo</h3>
            </div>

            <div className="flex flex-grow justify-center space-x-6">
                <Link href="/" className="text-gray-400 hover:text-blue-600">
                    Home
                </Link>
                
                <Link href="/products" className="text-gray-400 hover:text-blue-900">
                    Products
                </Link>

                <Link href="/contact" className="text-gray-400 hover:text-blue-900">
                    Contact
                </Link>
            </div>
        </nav>
  )
}

export default NavBar