import React from 'react'
import Image from 'next/image'
export const DemoShowcase = () => {
  return (
    <section id="demoShowcase" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-800 dark:to-neutral-900">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">See Career Catalyst in Action</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Experience our powerful AI-driven tools that transform your career journey from start to finish.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg px-4 py-2 inline-block mb-4">
            <span className="text-indigo-700 dark:text-indigo-300 text-sm font-medium">Smart Resume Builder</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Craft the Perfect Resume in Minutes</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Our AI analyzes your experience and the job description to create a tailored resume that highlights your most relevant skills and accomplishments.</p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <span className="font-medium text-gray-900 dark:text-white">AI-powered keyword optimization</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Get past ATS systems with perfectly matched keywords.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <span className="font-medium text-gray-900 dark:text-white">Achievement enhancement</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Turn basic job duties into impressive accomplishments.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <span className="font-medium text-gray-900 dark:text-white">Industry-specific templates</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Choose from designs proven to work in your field.</p>
              </div>
            </li>
          </ul>
          
          <div className="mt-auto">
            <a href="#signup" className="inline-block bg-[#4361EE] hover:bg-[#3a53cc] text-white font-medium rounded-full px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              Try Resume Builder Free
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-7 relative">
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-neutral-700">
            <div className="border-b border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 py-3 px-4 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-sm font-medium">Career Catalyst • Resume Builder</div>
            </div>
            
            <div className="aspect-video relative overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZGVtb3Nob3djYXNlJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDM2OTAzNzl8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                alt="Career Catalyst Resume Builder Demo"
               
                width="5066"
                height="3377"
                className="w-full h-full object-cover"
              />
              
     
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="w-4/5 md:w-3/5 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4 md:p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Resume Overview</h4>
                    <div className="text-sm text-white px-2 py-1 bg-green-500 rounded">90% Match</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-100 dark:bg-neutral-700 h-2 rounded-full w-full">
                      <div className="bg-[#4361EE] h-2 rounded-full w-[90%]"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-4 bg-gray-100 dark:bg-neutral-700 rounded"></div>
                      <div className="h-4 bg-gray-100 dark:bg-neutral-700 rounded"></div>
                    </div>
                    
                    <div className="h-4 bg-gray-100 dark:bg-neutral-700 rounded w-3/4"></div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-10 bg-gray-100 dark:bg-neutral-700 rounded"></div>
                      <div className="h-10 bg-gray-100 dark:bg-neutral-700 rounded"></div>
                      <div className="h-10 bg-gray-100 dark:bg-neutral-700 rounded"></div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <div className="w-8 h-8 bg-[#F72585] rounded-full flex items-center justify-center text-white font-bold">AI</div>
                      <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-2 text-xs text-gray-600 dark:text-gray-300 flex-1">
                        Try highlighting your project management skills more prominently to better match this job description.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded">
                Photo visualization. Actual app interface will vary.
              </div>
            </div>
          </div>
          
                                     
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white hover:bg-white/30 transition-all duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1 relative">
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-neutral-700">
            <div className="border-b border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 py-3 px-4 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-sm font-medium">Career Catalyst • Mock Interview</div>
            </div>
            
            <div className="aspect-video relative overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8ZGVtb3Nob3djYXNlJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDM2OTAzNzl8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                alt="Career Catalyst Mock Interview Demo"
               
                width="5048"
                height="3370"
                className="w-full h-full object-cover"
              />
              
     
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="w-4/5 md:w-3/5 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4 md:p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">AI Interviewer</h4>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                      <span className="text-green-500 text-sm">Recording</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-neutral-700 rounded-lg p-3 mb-4">
                    <p className="text-gray-800 dark:text-gray-200 text-sm">Tell me about a time you had to overcome a significant challenge in your previous role.</p>
                  </div>
                  
                  <div className="flex justify-center space-x-4 mt-6">
                    <button className="bg-red-500 hover:bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                      </svg>
                    </button>
                    <button className="bg-[#4361EE] hover:bg-indigo-700 text-white rounded-full w-12 h-12 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded">
                Photo by Ben Rosett
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white hover:bg-white/30 transition-all duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg px-4 py-2 inline-block mb-4">
            <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">AI-Powered Mock Interviews</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Practice With Realistic AI Interviewers</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Our AI interviewers adapt to your industry, role, and experience level to simulate authentic interview experiences with real-time feedback.</p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <span className="font-medium text-gray-900 dark:text-white">Personalized question sets</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Based on your target role and experience level.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <span className="font-medium text-gray-900 dark:text-white">Detailed performance analysis</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Get scored on confidence, clarity, and content.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <span className="font-medium text-gray-900 dark:text-white">Answer improvement suggestions</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm">AI feedback to strengthen weak responses.</p>
              </div>
            </li>
          </ul>
          
          <div className="mt-auto">
            <a href="#signup" className="inline-block bg-[#F72585] hover:bg-[#e61a78] text-white font-medium rounded-full px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              Try Mock Interviews Free
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
        <a href="#features" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium">
          <span>Explore all features</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </section>
  )
}
