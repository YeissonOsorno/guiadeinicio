import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
    return ( 
        <div class="h-screen w-full flex flex-col justify-center items-center background-home">
            <h1 class="text-6xl p-2 md:text-9xl font-extrabold text-white ">BIENVENIDOS</h1>
            <div class="bg-yellow-600 px-6 text-sm mb-12 md:mb-28  rounded md:rotate-12 absolute text-white">
                Guia de inicio
            </div>

            {/* guia de inicio button */}
            <button class="mt-10">
                <button  class=" rounded-lg relative inline-block text-sm font-medium text-white group active:text-blue-500 focus:outline-none focus:ring">
                <span class="  rounded-lg absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>
                    <span class="  rounded-lg relative block px-8 py-3 bg-blue-500 "> <Link to="/primerospasos">Primeros pasos</Link></span>
                </button>
            </button>

            {/* ecosistema zeta */}
            <button class="mt-5">
                <button  class=" rounded-lg relative inline-block text-sm font-medium text-white group active:text-purple-500 focus:outline-none focus:ring">
                    <span class="  rounded-lg absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-purple-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>
                    <span class="  rounded-lg relative block px-8 py-3 bg-purple-700 "> <Link to="/ecosistemazeta">Ecosistema Zeta</Link></span>
                </button>
            </button>
            
        </div>
    );
}
 
export default Home;