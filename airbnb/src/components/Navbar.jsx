import { Button } from "./ui/button"
import Link from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <header className="border-b px-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-rose-500 text-2xl font-bold"><img src="./Logo.png" alt="logo" width="60" height="60" className="inline-block" /></div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">Become a host</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Help</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Sign up</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Log in</a>
            <Link to='/shortlist'>Shortstay</Link>
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
