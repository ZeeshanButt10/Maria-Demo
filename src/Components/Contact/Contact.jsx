import React, { useRef, useState } from 'react'


const Contact = () => {
  
  const form = useRef();

 
  return (      
 <>
    <section
        id="contact"
        className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
      >

        {/* Section Titile */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white"> CONTACT</h2>
          <div className="w-32 h-1 bg-blue-900 mx-auto mt-4"></div>
        </div>

        {/* Contact Form  */}
        <div className='mt-8 w-full max-w-md mx-auto bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
          <h3 className='text-xl font-semibold text-white text-center'>
         <span className="flex flex-wrap justify-center space-x-4 mt-6">   Email</span>
          </h3>
              <form ref={form} onSubmit={(e)=>{e.preventDefault()}} className='mt-4 flex flex-col space-y-4'>
                
                <input type='text' name='user_name'   placeholder='Your Name' 
                className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
                />
                <input type='text' name='subject' placeholder='Subject' 
                className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
                />
                <textarea name='message'  placeholder='Message' rows="4" 
                className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
                />

                {/* Send Button   */}
                <button type='submit' className='w-full bg-gradient-to-r from-green-800 to-blue-900 py-3 text-white font-semibold rounded-md hover:opacity-90 transition'>
                  Send
                </button>

              </form>



        </div>
                
</section>
</>
  )
}

export default Contact