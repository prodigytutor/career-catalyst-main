import Image from 'next/image';
import React from 'react'

export const Hero = () => {
  return (
    <section id="hero" className="pt-24 md:pt-28 pb-16 md:pb-24 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900 overflow-hidden">
<div className="container mx-auto px-4">
  <div className="flex flex-col lg:flex-row items-center">
    <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 z-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 dark:text-white leading-tight mb-6">
        Transform Your Career <span className="text-[#F72585]">Supercharged</span> By AI
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
        Leverage cutting-edge AI to build your resume, ace interviews, and chart your ideal career path—all in one powerful platform.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#signup" className="inline-block bg-[#4361EE] hover:bg-[#3a53cc] text-white font-medium rounded-full px-8 py-4 text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Start Free Trial
        </a>
        <a href="#demoShowcase" className="inline-block bg-white dark:bg-neutral-800 text-[#3A0CA3] dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 font-medium rounded-full px-8 py-4 text-center transition-all duration-300 border border-indigo-200 dark:border-neutral-700 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          Watch Demo
        </a>
      </div>
      <div className="mt-8 flex items-center text-gray-600 dark:text-gray-400 text-sm">
        <div className="flex -space-x-2 mr-3">
          <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="User avatar" className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-800" />
          <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="User avatar" className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-800"  />
          <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="User avatar" className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-800" />
        </div>
        <span>Joined by <strong>10,000+</strong> career-focused professionals</span>
      </div>
    </div>
    <div className="lg:w-1/2 relative">
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/30 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-pink-200 dark:bg-pink-900/30 rounded-full filter blur-3xl opacity-50"></div>
      <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
        <img 
          src="/hero.png"
          alt="Professional looking confidently toward future career opportunities"
         
          width="5066"
          height="3377"
          className="w-full h-auto object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">83% of users</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Land interviews within 2 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 right-12 transform animate-pulse">
        <div className="bg-white dark:bg-neutral-800 rounded-xl p-3 shadow-xl">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-sm">
              <p className="text-gray-700 dark:text-gray-200 font-semibold">AI Resume Builder</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Create in minutes, not hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container mx-auto px-4 mt-16">
  <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
    <div className="grayscale hover:grayscale-0 transition-all duration-300">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft" className="h-8 md:h-10" />
    </div>
    <div className="grayscale hover:grayscale-0 transition-all duration-300">
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/552px-Google_2015_logo.svg.png" height={100} width={100}  alt="Google" className="h-8 md:h-10"  />
    </div>
    <div className="grayscale hover:grayscale-0 transition-all duration-300">
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt="Amazon" height={100} width={100}  className="h-8 md:h-10"  />
    </div>
    <div className="grayscale hover:grayscale-0 transition-all duration-300">
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" height={100} width={100} alt="Netflix" className="h-8 md:h-10" />
    </div>
    <div className="grayscale hover:grayscale-0 transition-all duration-300">
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png"height={100} width={100} alt="Apple" className="h-8 md:h-10 dark:invert"  />
    </div>
  </div>
</div>
    </section>
  );
};
