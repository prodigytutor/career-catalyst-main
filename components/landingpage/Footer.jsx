import React from 'react'
import Image from 'next/image'
export const Footer = () => {
  return (
    <footer id="footer" className="bg-indigo-900 dark:bg-neutral-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
    
        <div className="lg:col-span-2">
          <a href="#" className="text-2xl font-bold text-white mb-6 inline-block">
            Career<span className="text-[#F72585]">Catalyst</span>
          </a>
          <p className="text-indigo-200 dark:text-gray-400 mb-6 max-w-md">
            AI-powered career development platform helping ambitious professionals transform their careers and build fulfilling futures.
          </p>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="w-10 h-10 bg-indigo-800 dark:bg-neutral-800 hover:bg-indigo-700 dark:hover:bg-neutral-700 rounded-full flex items-center justify-center transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-indigo-800 dark:bg-neutral-800 hover:bg-indigo-700 dark:hover:bg-neutral-700 rounded-full flex items-center justify-center transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-indigo-800 dark:bg-neutral-800 hover:bg-indigo-700 dark:hover:bg-neutral-700 rounded-full flex items-center justify-center transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-indigo-800 dark:bg-neutral-800 hover:bg-indigo-700 dark:hover:bg-neutral-700 rounded-full flex items-center justify-center transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-indigo-800 dark:bg-neutral-800 hover:bg-indigo-700 dark:hover:bg-neutral-700 rounded-full flex items-center justify-center transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <a href="#" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md px-3 py-1 text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">iOS App</a>
            <a href="#" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md px-3 py-1 text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">Android App</a>
          </div>
        </div>
        
      
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-3">
            <li>
              <a href="#features" className="text-indigo-200 dark:text-gray-400 hover:text-white transition-colors duration-300">Features</a>
            </li>
            <li>
              <a href="#howItWorks" className="text-indigo-200 dark:text-gray-400 hover:text-white transition-colors duration-300">How It Works</a>
            </li>
            <li>
              <a href="#demoShowcase" className="text-indigo-200 dark:text-gray-400 hover:text-white transition-colors duration-300">Demo</a>
            </li>
            <li>
              <a href="#pricingPlans" className="text-indigo-200 dark:text-gray-400 hover:text-white transition-colors duration-300">Pricing</a>
            </li>
            <li>
              <a href="#faq" className="text-indigo-200 dark:text-gray-400 hover:text-white transition-colors duration-300">FAQ</a>
            </li>
            <li>
              <a href="#blog" className="text-indigo-200 dark:text-gray-400 hover:text-white transition-colors duration-300">Career Blog</a>
            </li>
          </ul>
        </div>
        
      
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <a href="#about" className="text-indigo-200 dark:text-gray-400 hover:text-white transition-colors duration-300">About Us</a>
            </li>
            <li>
              <a href="#careers" className="text-indigo-200 dark:text-gray-400 hover:text-white transition-colors duration-300">Careers</a>
            </li>
            <li>
              <a href="#privacy" className="text-indigo-200 dark:text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms" className="text-indigo-200 dark:text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
            </li>
            <li>
              <a href="#contact" className="text-indigo-200 dark:text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a>
            </li>
            <li>
              <a href="#press" className="text-indigo-200 dark:text-gray-400 hover:text-white transition-colors duration-300">Press Kit</a>
            </li>
          </ul>
        </div>
        
      
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 dark:text-gray-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-indigo-200 dark:text-gray-400">
                123 Innovation Way<br />
                San Francisco, CA 94103
              </span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 dark:text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:support@careercatalyst.ai" className="text-indigo-200 dark:text-gray-400 hover:text-white transition-colors duration-300">
                support@careercatalyst.ai
              </a>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 dark:text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:+18005551234" className="text-indigo-200 dark:text-gray-400 hover:text-white transition-colors duration-300">
                +1 (800) 555-1234
              </a>
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="text-base font-medium mb-3">Subscribe to our newsletter</h4>
            <form action="#" method="POST" className="flex">
              <input type="email" placeholder="Enter your email" className="bg-indigo-800 dark:bg-neutral-800 text-white rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-gray-400 w-full" required />
              <button type="submit" className="bg-[#F72585] hover:bg-[#e61a78] text-white rounded-r-md px-4 py-2 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      

      <div className="border-t border-indigo-800 dark:border-neutral-800 pt-8 mb-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-indigo-200 dark:text-gray-400 text-sm">SSL Secured</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-indigo-200 dark:text-gray-400 text-sm">Data Protection</span>
          </div>
          <div className="flex items-center">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" width="100" height="100" alt="Stripe" className="h-6 mr-2 dark:invert" />
            <span className="text-indigo-200 dark:text-gray-400 text-sm">Secure Payments</span>
          </div>
          <div className="flex items-center">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" width="100" height="100" alt="Apple" className="h-5 mr-2 dark:invert"  />
            <span className="text-indigo-200 dark:text-gray-400 text-sm">Apple Pay</span>
          </div>
          <div className="flex items-center">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Google_Pay_Logo.svg/1024px-Google_Pay_Logo.svg.png" width="100" height="100" alt="Google Pay" className="h-5 mr-2"  />
            <span className="text-indigo-200 dark:text-gray-400 text-sm">Google Pay</span>
          </div>
        </div>
      </div>
      

      <div className="border-t border-indigo-800 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-indigo-200 dark:text-gray-400 text-sm mb-4 md:mb-0">
          &copy; 2023 Career Catalyst. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="text-indigo-200 dark:text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="text-indigo-200 dark:text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
          <a href="#" className="text-indigo-200 dark:text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookies</a>
          <a href="#" className="text-indigo-200 dark:text-gray-400 hover:text-white text-sm transition-colors duration-300">Sitemap</a>
          <a href="#" className="text-indigo-200 dark:text-gray-400 hover:text-white text-sm transition-colors duration-300">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
  )
}
