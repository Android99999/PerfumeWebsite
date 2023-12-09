// react-scroll
import { Link } from "react-scroll";

const NavLink = ({ children, to, offset = -50, mobileMenu = false, hide}) => {
  const className = mobileMenu 
  ? 'text-lg font-black cursor-pointer w-full text-center relative group transition-all duration-300 hover:duration-1000'
    : 'text-lg font-black lg:text-xl p-2 cursor-pointer  relative group transition-all duration-300 hover:duration-1000';



  const underlineClassName =
    'mt-3 absolute inset-x-0 bottom-0 h-0.5 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform ';

  return (

  
  <Link 
    to={to} 
    spy={true}
    smooth={true}
    offset={offset}
    duration={1000}
    className={className}
    hide = {hide}
  >
    {children}
    <span className={hide ? "" :  underlineClassName} ></span>
  </Link>
  )
};

export default NavLink;