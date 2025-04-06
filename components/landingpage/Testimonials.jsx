import React from 'react'
import Image from 'next/image'

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-block bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-1 mb-4">
          <p className="text-[#4361EE] dark:text-indigo-300 font-medium px-4 py-1 text-sm">Success Stories</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Hear From Our Community</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Real results from professionals who transformed their careers with Career Catalyst.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl relative">
          <div className="absolute -top-5 left-8">
            <div className="w-10 h-10 bg-[#F72585] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
          </div>
          
          <div className="flex items-center mb-6 mt-4">
            <div className="flex-shrink-0 mr-4">
              <Image 
                src="https://images.unsplash.com/photo-1659482633518-f2c99276b6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8dGVzdGltb25pYWxzJTIwZmVlZGJhY2slMjBhdXRoZW50aWMlMjB0cnVzdHdvcnRoeXxlbnwwfDF8fHwxNzQzMTU5Njc2fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                alt="Jessica K., Software Engineer"
            
                width="80"
                height="80"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Jessica K.</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Software Engineer</p>
              <div className="flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          
          <blockquote className="text-gray-700 dark:text-gray-300 mb-6">
            "The AI resume builder transformed my application. I went from zero callbacks to 5 interview requests in just one week. Career Catalyst made my skills shine in ways I couldn't have articulated myself."
          </blockquote>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">3 months ago</span>
            <div className="flex items-center text-indigo-600 dark:text-indigo-400">
              <span className="font-medium">Result:</span>
              <span className="ml-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded">Hired at Google</span>
            </div>
          </div>
        </div>
        

        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl relative">
          <div className="absolute -top-5 left-8">
            <div className="w-10 h-10 bg-[#4361EE] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
          </div>
          
          <div className="flex items-center mb-6 mt-4">
            <div className="flex-shrink-0 mr-4">
              <Image 
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8dGVzdGltb25pYWxzJTIwZmVlZGJhY2slMjBhdXRoZW50aWMlMjB0cnVzdHdvcnRoeXxlbnwwfDF8fHwxNzQzMTU5Njc2fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                alt="Marcus T., Marketing Manager"
                
                width="80"
                height="80"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Marcus T.</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Marketing Manager</p>
              <div className="flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          
          <blockquote className="text-gray-700 dark:text-gray-300 mb-6">
            "After 50+ failed applications, I was about to give up. Career Catalyst's mock interviews gave me confidence and pinpointed exactly where I was going wrong. Landed my dream job after just 3 practice sessions."
          </blockquote>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">1 month ago</span>
            <div className="flex items-center text-indigo-600 dark:text-indigo-400">
              <span className="font-medium">Result:</span>
              <span className="ml-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded">35% salary increase</span>
            </div>
          </div>
        </div>
        
   
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl relative">
          <div className="absolute -top-5 left-8">
            <div className="w-10 h-10 bg-[#3A0CA3] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
          </div>
          
          <div className="flex items-center mb-6 mt-4">
            <div className="flex-shrink-0 mr-4">
              <Image 
                src="https://images.unsplash.com/photo-1659482634001-7e2571dec3e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8dGVzdGltb25pYWxzJTIwZmVlZGJhY2slMjBhdXRoZW50aWMlMjB0cnVzdHdvcnRoeXxlbnwwfDF8fHwxNzQzMTU5Njc2fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                alt="Aisha R., Career Changer"
         
                width="80"
                height="80"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Aisha R.</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Career Changer</p>
              <div className="flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          
          <blockquote className="text-gray-700 dark:text-gray-300 mb-6">
            "Switching from teaching to tech seemed impossible until I found Career Catalyst. The personalized roadmap showed me exactly what skills to develop. Their AI Resume Submitter landed me 3x more interviews."
          </blockquote>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">2 months ago</span>
            <div className="flex items-center text-indigo-600 dark:text-indigo-400">
              <span className="font-medium">Result:</span>
              <span className="ml-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded">Complete career change</span>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-900 dark:to-purple-900 rounded-2xl overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="p-8 text-center">
            <h3 className="text-4xl font-bold text-white mb-2">93%</h3>
            <p className="text-indigo-100">Users improve interview performance</p>
          </div>
          <div className="p-8 text-center">
            <h3 className="text-4xl font-bold text-white mb-2">78%</h3>
            <p className="text-indigo-100">Land jobs in under 60 days</p>
          </div>
          <div className="p-8 text-center">
            <h3 className="text-4xl font-bold text-white mb-2">42%</h3>
            <p className="text-indigo-100">Average salary increase</p>
          </div>
          <div className="p-8 text-center">
            <h3 className="text-4xl font-bold text-white mb-2">100K+</h3>
            <p className="text-indigo-100">Career paths transformed</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <svg width="45" height="36" className="text-gray-400 dark:text-gray-500" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.0714 36C11.2143 36 9.53571 35.3571 8.03571 34.0714C6.60714 32.7143 5.89286 30.9643 5.89286 28.8214C5.89286 27.9643 6.03571 27.1071 6.32143 26.25C6.67857 25.3929 7.14286 24.6071 7.71429 23.8929C8.35714 23.1071 9.07143 22.3929 9.85714 21.75C10.6429 21.1071 11.4286 20.5357 12.2143 20.0357C11.9286 19.6786 11.6786 19.25 11.4643 18.75C11.25 18.25 11.0714 17.75 10.9286 17.25C10.7857 16.75 10.6786 16.2857 10.6071 15.8571C10.5357 15.4286 10.5 15.0357 10.5 14.6786C10.5 12.8929 11.0714 11.3214 12.2143 9.96429C13.4286 8.53571 15.0357 7.82143 17.0357 7.82143C19.3214 7.82143 21.1071 8.67857 22.3929 10.3929C23.6786 12.1071 24.3214 14.3214 24.3214 17.0357C24.3214 18.1786 24.1786 19.3571 23.8929 20.5714C23.6071 21.7857 23.1429 22.9643 22.5 24.1071C21.9286 25.1786 21.1786 26.2143 20.25 27.2143C19.3929 28.1429 18.3571 29 17.1429 29.7857C16 30.5 14.6786 31.0714 13.1786 31.5C11.75 31.8571 10.3929 32.0357 9.10714 32.0357C9.96429 32.0357 10.75 31.8929 11.4643 31.6071C12.25 31.3214 12.9643 30.9643 13.6071 30.5357C14.25 30.1071 14.8214 29.6429 15.3214 29.1429C15.8214 28.6429 16.25 28.1786 16.6071 27.75C15.7857 27.3214 15.0357 26.7143 14.3571 25.9286C13.75 25.0714 13.4286 24.0714 13.4286 22.9286C13.4286 21.7143 13.8214 20.6429 14.6071 19.7143C15.3929 18.7857 16.4286 18.3214 17.7143 18.3214C19.1429 18.3214 20.2143 18.7857 20.9286 19.7143C21.7143 20.6429 22.1071 21.7143 22.1071 22.9286C22.1071 23.7143 21.9643 24.4643 21.6786 25.1786C21.3929 25.8214 21 26.4286 20.5 27C20.0714 27.5 19.5714 27.9643 19 28.3929C18.4286 28.75 17.8571 29.0357 17.2857 29.25C18.5714 29.5357 19.8571 29.3929 21.1429 28.8214C22.5 28.25 23.6429 27.4286 24.5714 26.3571L26.6786 28.5C25.3214 30.0714 23.6429 31.3214 21.6429 32.25C19.7143 33.1786 17.6786 33.6429 15.5357 33.6429C15.0357 34.2143 14.4286 34.6786 13.7143 35.0357C12.9286 35.6786 12.0357 36 13.0714 36ZM34.0714 36C32.2143 36 30.5357 35.3571 29.0357 34.0714C27.6071 32.7143 26.8929 30.9643 26.8929 28.8214C26.8929 27.9643 27.0357 27.1071 27.3214 26.25C27.6786 25.3929 28.1429 24.6071 28.7143 23.8929C29.3571 23.1071 30.0714 22.3929 30.8571 21.75C31.6429 21.1071 32.4286 20.5357 33.2143 20.0357C32.9286 19.6786 32.6786 19.25 32.4643 18.75C32.25 18.25 32.0714 17.75 31.9286 17.25C31.7857 16.75 31.6786 16.2857 31.6071 15.8571C31.5357 15.4286 31.5 15.0357 31.5 14.6786C31.5 12.8929 32.0714 11.3214 33.2143 9.96429C34.4286 8.53571 36.0357 7.82143 38.0357 7.82143C40.3214 7.82143 42.1071 8.67857 43.3929 10.3929C44.6786 12.1071 45.3214 14.3214 45.3214 17.0357C45.3214 18.1786 45.1786 19.3571 44.8929 20.5714C44.6071 21.7857 44.1429 22.9643 43.5 24.1071C42.9286 25.1786 42.1786 26.2143 41.25 27.2143C40.3929 28.1429 39.3571 29 38.1429 29.7857C37 30.5 35.6786 31.0714 34.1786 31.5C32.75 31.8571 31.3929 32.0357 30.1071 32.0357C30.9643 32.0357 31.75 31.8929 32.4643 31.6071C33.25 31.3214 33.9643 30.9643 34.6071 30.5357C35.25 30.1071 35.8214 29.6429 36.3214 29.1429C36.8214 28.6429 37.25 28.1786 37.6071 27.75C36.7857 27.3214 36.0357 26.7143 35.3571 25.9286C34.75 25.0714 34.4286 24.0714 34.4286 22.9286C34.4286 21.7143 34.8214 20.6429 35.6071 19.7143C36.3929 18.7857 37.4286 18.3214 38.7143 18.3214C40.1429 18.3214 41.2143 18.7857 41.9286 19.7143C42.7143 20.6429 43.1071 21.7143 43.1071 22.9286C43.1071 23.7143 42.9643 24.4643 42.6786 25.1786C42.3929 25.8214 42 26.4286 41.5 27C41.0714 27.5 40.5714 27.9643 40 28.3929C39.4286 28.75 38.8571 29.0357 38.2857 29.25C39.5714 29.5357 40.8571 29.3929 42.1429 28.8214C43.5 28.25 44.6429 27.4286 45.5714 26.3571L47.6786 28.5C46.3214 30.0714 44.6429 31.3214 42.6429 32.25C40.7143 33.1786 38.6786 33.6429 36.5357 33.6429C36.0357 34.2143 35.4286 34.6786 34.7143 35.0357C33.9286 35.6786 33.0357 36 34.0714 36Z" fill="currentColor"/>
                </svg>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light mb-8 leading-relaxed">
                "After being laid off from my tech job of 12 years, I was terrified of starting over. Career Catalyst didn't just help me find a new job—it helped me find a better path. The personalized roadmap showed me skills I didn't realize were transferable."
              </blockquote>
              <footer>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">David Chen</h4>
                <p className="text-gray-600 dark:text-gray-400">Former IT Manager → Senior Product Manager</p>
                <div className="flex items-center mt-4">
                  <div className="text-green-600 dark:text-green-400 font-medium mr-2">Result:</div>
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm px-3 py-1 rounded-full">
                    62% salary increase
                  </div>
                </div>
              </footer>
            </div>
            <div className="relative h-80 lg:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-indigo-500/20 rounded-full -mr-12 -mt-12 z-0"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-purple-500/20 rounded-full -ml-12 -mb-12 z-0"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">62% Salary Increase</h4>
                  <p className="text-gray-600 dark:text-gray-300">Career transition in just 8 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <a href="#signup" className="inline-block bg-[#F72585] hover:bg-[#e61a78] text-white font-medium rounded-full px-8 py-4 text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Join Thousands of Success Stories
        </a>
      </div>
    </div>
  </section>
  )
}
