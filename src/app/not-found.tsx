import Image from "next/image";
import Link from "next/link";
export default function Err404(){
    return(

        <main className="w-[100vw] h-[100vh] flex items-center justify-center relative bottom-[10rem]">
            <div className="flex flex-col items-center justify-center relative w-[40vw] h-[40vh]">
                <div className="relative w-[20vw] h-[20vh]">
                    <Image alt="404 page not found!" src="/404.gif" style={{objectFit:"fill"}} fill/>
                </div>
                <h1 className="text-3xl text-center text-white">Page not found:(  <br/> Maybe checkout the <Link href="/" className="text-[var(--primary)]">home page</Link> instead?</h1>
            </div>
        </main>
    );
}