import React from 'react';

const NavLinkButton = ({ link, label }) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <button className="nav-button" onClick={handleClick}>
      <span className="bold">/ </span>{label}
    </button>
  );
};

export default NavLinkButton;
