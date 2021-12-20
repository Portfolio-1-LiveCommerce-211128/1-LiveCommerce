import { Outlet, Link } from "react-router-dom";

const MainNaviButton = () => {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="login">Login</Link>
      </li>
    </>
  );
};

export default MainNaviButton;
