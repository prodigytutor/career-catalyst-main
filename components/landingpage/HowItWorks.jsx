import React from 'react'

import Image from 'next/image'

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">How Career Catalyst Works</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">From profile creation to landing your dream job, our intelligent platform guides your entire career journey.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="order-2 lg:order-1">
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl overflow-hidden">
            <div className="relative h-[450px]">
              <Image 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8aG93aXR3b3JrcyUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzQzMTY3MzcwfDA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                alt="Professional preparing for career success with Career Catalyst"
               
                width="5066"
                height="3377"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white dark:bg-neutral-900 px-3 py-1 rounded-lg text-xs text-gray-500">
                Photo by Hunters Race
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Getting Started Is Simple</h3>
          
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 rounded-full bg-[#4361EE] text-white flex items-center justify-center font-bold text-lg">1</div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Create Your Profile</h4>
                <p className="text-gray-600 dark:text-gray-300">Answer a few questions about your experience, education, and career goals. Our AI will analyze your background.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 rounded-full bg-[#4361EE] text-white flex items-center justify-center font-bold text-lg">2</div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Receive Your Career Plan</h4>
                <p className="text-gray-600 dark:text-gray-300">Get a personalized roadmap with skill recommendations, learning resources, and job opportunities tailored to your goals.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 rounded-full bg-[#4361EE] text-white flex items-center justify-center font-bold text-lg">3</div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Build Your Career Assets</h4>
                <p className="text-gray-600 dark:text-gray-300">Use our AI tools to create targeted resumes, practice interviews, and develop critical skills for your dream roles.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 rounded-full bg-[#4361EE] text-white flex items-center justify-center font-bold text-lg">4</div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Apply with Precision</h4>
                <p className="text-gray-600 dark:text-gray-300">Our AI submits tailored applications to matched opportunities, tracks your progress, and helps you follow up effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Continuous Career Growth</h3>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl border-l-4 border-[#F72585]">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Insights</h4>
              <p className="text-gray-600 dark:text-gray-300">Our platform continuously analyzes job market trends, your skill development, and application performance to refine your strategy.</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl border-l-4 border-[#4361EE]">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Real-time Feedback</h4>
              <p className="text-gray-600 dark:text-gray-300">Get immediate suggestions on your resume, interview responses, and skill-building activities to constantly improve.</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl border-l-4 border-[#3A0CA3]">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Support</h4>
              <p className="text-gray-600 dark:text-gray-300">Connect with peers in similar career paths to share advice, opportunities, and experiences throughout your journey.</p>
            </div>
          </div>
          
          <div className="mt-8">
            <a href="#signup" className="inline-flex items-center justify-center bg-[#F72585] hover:bg-[#e61a78] text-white font-medium rounded-full px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Career Journey
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <div className="relative">
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl overflow-hidden">
              <div className="relative h-[500px]">
                <Image 
                  src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8aG93aXR3b3JrcyUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzQzMTY3MzcwfDA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                  alt="Professional advancing in career with Career Catalyst"
                 
                  width="5048"
                  height="3370"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white dark:bg-neutral-900 px-3 py-1 rounded-lg text-xs text-gray-500">
                  Photo by Ben Rosett
                </div>
              </div>
            </div>
            
         
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-xl max-w-[250px]">
              <div className="flex items-center justify-between mb-4">
                <h5 className="font-semibold text-gray-900 dark:text-white">Success Rate</h5>
                <span className="text-[#F72585] font-bold text-xl">+76%</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Interview Callbacks</span>
                    <span className="text-gray-900 dark:text-white font-medium">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-2">
                    <div className="bg-[#4361EE] h-2 rounded-full width: 68%"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Job Offers</span>
                    <span className="text-gray-900 dark:text-white font-medium">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-2">
                    <div className="bg-[#4361EE] h-2 rounded-full width: 42%"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Salary Increase</span>
                    <span className="text-gray-900 dark:text-white font-medium">76%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-2">
                    <div className="bg-[#4361EE] h-2 rounded-full width: 76%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="mt-24 text-center">
        <div className="inline-block bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-1 mb-8">
          <p className="text-[#4361EE] dark:text-indigo-300 font-medium px-4 py-1 text-sm">Trusted by 100,000+ professionals</p>
        </div>
        
        <blockquote className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-6">"Career Catalyst transformed my job search. The AI-powered tools helped me land interviews at companies I'd only dreamed of working for."</p>
          <footer className="flex items-center justify-center">
            <Image src="https://randomuser.me/api/portraits/women/42.jpg" width={100} height={100} alt="Sarah J." className="w-12 h-12 rounded-full mr-4"/>
            <div className="text-left">
              <cite className="text-gray-900 dark:text-white font-medium block not-italic">Sarah J.</cite>
              <span className="text-gray-600 dark:text-gray-400 text-sm">Software Engineer at Google</span>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
  )
}
