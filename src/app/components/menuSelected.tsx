import * as motion from "motion/react-client";
import compoStyle from "../styles/components.module.css";

export default function selectedBox(){
    return (
        <motion.div
        animate={{rotate:360}}
        className={compoStyle.selectedBox}
        transition={{type:"spring",duration:1, repeat: Infinity}}>
        </motion.div>
    );
}