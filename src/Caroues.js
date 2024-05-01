import car from './assests/4kimage.jpg'
import { motion } from 'framer-motion'
import { Button } from "@material-tailwind/react";
export function CaroContent() {
    return (
        <>
            <div className='realtive overflow-auto'>
                <img src={car} className='w-screen'></img>
                <motion.div
                    initial={{ opacity : 0, y: 75 }}
                    animate={{ opacity : 1, y: 0 }}
                    transiton={{ duration: 2 ,type: "spring",
                    stiffness: 150}}
                    className='header font-Merriweather absolute top-52 text-white text-8xl font-semibold'>
                    <h1>A Place To</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity : 0, y: 75 }}
                    animate={{ opacity : 1, y: 0 }}
                    transiton={{ duration: 1 }}
                    className='font-Merriweather absolute left-80 top-72 text-white text-8xl font-semibold'>
                    <h1>Get Your Dream Car</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity : 0, y: 75 }}
                    animate={{ opacity : 1, y: 0 }}
                    transiton = {{ delay : 1.5, duration : 1.5 , type : "spring" }}
                    className='absolute leftt'
                    >
                    <Button variant="outlined" color='blue' className='font-semibold border-2'>View More</Button>
                </motion.div>
            </div>
        </>

    )
}