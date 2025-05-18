"use client"
import {usePathname} from "next/navigation";
import { AnimatePresence,motion } from "framer-motion";

const PageWrapper=({children}:{children:React.ReactNode})=>{
    const p=usePathname();

    return(
        <AnimatePresence mode="wait">
            <motion.div
            key={p}
            animate={{opacity:[0,1]}}
            transition={{duration:1}}
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -20 }}
            // transition={{ duration: 0.3 }}
            className="w-full h-full"
            >
                {children}

            </motion.div>

        </AnimatePresence>
    )
}
export default PageWrapper;