import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="navbar">
      <button className="headname">Vortex</button>
      <button className="home">Home</button>
      <button className="explore">Explore</button>
      <button className="products">Products</button>
      <button
        className="womens"
        style={{ marginRight: showSearch ? '330px' : '480px' }}
      >
        Women's
      </button>

      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
        <button className="search" onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            style={{
              padding: '5px 0',
              width: '150px',
              border: 'none',
              borderBottom: '2px solid #000',
              outline: 'none',
            }}
          />
        )}
      </div>
    </div> // Closing div for navbar
  );
}

export default Navbar;
