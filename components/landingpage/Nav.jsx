import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserButton } from '@stackframe/stack'
export const Nav = (user) => {
  return (
    <header id="header" className="bg-white dark:bg-neutral-900 shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">

          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-[#4361EE] dark:text-white">
              Career<span className="text-[#F72585]">Catalyst</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
          {user ? (
            <span>
            <ul className="flex space-x-6">
              <li><a href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-[#4361EE] dark:hover:text-white transition-colors duration-300">Dashboard</a></li>
            </ul>
            </span>
          ) : (
            <span>
             <ul className="flex space-x-6">
              <li><a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-[#4361EE] dark:hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#howItWorks" className="text-gray-700 dark:text-gray-300 hover:text-[#4361EE] dark:hover:text-white transition-colors duration-300">How It Works</a></li>
              <li><a href="#demoShowcase" className="text-gray-700 dark:text-gray-300 hover:text-[#4361EE] dark:hover:text-white transition-colors duration-300">Demo</a></li>
              <li><a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-[#4361EE] dark:hover:text-white transition-colors duration-300">Testimonials</a></li>
              <li><a href="#pricingPlans" className="text-gray-700 dark:text-gray-300 hover:text-[#4361EE] dark:hover:text-white transition-colors duration-300">Pricing</a></li>
              <li><a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-[#4361EE] dark:hover:text-white transition-colors duration-300">FAQ</a></li>
            </ul>
            </span>
              )}

         
            
            
            {user ? (
           <UserButton />
            ) : (
              <Link href="/handler/signup">
              <button className="bg-[#F72585] hover:bg-[#f03a8f] text-white px-6 py-2 rounded-full transition-colors duration-300 shadow-md">
                Sign Up
              </button>
            </Link> 
              )}
          </div>


          <div className="md:hidden flex items-center">
            <button id="mobile-menu-button" aria-label="Mobile menu" className="text-gray-700 dark:text-gray-300 hover:text-[#4361EE] dark:hover:text-white focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>


        <div id="mobile-menu" className="md:hidden hidden">
          <ul className="flex flex-col space-y-4 mt-4 pb-4">
            <li><a href="#features" className="block text-gray-700 dark:text-gray-300 hover:text-[#4361EE] dark:hover:text-white transition-colors duration-300">Features</a></li>
            <li><a href="#howItWorks" className="block text-gray-700 dark:text-gray-300 hover:text-[#4361EE] dark:hover:text-white transition-colors duration-300">How It Works</a></li>
            <li><a href="#demoShowcase" className="block text-gray-700 dark:text-gray-300 hover:text-[#4361EE] dark:hover:text-white transition-colors duration-300">Demo</a></li>
            <li><a href="#testimonials" className="block text-gray-700 dark:text-gray-300 hover:text-[#4361EE] dark:hover:text-white transition-colors duration-300">Testimonials</a></li>
            <li><a href="#pricingPlans" className="block text-gray-700 dark:text-gray-300 hover:text-[#4361EE] dark:hover:text-white transition-colors duration-300">Pricing</a></li>
            <li><a href="#faq" className="block text-gray-700 dark:text-gray-300 hover:text-[#4361EE] dark:hover:text-white transition-colors duration-300">FAQ</a></li>
            <li className="mt-4">
              <button className="w-full bg-[#F72585] hover:bg-[#f03a8f] text-white px-6 py-2 rounded-full transition-colors duration-300 shadow-md">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* <script>
          document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classNameList.toggle('hidden');
          });
        </script> */}
    </header>
  )
}