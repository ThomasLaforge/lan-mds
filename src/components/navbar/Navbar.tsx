"use client";

import "./Navbar.scss";

import { useRouter } from "next/navigation";
import House from "../icons/House";
import Registration from "../icons/Registration";
import Results from "../icons/Results";
import Tournament from "../icons/Tournament";

interface NavLinkProps extends React.PropsWithChildren {
  to: string;
  className?: string | ((props: { isActive: boolean }) => string);
}

const NavLink = ({children, to, className}: NavLinkProps) => {
  const router = useRouter();
  return <div className={"nav-link " + (typeof className === "function" ? className({ isActive: false }) : className)}
    onClick={() => {
      router.push(to);
    }}
  >
    {children}
  </div>;
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <div className="icon-wrapper">
          <House />
        </div>
        <span>Accueil</span>
      </NavLink>

      <NavLink
        to="/register"
        className={({ isActive }) =>
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <div className="icon-wrapper">
          <Registration />
        </div>
        <span>Inscription</span>
      </NavLink>

      <NavLink
        to="/tournament"
        className={({ isActive }) =>
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <div className="icon-wrapper">
          <Tournament />
        </div>
        <span>Tournoi</span>
      </NavLink>

      <NavLink
        to="/results"
        className={({ isActive }) =>
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <div className="icon-wrapper">
          <Results />
        </div>
        <span>Résultats</span>
      </NavLink>
    </nav>
  );
}
