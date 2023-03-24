import { Outlet, Link } from "react-router-dom";

const ProjectRoutes = () => {
  return (
    <div>
      <nav className="links">
        <Link to="/unit-converter" className="link">
            Conversor de unidades
        </Link>
        <Link to="/color-palette" className="link">
            Paleta de colores
        </Link>
      </nav>

      <Outlet />
    </div>
  )
};

export default ProjectRoutes;