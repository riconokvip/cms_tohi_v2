import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import Menu from "antd/lib/menu";
import { items } from "../layouts/SiderItems";
import { useNavigate } from "react-router-dom";

function AppSider({ Layout }) {
  const [collapsed, setCollapsed] = useState(true);
  const { isAuthenticate } = useAuth();
  const navigate = useNavigate();

  function handleClick({ key }) {
    if (!key.includes("_group")) {
      navigate(`/${key}`);
    }
  }

  return (
    isAuthenticate && (
      <Layout.Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={250}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleClick}
        />
      </Layout.Sider>
    )
  );
}

export default AppSider;
