import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="mainNavi">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="login">Login</Link>
                    </li>
                    <li>
                        <Link to="signup">Sign up</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Layout;