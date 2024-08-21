'use client'

import { fadeIn } from '@/utils/motion-transition'
import {motion} from 'framer-motion'
import React from 'react'
interface MotionTransitionProps{
    children: React.ReactNode
    className?: string ;
    position: 'right' | 'botton'
}


const MotionTransition = (props:MotionTransitionProps) => {
    const {children, position, className} = props
    return ( 
        <motion.div
            variants={fadeIn(position)}
            initial = 'hidden'
            animate= "visible"
            exit = 'hidden'
            className={className}

        >
            {children}
        </motion.div>
     );
}
 
export default MotionTransition;