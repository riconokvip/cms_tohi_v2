import {
  ApartmentOutlined,
  AuditOutlined,
  BankOutlined,
  CalendarOutlined,
  ClusterOutlined,
  DesktopOutlined,
  DiscordOutlined,
  DropboxOutlined,
  FileOutlined,
  FileProtectOutlined,
  FlagOutlined,
  GiftOutlined,
  MailOutlined,
  MessageOutlined,
  PayCircleOutlined,
  PieChartOutlined,
  PoundOutlined,
  ProfileOutlined,
  SketchOutlined,
  TeamOutlined,
  TransactionOutlined,
  UnorderedListOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  let row = {
    label,
    key,
    icon,
    children,
  };

  if (Array.isArray(children) && children.length > 0) {
    let num = 1;
    row.children = children.map((element) => {
      return getItem(
        element.label,
        element.key ?? `${key}_ ${num++}`,
        element.icon,
        element.children
      );
    });
  }

  return row;
}

const structure = [
  {
    label: "QUẢN LÝ NGƯỜI DÙNG",
    key: "user_group",
    children: [
      { label: "Người dùng", key: "users", icon: <UserOutlined /> },
      {
        label: "Phát trực tiếp",
        key: "live-streams",
        icon: <VideoCameraOutlined />,
      },
      {
        label: "Báo cáo người dùng",
        key: "report",
        icon: <FlagOutlined />,
      },
      {
        label: "Thông tin ứng tuyển",
        key: "recruitments",
        icon: <AuditOutlined />,
      },
    ],
  },
  {
    label: "QUẢN LÝ MẠNG LƯỚI",
    key: "network_group",
    children: [
      { label: "Loại mạng lưới", key: "networks", icon: <ApartmentOutlined /> },
      {
        label: "Yêu cầu tạo mạng lưới",
        key: "request-create-network",
        icon: <ClusterOutlined />,
      },
      {
        label: "Danh sách mạng lưới",
        key: "list-networks",
        icon: <UnorderedListOutlined />,
      },
    ],
  },
  {
    label: "QUẢN LÝ GIAO DỊCH",
    key: "transaction_group",
    children: [
      {
        label: "Giao dịch tặng quà",
        key: "transaction-donations",
        icon: <PayCircleOutlined />,
      },
      {
        label: "Giao dịch nạp rút",
        key: "transaction-admin",
        icon: <TransactionOutlined />,
      },
      { label: "Ngân hàng", key: "banks", icon: <BankOutlined /> },
      {
        label: "Gói nạp kim cương",
        key: "diamonds-package",
        icon: <DropboxOutlined />,
      },
    ],
  },
  {
    label: "QUẢN LÝ QUÀ TẶNG",
    key: "gift_group",
    children: [
      { label: "Quà tặng", key: "gifts", icon: <GiftOutlined /> },
      { label: "Loại quà tặng", key: "gift-types", icon: <GiftOutlined /> },
    ],
  },
  {
    label: "QUẢN LÝ TRÒ CHƠI",
    key: "game_group",
    children: [
      { label: "Trò chơi", key: "games", icon: <DiscordOutlined /> },
      { label: "Loại trò chơi", key: "game-types", icon: <DiscordOutlined /> },
    ],
  },
  {
    label: "QUẢN LÝ CHUNG",
    key: "general_group",
    children: [
      {
        label: "Tin nhắn hệ thống",
        key: "system-messages",
        icon: <MessageOutlined />,
      },
      { label: "Chính sách", key: "policies", icon: <FileProtectOutlined /> },
      { label: "Mẫu email", key: "email-template", icon: <MailOutlined /> },
      { label: "Sự kiện", key: "events", icon: <CalendarOutlined /> },
    ],
  },
];

export const items = structure.map((item) => {
  return getItem(item.label, item.key, item.icon, item.children);
});
