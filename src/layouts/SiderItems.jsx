import {
  PieChartOutlined,
  HomeOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    children,
  };
}

export const items = [
  getItem("Trang chủ", "dashboard", <HomeOutlined /> ),
  getItem("Nguời dùng", "users", <PieChartOutlined />),
 
];
