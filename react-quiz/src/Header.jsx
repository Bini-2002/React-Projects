import { FaReact } from "react-icons/fa";
import React from "react";

function Header() {
  return (
    <header className='app-header'>
      <FaReact size="5rem" color="#61DAFB" />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;