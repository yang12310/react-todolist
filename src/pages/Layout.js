import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar";
const Layout = () => {
  return (
    <div>
      <MenuBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
