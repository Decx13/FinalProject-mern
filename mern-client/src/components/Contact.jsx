import React from 'react'

const Contact = () => {
  return (
    <div  className='mt-28 px-4 lg:px-24  items-center'>
      
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Get In Touch With Us Here!</h2>



                  <ul class="mt-20 mb-6 md:mb-0">
                        <li class="flex mt-15">
                            <div class="mt-15 flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div class=" ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                </h3>
                                <p class="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
                                <p class="text-gray-600 dark:text-slate-400">New York, EEUU</p>
                            </div>
                        </li>
                        <li class="flex mt-15">
                            <div class="mt-15 flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                </h3>
                                <p class="text-gray-600 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
                                <p class="text-gray-600 dark:text-slate-400">Mail: tailnext@gmail.com</p>
                            </div>
                        </li>
                        <li class="flex mt-15">
                            <div class="mt-15 flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                    hours</h3>
                                <p class="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                <p class="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                            </div>
                        </li>
                        
                    </ul>


                 
                    {/* <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50 mt-20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div class="ml-0 mb-4 ">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                </h3>
                                <p class="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
                                <p class="text-gray-600 dark:text-slate-400">New York, EEUU</p>
                            </div>

                            <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div class="ml-0 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                </h3>
                                <p class="text-gray-600 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
                                <p class="text-gray-600 dark:text-slate-400">Mail: tailnext@gmail.com</p>
                            </div>

                            <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>
                            <div class="ml-0 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                    hours</h3>
                                <p class="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                <p class="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                            </div> */}
              </div>
             
              <div class="grid grid-cols-2 gap-4 mt-8">
                  <img class="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1487015307662-6ce6210680f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29vZCUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="office content 1"></img>
                  <img class="mt-4 w-full lg:mt-10 rounded-lg" 
                  src="https://images.unsplash.com/photo-1636138388621-258a72ecb07e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHdvb2QlMjBkaW5uaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D" 
                  alt="office content 2"></img>
              </div>
          </div>

    </div>
  )
}

export default Contact