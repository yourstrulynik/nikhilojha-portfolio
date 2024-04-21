import React from 'react'

export default function Contact() {
  return (
    <div name="contact" className='w-full h-screen flex justify-center items-center p-4 '>
        <form action="https://getform.io/f/zbxdvzpb" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black'>Contact</p>
                <p className='py-4'>Submit this form or shoot me an email - <a href="mailto:nikhilojha05@gmail.com">nikhilojha05@gmail.com</a></p>
            </div>
            <input type="text" placeholder='Name' name='name' className='mb-2 p-2 bg-gray-300 outline-none' />
            <input type="email" placeholder='Email' name='email' className='mb-2 p-2 bg-gray-300 outline-none ' />
            <textarea name="message" rows="10" placeholder='Message' className=' p-2 bg-gray-300 outline-none'></textarea>
            <button className='text-black border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-300'>Let&apos;s Collaborate</button>
        </form>
      
    </div>
  )
}
