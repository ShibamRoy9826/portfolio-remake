import Link from "next/link";

function NavBar(){
    return(
        <header className="nav">
    <ol className="flex flex-row items-center justify-center py-6">
      <li className="mx-4 text-center text-xl"><Link href="/">Home</Link></li>
      <li className="mx-4 text-center text-xl"><Link href="/about">About</Link></li>
      <li className="mx-4 text-center text-xl"><Link href="/skills">Skills</Link></li>
      <li className="mx-4 text-center text-xl"><Link href="/projects">Projects</Link></li>
      <li className="mx-4 text-center text-xl"><Link href="/acheivements">Acheivements</Link></li>
    </ol>
    </header>
    );
}
export default NavBar;