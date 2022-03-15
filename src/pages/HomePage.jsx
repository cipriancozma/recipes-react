import React from 'react'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'
import {motion} from "framer-motion";

function HomePage() {
    return (
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
        >
            <Popular />
            <Veggie />
        </motion.div>
    )
}

export default HomePage
