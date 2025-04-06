import React from 'react'
import Image from 'next/image'
export const PricingPlan = () => {
  return (
    <section id="pricingPlans" className="py-20 bg-gray-50 dark:bg-neutral-900">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-block bg-purple-50 dark:bg-purple-900/20 rounded-xl p-1 mb-4">
          <p className="text-purple-700 dark:text-purple-300 font-medium px-4 py-1 text-sm">Choose Your Plan</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Invest in Your Future</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Select the perfect plan to accelerate your career journey with our AI-powered tools.</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-gray-200 dark:bg-neutral-800 rounded-full">
          <button className="px-5 py-2 rounded-full bg-white dark:bg-indigo-600 shadow-md text-gray-900 dark:text-white font-medium">
            Monthly
          </button>
          <button className="px-5 py-2 rounded-full text-gray-700 dark:text-gray-300 font-medium">
            Annual <span className="text-xs text-green-600 dark:text-green-400 ml-1">Save 20%</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Catalyst Starter</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">$19</span>
              <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Perfect for new graduates and job seekers ready to step up their career journey.</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Smart Resume Builder</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">3 AI Interview Practice Sessions</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Basic Career Roadmap</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">10 Job Applications/Month</span>
              </li>
              <li className="flex items-start text-gray-500 dark:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Personalized Learning Plans</span>
              </li>
              <li className="flex items-start text-gray-500 dark:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Priority Job Matches</span>
              </li>
            </ul>
          </div>
          
          <div className="px-8 pb-8">
            <a href="#signup" className="block w-full bg-gray-200 hover:bg-gray-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-gray-900 dark:text-white font-medium rounded-full px-6 py-3 text-center transition-colors duration-300">
              Start Free Trial
            </a>
            <p className="text-center text-sm text-gray-500 mt-3">No credit card required</p>
          </div>
        </div>
        
  
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl overflow-hidden transform scale-105 relative z-10">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#4361EE] to-[#F72585]"></div>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 py-2 text-center">
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Most Popular</span>
          </div>
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Catalyst Pro</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">$49</span>
              <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Comprehensive tools for professionals seeking to advance or change their career path.</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Advanced Resume Builder + Templates</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Unlimited AI Interview Practice</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Personalized Learning Plans</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Detailed Career Roadmap</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">50 Job Applications/Month</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Priority Job Matches</span>
              </li>
            </ul>
          </div>
          
          <div className="px-8 pb-8">
            <a href="#signup" className="block w-full bg-[#4361EE] hover:bg-[#3a53cc] text-white font-medium rounded-full px-6 py-3 text-center transition-colors duration-300 shadow-lg">
              Start 7-Day Free Trial
            </a>
            <p className="text-center text-sm text-gray-500 mt-3">Cancel anytime</p>
          </div>
        </div>
        
        
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Catalyst Executive</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">$99</span>
              <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Premium offering for executives and high-level professionals seeking career advancement.</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">All Pro Plan Features</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">1-on-1 Career Coaching Sessions</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Executive-level Resume Review</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Leadership Skills Assessment</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Unlimited Job Applications</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Executive Networking Access</span>
              </li>
            </ul>
          </div>
          
          <div className="px-8 pb-8">
            <a href="#signup" className="block w-full bg-[#3A0CA3] hover:bg-[#2a0982] text-white font-medium rounded-full px-6 py-3 text-center transition-colors duration-300">
              Contact for Custom Plan
            </a>
            <p className="text-center text-sm text-gray-500 mt-3">Tailored to your needs</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Enterprise Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Empower your entire team or organization with Career Catalyst's AI-powered tools. Perfect for HR departments, universities, and corporate training programs.</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Bulk User Management</span>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Easily add and manage multiple users.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Custom Branding Options</span>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">White-label our platform with your organization's branding.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Progress Analytics Dashboard</span>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Track organization-wide career development metrics.</p>
                  </div>
                </li>
              </ul>
              
              <a href="#contact" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300">
                Contact our sales team
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8cHJpY2luZ3BsYW5zJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDMzNjA2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                alt="Professional with Career Catalyst Enterprise Solution"
               
                width="5048"
                height="3370"
                className="w-full h-full object-cover"
             />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-medium">Photo by Ben Rosett</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h3>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-neutral-700">
          <div className="py-6">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-gray-900 dark:text-white">Can I cancel my subscription anytime?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-700 dark:text-gray-300">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-3">Yes, you can cancel your subscription at any time. Once canceled, you'll continue to have access until the end of your billing period.</p>
            </details>
          </div>
          
          <div className="py-6">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-gray-900 dark:text-white">Is there a free trial available?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-700 dark:text-gray-300">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-3">Yes, all paid plans come with a 7-day free trial, giving you full access to all features. No credit card required for the Starter trial.</p>
            </details>
          </div>
          
          <div className="py-6">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-gray-900 dark:text-white">Do you offer student discounts?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-700 dark:text-gray-300">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-3">Yes, we offer a 50% discount for students with a valid .edu email address. Contact our support team after signing up to apply the discount.</p>
            </details>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <a href="#signup" className="inline-block bg-[#F72585] hover:bg-[#e61a78] text-white font-medium rounded-full px-8 py-4 text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Start Your Career Transformation Today
        </a>
        <p className="mt-4 text-gray-600 dark:text-gray-400">No commitment required. 7-day free trial.</p>
      </div>
    </div>
  </section>
  )
}
