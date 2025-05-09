"use client"

import Link from "next/link";
import DarkModeSwitch from "../components/darkModeSwitch";
import {motion} from 'framer-motion';
import {usePathname} from 'next/navigation';
import compoStyle from '../styles/components.module.css';

const navItems = [
  { name: 'Home', path: '/' ,id:1},
  { name: 'About', path: '/about',id:2 },
  { name: 'Skills', path: '/skills',id:3 },
  { name: 'Projects', path: '/projects',id:4 },
  { name: 'Acheivements', path: '/acheivements',id:5 },
];

function NavBar(){
    const pathName=usePathname();

    return(
        <header className="nav">
        <ol className="flex flex-row items-center justify-center py-6">
          {navItems.map((item)=>(
          <li className="mx-4 text-center text-xl" key={item.id}>
            <Link href={item.path}>
            {pathName!== item.path && (
              <p className={compoStyle.tabNames}>{item.name}</p>
            )}
            {pathName === item.path && (
                <motion.div
                  layoutId="activeIndicator" 
                  className={compoStyle.selectedBox}
                  initial={false} 
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, type:"spring"}}
                  exit={{ opacity: 0 }}
                >
                  <p style={{color:"#11111b"}} className={compoStyle.tabNames}>{item.name}</p>
                  </motion.div>
              )}
            </Link></li>
          ))}
        <DarkModeSwitch/>
        </ol>
    </header>
    );
}
export default NavBar;