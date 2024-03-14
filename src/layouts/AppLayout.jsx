import { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, matchRoutes, useLocation, useNavigate } from "react-router-dom";
import { items } from "./SiderItems";
// import { useAuth } from "../context/AuthContext";

const { Header, Content, Footer, Sider } = Layout;

const AppLayout = () => {
  const {  token: { colorBgContainer },} = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const auth = localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user') || '{}') : null;

  const navigate=useNavigate()
  const onClick = (e) => {
    navigate(`/${e?.key}`)
  };

  useEffect(()=>{
    if(auth===null){
      navigate('/login')
    }
  },[auth])
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


  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      {auth!==null && (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            onClick={onClick}
            theme="dark"
            selectedKeys={[route]}
            mode="inline"
            items={items}
          />
        </Sider>
      )}

      <Layout>
        { auth!==null&& (
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
        )}
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {auth!==null&& (
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
          )}

          <Outlet />
        </Content>

        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
