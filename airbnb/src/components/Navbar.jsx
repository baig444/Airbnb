import { Button } from "./ui/button"
import {Link} from "react-router-dom"

const Navbar = () => {
  if (location.pathname === "/" || location.pathname === "/dashboard" || location.pathname === "/auth") {
    return null;
  }
  return (
    <div className="absolute top-0 left-0 z-10 w-full">
      <header className="px-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* <img src="./night.png" alt="logo" width="150" height="90" className="inline-block object-cover" /> */}
          <h1 className={`text-3xl font-bold font-[Mazius] ${location.pathname === "/explore/shortstay" || location.pathname === "/explore/longstay" ? "text-white" : "text-black"}`}>Night Suites</h1>
          <nav className={`hidden md:flex space-x-4 font-semibold ${location.pathname === "/explore/shortstay" || location.pathname === "/explore/longstay" ? "text-white" : "text-black"}`}>
            <a href="#">Become a host</a>
            <a href="#" >Help</a>
            <a href="#" >Sign up</a>
            <a href="#">Log in</a>
            <Link to='/properties'>PropertiesList</Link>
          </nav>
          <Button variant="ghost" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
