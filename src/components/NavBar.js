import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="buttons">
        <button className="account-button">Account</button>
        <button className="your-plans-button">Your Plans</button>
        <button className="friends-plans-button">Friend's Plans</button>
      </div>
    </nav>
  );
};

export default NavBar;
