"use client"

import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return ( 
        <div className='z-20 w-full bg-darkBg/60'>
            <div className='z-20 grid items-center h-full lg:pl-[500px] text-4xl font-semibold py-20  md:py-0 md:grid-cols-2'>
                <div className='flex flex-col justify-center  text-center'>
                    <h1 className='mb-5 text-2xl leading-tight text-center md:text-4xl md:mb-10'>
                        Si puedes pensarlo,
                        <TypeAnimation

                        sequence={[
                            "puedes programarlo",
                            1000,
                            "puedes crearlo",
                            1000,
                            "puedes hacerlo",
                            1000,
                            "puedes desarrollarlo",
                            1000,
                                         ]}
                                         wrapper='span' speed={50}
                                         repeat={Infinity}
                                         className='font-bold text-secondary block'
                                         />


                    </h1>
                    <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8'>Como desarollador frontend junior, espero poder dedicarme a combinar diseños y funcionalidades para crear paginas que den una experiencias digitales impresionantes y accesibles </p>
                    <div className='flex items-center justify-center gap-3 md:justify-center md:gap-10'>
                        <Link href={'/portfolio'} className='px-3 py-2 transition-all border-2 cursor-pointer text-xl w-fit rounded-xl hover:shadow-xl hover:shadow-white/50 '>
                        Ver proyectos
                        </Link>
                        <Link href={'https://wa.me/qr/V5T7NKA2T6GXH1'} className='px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-xl w-fit rounded-xl hover:shadow-xl hover:shadow-secondary '>
                        Contacta conmigo
                        </Link>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Introduction;