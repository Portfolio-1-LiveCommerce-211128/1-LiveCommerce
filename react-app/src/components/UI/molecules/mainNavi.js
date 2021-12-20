import MainNaviButton from "../atoms/mainNaviButton";
import { Outlet, Link } from "react-router-dom";

const MainNavi = () => {
  return (
    <>
      <nav>
        <ul>
          <MainNaviButton />
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default MainNavi;
