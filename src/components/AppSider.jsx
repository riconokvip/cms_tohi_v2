import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import Menu from "antd/lib/menu";
import { items } from "../layouts/SiderItems";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";

function AppSider({ Layout }) {
  const [collapsed, setCollapsed] = useState(false);
  const { isAuthenticate } = useAuth();
  const location = useLocation();
  
  const [
    {
      route: { path },
    },
  ] = matchRoutes([{ path: location.pathname }], location);

  const route = `${path
    .split("/")
    .filter((a) => !!a)
    .shift()}`;

  const navigate = useNavigate();

  function handleClick({ key }) {
    if (!key.includes("_group")) {
      navigate(`/${key}`);
    }
  }

  return (
    localStorage.getItem("user")&& (
      <Layout.Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={250}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          selectedKeys={[route]}
          mode="inline"
          items={items}
          onClick={handleClick}
        />
      </Layout.Sider>
    )
  );
}

export default AppSider;
