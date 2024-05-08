import React, { useState } from 'react';
import { Link } from 'gatsby';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

  return (
    <div className='menu-button'>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button> {/* Hamburger button */}
      {isOpen && (
        <nav>
          <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/suggestions" onClick={() => setIsOpen(false)}>Suggestions</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
