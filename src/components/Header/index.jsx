import React from "react";
import { Logo } from "../Logo";

import './styles.css';

function Header({ children }) {
  return (
    <header>
      {children}
    </header>
  )
}

export { Header };