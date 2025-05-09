"use client"

import * as motion from "motion/react-client";
import { useState } from "react";
import style from "../styles/components.module.css";

export default function DarkModeSwitch() {
    const [isOn, setIsOn] = useState(true)

    const toggleSwitch = () => setIsOn(!isOn)

    return (
        <div className={style.switchContainer}>
            <svg width="2rem" className="border-0 mr-2" height="2rem" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#6c7086" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <path d="M24,44c8.002,0.093,15.587-5.043,18.532-12.469l-2.605-2.605C26.94,34.271,13.732,21.053,19.073,8.073l-2.604-2.605 C-3.688,14,2.123,43.714,24,44z"></path> </g> </g></svg>
        <button
            className={style.switchInnerBox}
            style={{
                justifyContent: "flex-" + (isOn ? "start" : "end"),
            }}
            onClick={toggleSwitch}
        >
            <motion.div
                className={style.switchHandle}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.4,
                    bounce: 0.5,
                }}
            />
        </button>
        </div>
    )
}
