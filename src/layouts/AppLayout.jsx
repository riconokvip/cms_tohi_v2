import Layout from "antd/lib/layout";
import AppSider from "../components/AppSider";
import AppHeader from "../components/AppHeader";
import AppContent from "../components/AppContent";

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppSider Layout={Layout} />
      <Layout>
        <AppHeader Layout={Layout} />
        <AppContent Layout={Layout} />
      </Layout>
    </Layout>
  );
};
export default AppLayout;
