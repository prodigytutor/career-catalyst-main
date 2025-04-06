import React from 'react'
import Image from 'next/image'
export const CallToAction = () => {
  return (
    <section id="callToAction" className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image 
        src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8Y2FsbHRvYWN0aW9uJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDMxNzAyMDd8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
        alt="Professional ready for career advancement"
       
        width="5048"
        height="3370"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 dark:from-neutral-900/95 dark:to-neutral-900/95"></div>
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Transform Your Career Journey Today</h2>
        <p className="text-lg text-indigo-100 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Join thousands of professionals who've accelerated their careers with AI-powered tools built to match your unique goals and potential.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a href="#signup" className="inline-block bg-[#F72585] hover:bg-[#e61a78] text-white font-medium rounded-full px-8 py-4 text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Free 7-Day Trial
          </a>
          <a href="#demoShowcase" className="inline-block bg-white dark:bg-neutral-800 text-indigo-900 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 font-medium rounded-full px-8 py-4 text-center transition-all duration-300 border border-transparent hover:border-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Watch Demo
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex -space-x-2">
            <Image src="https://randomuser.me/api/portraits/women/32.jpg" width="100" height="100" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white" />
            <Image src="https://randomuser.me/api/portraits/women/67.jpg" width="100" height="100" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white"  />
            <Image src="https://randomuser.me/api/portraits/men/32.jpg" width="100" height="100" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white"  />
            <Image src="https://randomuser.me/api/portraits/men/54.jpg"  width="100" height="100" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white"  />
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-medium border-2 border-white">
              +10k
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="ml-2 text-white">4.9/5 from 2,500+ reviews</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
          <div className="w-14 h-14 bg-[#F72585] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Setup in Minutes</h3>
          <p className="text-indigo-100 dark:text-gray-300">Create your account and start exploring AI-powered career tools in less than 5 minutes.</p>
        </div>
        
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
          <div className="w-14 h-14 bg-[#4361EE] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Risk-Free Trial</h3>
          <p className="text-indigo-100 dark:text-gray-300">7-day free trial with full access to all features. No credit card required to start.</p>
        </div>
        
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
          <div className="w-14 h-14 bg-[#3A0CA3] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Cancel Anytime</h3>
          <p className="text-indigo-100 dark:text-gray-300">No long-term contracts or hidden fees. Easily cancel your subscription at any time.</p>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <a href="#signup" className="inline-block bg-white hover:bg-gray-100 text-indigo-900 font-medium rounded-full px-8 py-4 text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Get Started Now — It's Free
        </a>
        <p className="mt-4 text-indigo-200 dark:text-gray-400">No credit card required for free trial</p>
      </div>
    </div>
    
    <div className="absolute bottom-0 right-0 z-0 text-white/10 text-xs px-2">
      Photo by Ben Rosett
    </div>
  </section>
  )
}
