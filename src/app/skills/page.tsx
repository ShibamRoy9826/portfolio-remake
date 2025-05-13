import ProgressBar from "../../components/progressBar";
import Image from "next/image";
// import {useEffect, useState} from "react";

function Skills(){

    return(
        <div className="flex w-full h-full flex-col justify-center items-center">
            <div className="flex flex-col items-center rounded-xl p-12 justify-center bg-[var(--bg3)]">
                <h1 className="text-center text-2xl">Programming Languages</h1>
                <ul>
                    <li className="flex flex-col items-center justify-center">
                        <div className="flex flex-row items-center justify-center">
                            <Image src="/python.png" alt="python" height={30} width={30}/>
                            <p className="m-4 text-center text-[var(--fg2)] text-lg">Python</p>
                        </div>
                        <ProgressBar full="40vw" percent={90}/>
                    </li>
                    <li className="flex flex-col items-center justify-center">
                        <div className="flex flex-row items-center justify-center">
                            <Image src="/cpp.png" alt="cpp" height={30} width={30}/>
                            <p className="m-4 text-center text-[var(--fg2)] text-lg">C++</p>
                        </div>
                        <ProgressBar full="40vw" percent={40}/>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Skills;