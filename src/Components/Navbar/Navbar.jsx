import React,{useState,useRef} from 'react'
import './style.css'
import logo from '../../Assets/logo.svg'
import { Link } from 'react-router-dom'
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  return (
    <>
    <div id='Navbar'>
      <div id='Logo'>
      <ul>
        <li>
        <Link className='Navigation_Links' to='/'> <img src={logo} alt='Logo'></img></Link>
         
        </li>
        
      </ul>
      </div>
      <div className='Navigation_Links_Div'>
        <ul>
        <li><Link className='Navigation_Links' to='/'>Home</Link></li>
        <li><Link className='Navigation_Links' to='/About'>About</Link></li>
        <li><Link className='Navigation_Links' to='/Work'>Work</Link></li>
        <li><Link className='Navigation_Links' to='/Contact'>Contact</Link></li>
        </ul>
      </div>
       <Link className='Lets_Talk_Button' to='/Contact'>Lets Talk</Link>
      
    </div>
    <div id='Navbar2'>
    <div id='Logo'>
      <ul>
        <li>
        <Link className='Navigation_Links2' to='/'> <img src={logo} alt='Logo'></img></Link>
        </li>
        
      </ul>
    </div>
    <Hamburger  toggled={isOpen} toggle={setOpen} />
    
    </div>
    <AnimatePresence> {isOpen && (
        <div className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
        <motion.div
            initial={{ marginTop: -100 }}
            animate={{ marginTop: 0 }}
            exit={{ marginTop: -400 }}
            transition={{ duration: 0.8 }}
            className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20"
          > <ul className="grid gap-2">
            {
          <ul className='Navigation_Link2_ul'>
          <li><Link className='Navigation_Links2' to='/'><span>Home</span></Link></li>
          <li><Link className='Navigation_Links2' to='/About'><span>About</span></Link></li>
          <li><Link className='Navigation_Links2' to='/Work'><span>Work</span></Link></li>
          <li><Link className='Navigation_Links2' to='/Contact'><span>Contact</span></Link></li>
          </ul>
            }
          </ul>
          </motion.div> 
        </div>
      )}</AnimatePresence>
    </>
  )
}

export default Navbar
