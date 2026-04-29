import React from 'react'
import { Link } from 'react-router'
import { usePuterStore } from "~/lib/puter"

const Navbar = () => {
  const { auth } = usePuterStore();

  return (
  <nav className="navbar flex items-center justify-between">
    
    {/* Left side */}
    <Link to="/">
      <p className="text-2xl font-bold text-gradient">Rezumo AI</p>
    </Link>

    {/* Right side */}
    <div className="flex items-center gap-3">
      <Link to="/upload" className="primary-button w-fit">
        Upload Resume
      </Link>

      {auth.isAuthenticated && (
        <button className="primary-button w-fit" onClick={auth.signOut}>
          Logout
        </button>
      )}
    </div>

  </nav>
)
}

export default Navbar
