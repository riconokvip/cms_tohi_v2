import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routers/sections";
import { RecoilRoot } from "recoil";
import "./App.css";
import { ConfigProvider } from "antd";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
       <ReactQueryDevtools initialIsOpen={false} />
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: "#ff0505",
                borderRadius: 8,
              },
            },
            token: {
              colorPrimary: "#ff0505",
              borderRadius: 8,
            },
          }}
        >
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
    </ConfigProvider>
      </QueryClientProvider>
  );
}

export default App;
