import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
    const [showNav, setShowNav] = useState(false);

    return (
        <nav className="bg-white shadow-lg rounded-bl-3xl rounded-br-3xl">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* Logo */}
                        <div>
                            <Link href="#" className="flex items-center py-5 px-2 gap-2">
                                <Image src="/assets/images/icon/team-icon.png" height={32} width={32} alt="Logo" className="mr-2" />
                                <span className="font-semibold text-lg bg-gradient-to-r from-rose-500 to-green-500 text-transparent bg-clip-text">Lidah Nusantara</span>
                            </Link>
                        </div>

                        {/* Primary Navbar items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="#" className="py-5 px-3 text-gray-500 hover:text-green-500 transition duration-300">Home</Link>
                            <Link href="#" className="py-5 px-3 text-gray-500 hover:text-green-500 transition duration-300">Menu</Link>
                            <Link href="#" className="py-5 px-3 text-gray-500 hover:text-green-500 transition duration-300">About</Link>
                            <Link href="#" className="py-5 px-3 text-gray-500 hover:text-green-500 transition duration-300">Contact</Link>
                        </div>
                    </div>

                    {/* Secondary Navbar items */}
                    <div className="hidden md:flex items-center space-x-3">
                        <Link href="" className="py-2 px-2 font-medium text-gray-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">Log In</Link>
                        <Link href="" className="py-2 px-2 font-medium text-white bg-green-500 rounded-full hover:bg-green-400 transition duration-300">Sign Up</Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className={`mobile-menu-button font-bold bg-gray-200 px-2 rounded-2xl ${showNav ? 'text-rose-500' : 'text-gray-600'}`}
                            onClick={() => setShowNav(!showNav)}
                            aria-label="Toggle Mobile Menu"
                        >
                            {showNav ? 'Close Menu' : 'Menu'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`mobile-menu ${showNav ? 'block' : 'hidden'} md:hidden`}>
                <Link href="#" className="block py-2 px-4 text-sm hover:bg-green-200">Home</Link>
                <Link href="#" className="block py-2 px-4 text-sm hover:bg-green-200">Menu</Link>
                <Link href="#" className="block py-2 px-4 text-sm hover:bg-green-200">About</Link>
                <Link href="#" className="block py-2 px-4 text-sm hover:bg-green-200">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;