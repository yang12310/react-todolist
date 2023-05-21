import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar";
const Layout = ({isLoggedIn, setIsLoggedIn})  => {
  return (
    <div>
      <MenuBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
