import { useAuth } from "../context/AuthContext";
import theme from "antd/lib/theme";

function AppHeader({ Layout }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { isAuthenticate } = useAuth();
  return (
    localStorage.getItem("user") && (
      <Layout.Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      />
    )
  );
}

export default AppHeader;
