import HeartSVG from "./heartImg";
import CartSVG from "./cartImg";
import StylizeoIcon from "./stylizeoIcon";
import DefaultAva from "./default_ava";


const MenuBar = () => {
    return (
        <>
            <nav className="flex justify-between text-white w-screen">
                <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                    <a className="text-3xl font-bold font-heading" href="#">
                        <StylizeoIcon className="h-9"/>
                        {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
                    </a>
                    {/* <!-- Nav Links --> */}
                    <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <li><a className="hover:text-gray-200 " href="#">Home</a></li>
                        <li><a className="hover:text-gray-200" href="#">Explore</a></li>
                        <li><a className="hover:text-gray-200" href="#">Contact Us</a></li>
                        <li><a className="hover:text-gray-200" href="#">About</a></li>
                    </ul>
                    {/* <!-- Header Icons --> */}
                    <div className="hidden xl:flex items-center space-x-5 items-center">
                        <a className="hover:text-gray-200 flex gap-x-2" href="#">
                            <CartSVG /> 
                            <div className="">cart</div>
                        </a>
                        <a className="flex items-center hover:text-gray-200" href="#">
                            <DefaultAva />
                        </a>

                    </div>
                </div>
                {/* <!-- Responsive navbar --> */}
                
                <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </a>
            </nav>
        </>
    )
}

export default MenuBar;