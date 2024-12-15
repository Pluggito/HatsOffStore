import { assets } from "../assets/asset";
import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="flex items-center justify-between py-5 font-medium bg-inherit" >
            <img src={assets.logo_icon} className="w-55 h-16" />

            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
                </NavLink>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>COLLECTIONS </p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
                </NavLink>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
                </NavLink>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
                </NavLink>
            </ul>
        </div>
    )
}