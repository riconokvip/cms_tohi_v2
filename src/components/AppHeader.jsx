import { useAuth } from "../context/AuthContext";
import theme from "antd/lib/theme";
import TopSearchBar from "./TopSearchBar";

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
        <TopSearchBar />
      </Layout.Header>
    )
  );
}

export default AppHeader;
