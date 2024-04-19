import { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-10">
        <div className="flex justify-between items-center">
          <div className="hidden md:block">
            <NavLink to="/" className="hover:underline">Home</NavLink>
            <NavLink to="/cham-diem" className="ml-4 hover:underline">Chấm điểm</NavLink>
            <NavLink to="/xem-diem" className="ml-4 hover:underline">Xem điểm</NavLink>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden fixed mt-4 left-0 w-30vw h-full bg-gray-800 bg-opacity-95 z-20">
            <div className="flex flex-col justify-start items-start p-4 h-full">
              <NavLink to="/" className="text-lg text-white hover:underline" onClick={toggleMenu}>Home</NavLink>
              <NavLink to="/cham-diem" className="text-lg text-white mt-4 hover:underline" onClick={toggleMenu}>Chấm điểm</NavLink>
              <NavLink to="/xem-diem" className="text-lg text-white mt-4 hover:underline" onClick={toggleMenu}>Xem điểm</NavLink>
            </div>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
