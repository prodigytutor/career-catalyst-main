import React from 'react'
import Image from 'next/image'
export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-1 mb-4">
              <p className="text-indigo-700 dark:text-indigo-300 font-medium px-4 py-1 text-sm">Questions & Answers</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Everything you need to know about Career Catalyst and how it can transform your career journey.</p>
          </div>
    
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="space-y-6">
            
                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                      <span className="text-lg text-gray-900 dark:text-white">What makes Career Catalyst different from other job search platforms?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-indigo-600 dark:text-indigo-400">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                      <p className="mb-3">Career Catalyst isn't just a job board—it's a comprehensive AI-powered career development platform. We combine resume building, interview preparation, personalized skill development, and job matching in one seamless experience.</p>
                      <p>Our AI technology adapts to your unique skills and goals, providing tailored guidance that traditional platforms simply can't match.</p>
                    </div>
                  </details>
                </div>
    
                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                      <span className="text-lg text-gray-900 dark:text-white">How does the AI Resume Builder work?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-indigo-600 dark:text-indigo-400">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                      <p className="mb-3">Our AI Resume Builder analyzes your experience, skills, and the job descriptions you're targeting to create optimized resumes. It identifies keywords from job descriptions, suggests improvements to your achievements, and formats everything professionally.</p>
                      <p>The AI also provides feedback on your resume's strengths and weaknesses, helping you continuously improve your applications.</p>
                    </div>
                  </details>
                </div>
    
  
                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                      <span className="text-lg text-gray-900 dark:text-white">Are the AI Mock Interviews realistic?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-indigo-600 dark:text-indigo-400">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                      <p className="mb-3">Absolutely! Our AI interviewer is trained on thousands of real interview questions from specific industries and roles. The system adapts to your responses, asks follow-up questions, and provides detailed feedback on your answers.</p>
                      <p>Users consistently report that our mock interviews helped them feel more prepared and confident in actual interviews.</p>
                    </div>
                  </details>
                </div>
    
         
                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                      <span className="text-lg text-gray-900 dark:text-white">How are Career Roadmaps personalized for me?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-indigo-600 dark:text-indigo-400">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                      <p className="mb-3">When you join, you'll complete a comprehensive assessment of your skills, experience, education, and career goals. Our AI analyzes this information along with current job market trends to create your customized Career Roadmap.</p>
                      <p>Your roadmap includes skill-building recommendations, potential career paths, and concrete steps to reach your goals, all tailored to your unique situation and life stage.</p>
                    </div>
                  </details>
                </div>
    
         
                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                      <span className="text-lg text-gray-900 dark:text-white">Can I cancel my subscription at any time?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-indigo-600 dark:text-indigo-400">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                      <p>Yes, you can cancel your subscription at any time with no cancellation fees. Once canceled, you'll continue to have access to Career Catalyst until the end of your current billing period.</p>
                    </div>
                  </details>
                </div>
    
          
                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                      <span className="text-lg text-gray-900 dark:text-white">Is my data secure and private?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-indigo-600 dark:text-indigo-400">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                      <p className="mb-3">Absolutely. We take your privacy seriously. Your personal information and career data are encrypted and stored securely. We never sell your information to third parties.</p>
                      <p>You maintain full control over your data and can request its deletion at any time. For more details, please review our Privacy Policy.</p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
    
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden h-full">
                <div className="relative h-64">
                  <Image 
                    src="/contact.png"
                    alt="Professional workspace with laptop"
                   
                    width="2426"
                    height="1728"
                    className="w-full h-full object-cover"
                  />
                 
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Still have questions?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Our support team is here to help you with any questions about Career Catalyst and how it can accelerate your career journey.</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 dark:text-gray-300 font-medium">Email Support</p>
                        <a href="mailto:support@careerscatalyst.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">support@careerscatalyst.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 dark:text-gray-300 font-medium">Live Chat</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Available 24/7 for Pro and Executive plans</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 dark:text-gray-300 font-medium">Knowledge Base</p>
                        <a href="#kb" className="text-indigo-600 dark:text-indigo-400 hover:underline">Browse our help articles</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a href="#contact" className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full px-6 py-3 text-center transition-colors duration-300">
                      Contact Support Team
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Getting Started</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Creating your profile</a>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Setting career goals</a>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Navigating the dashboard</a>
                </li>
              </ul>
            </div>
    
   
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Billing & Subscription</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Changing subscription plans</a>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Refund policy</a>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Student and group discounts</a>
                </li>
              </ul>
            </div>
    
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Best Practices</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-600 dark:text-pink-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">Resume optimization tips</a>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-600 dark:text-pink-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">Maximizing mock interviews</a>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-600 dark:text-pink-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">Application submission strategies</a>
                </li>
              </ul>
            </div>
          </div>
    
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">Don't see your question here?</p>
            <a href="#contact" className="inline-block bg-[#F72585] hover:bg-[#e61a78] text-white font-medium rounded-full px-8 py-4 text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Contact Our Support Team
            </a>
          </div>
        </div>
      </section>
  )
}
