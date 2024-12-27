import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { CiPhone } from 'react-icons/ci';
import { SiMinutemailer } from 'react-icons/si';

type Props = {};

const Contact: React.FC<Props> = () => {
    return (
        <div className='text-center pt-20'>
            <h1 className="text-5xl  font-bold">Contact</h1>
            <p className="my-10">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>

            {/* data  */}
            <div className="stats stats-vertical lg:stats-horizontal  border-[.1rem] border-[#007BFF] rounded-lg shadow">
                <div className="stat  border-[.1rem] border-[#007BFF] ">
                    <CiPhone className='text-7xl  text-[#007BFF] mx-auto' />
                    <div className="stat-title mt-5">Call Me on</div>
                    <div className="stat-value my-5">+8801783252567</div>
                </div>

                <div className="stat  border-[.1rem] border-[#007BFF] ">
               <a href="https://web.telegram.org/a/">
               <SiMinutemailer className='text-7xl text-[#007BFF] mx-auto'/>
                    <div className="stat-title mt-5"> On Telegram</div>
                    <div className="stat-value mt-5">4,200</div>
               </a>
                </div>

                <div className="stat  border-[.1rem] border-[#007BFF] ">
                    <a href="https://mail.google.com/mail/u/0/#inbox">
                    <AiOutlineMail className='text-7xl text-[#007BFF] mx-auto' />
                    <div className="stat-title mt-5"> on Email</div>
                    <div className="stat-value mt-5">tawfiqealahi99@gmail.com</div>
                    </a>
                    
                </div>
            </div>


            {/* input  */}

            <div className="form-control my-10">
                <form className='space-y-4  '>
                    <div className='flex space-x-4'>
                        <div className='flex-1'>
                            <input type='text' id='name' placeholder='Name' name='name' className='mt-1  text-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                        </div>
                        <div className='flex-1'>
                            <input type='email' id='email' name='email' placeholder='Email' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                        </div>
                    </div>
                    <div>
                        <textarea id='subject' name='subject' placeholder='Subject' rows={1} className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'></textarea>
                    </div>
                    <div>
                        <textarea id='message' name='message' placeholder='Write text Here ...........' rows={4} className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'></textarea>
                    </div>
                    <div className='text-center'>
                        <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Send</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contact;