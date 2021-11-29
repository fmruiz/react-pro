import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import Logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={Logo} alt="logo" />
          <ul>
            {routes.map((r, i) => (
              <li key={i}>
                <NavLink
                  to={r.to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {r.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {routes.map((r, i) => (
            <Route path={r.path} element={<r.Component />} />
          ))}
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
