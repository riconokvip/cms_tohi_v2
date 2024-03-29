import { useAuth } from "../context/AuthContext";
import theme from "antd/lib/theme";

function AppHeader({ Layout }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { isAuthenticate } = useAuth();
  return (
    isAuthenticate && (
      <Layout.Header
        style={{
          padding: 0,
          paddingLeft: 10,
          background: colorBgContainer,
        }}
      >
        Top Search Bar and User Logout
      </Layout.Header>
    )
  );
}

export default AppHeader;
