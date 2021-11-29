import { Suspense } from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import Logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
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
              <Route path={r.path} element={<r.Component />} key={i} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
