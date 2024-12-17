import { assets } from "../assets/asset";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faMagnifyingGlass }from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    return(
        <div className="flex items-center justify-between py-5 font-medium bg-inherit" >
            <img src={assets.logo_icon} className="w-55 h-16" />

            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTIONS </p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>
            </ul>


            
            <div className='flex items-center gap-6'>
            <FontAwesomeIcon icon={faMagnifyingGlass}
            className='text-[20px]' />

            <Link to='/cart' className='relative'>
            <FontAwesomeIcon icon={faCartPlus}
            className='text-[20px]'/>
             <p className='absolute left-[15px] top-[-7px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
            </Link>
           

            </div>
        </div>
    )
}