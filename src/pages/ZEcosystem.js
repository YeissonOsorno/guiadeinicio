import React from 'react'

const ZEcosystem = () => {
   
   return ( 
       <div className='background bg-fixed bg-gray-700 bg-opacity-50'>

           {/* Primeros pasos video bienvenida */}
           <div class="grid grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-1 ">
               <div className='py-5 ml-12 md:py-10 md:ml-10 justify-items-center'>
                   <p className=' flex text-3xl md:text-5xl font-extrabold md:font-bold text-white'>ECOSISTEMA Z</p>                   
               </div> 
               {/* <div className='relative  overflow-auto p-8'>                
                   <iframe className='w-full aspect-auto rounded-lg shadow-lg' src="https://player.vimeo.com/video/734924234" title='1'  frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                   
                   </iframe>
               </div>       */}
           </div>

           <div className='grid grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-1 ml-5 md:ml-0'>
              <div className='py-5 md:ml-0 justify-items-end'>
               <p className='flex text-3xl md:text-5xl font-semibold text-yellow-600'>CÓMO INICIAR EN Z ACADEMY 🔥</p>
              </div>
           </div>

           

           {/* que en z academy */}
           <div class="grid grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-3 justify-between ">
               <div className='py-5 ml-16 md:py-36 md:ml-10'>
                   <p className='text-3xl md:text-5xl font-semibold justify-center text-white p-2'>¿Qué hay en Z Academy? Primer ingreso.  </p>
                   <p className='text-xl md:text-xl font-normal justify-center text-white p-2'>Video  </p>
               </div>     
               <div className='relative overflow-auto p-8 flex-shrink-2 col-span-2'>     
                <iframe className='w-full aspect-square rounded-lg shadow-lg' src="https://www.youtube.com/embed/hzag9MIwjEM" title="YouTube video player 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>           
                   {/* <iframe className='w-full aspect-square rounded-lg shadow-lg' src="https://player.vimeo.com/video/740949552"  title='4' frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                   
                   </iframe> */}
               </div>        
                           
           </div>

           {/* inscribirse en z */}
           <div class="grid grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-3 justify-between ">
               <div className='py-5 ml-16 md:py-36 md:ml-10'>
                   <p className='text-3xl md:text-5xl font-semibold justify-center text-white p-2'>¿Cómo me inscribo para las clases y operativas en vivo de la academia?  </p>
                   <p className='text-xl md:text-xl font-normal justify-center text-white p-2'>Video  </p>
               </div>     
               <div className='relative  overflow-auto p-8 col-span-2'>                
               <iframe className='w-full aspect-square rounded-lg shadow-lg' src="https://www.youtube.com/embed/dRrQQCuliaA" title="YouTube video player 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>           
               </div>        
               
           </div>

           {/* mircrolearning */}
           <div class="grid grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-3 justify-between ">
               <div className='py-5 ml-16 md:py-36 md:ml-10  '>
                   <p className='text-3xl md:text-5xl font-semibold justify-center text-white p-2'>¿Que encuentro en microlearning?  </p>
                   <p className='text-xl md:text-xl font-normal justify-center text-white p-2'>Video  </p>
               </div>     
               <div className='relative  overflow-auto p-8 col-span-2'>                
               <iframe className='w-full aspect-square rounded-lg shadow-lg' src="https://www.youtube.com/embed/su1Jfk8-hTQ" title="YouTube video player 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

               </iframe>
               </div>        
                
           </div>

           {/* clases grabdas */}
           <div class="grid grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-3 justify-between ">
               <div className='py-5 ml-16 md:py-36 md:ml-10'>
                   <p className='text-3xl md:text-5xl font-semibold justify-center text-white p-2'>¿Dónde están grabadas las clases privadas y operativas en vivo?  </p>
                   <p className='text-xl md:text-xl font-normal justify-center text-white p-2'>Video </p>
               </div>     
               <div className='relative  overflow-auto p-8 col-span-2'>                
                   <iframe className='w-full aspect-square rounded-lg shadow-lg' src="https://www.youtube.com/embed/tvh-mYco1QE" title="YouTube video player 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                
                </iframe>
               </div>        
               
           </div>

           

       </div>
       
     
    );
}
 
export default ZEcosystem;