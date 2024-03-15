import { Breadcrumb } from "antd";
import { useAuth } from "../context/AuthContext";
import { Outlet } from "react-router-dom";

function AppContent({ Layout }) {
  const { isAuthenticate } = useAuth();

  return (
    <Layout.Content style={{ margin: "0 16px" }}>
      {localStorage.getItem("user") && (
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[{ title: "User" }, { title: "Bill" }]}
        />
      )}

      <Outlet />
    </Layout.Content>
  );
}

export default AppContent;
