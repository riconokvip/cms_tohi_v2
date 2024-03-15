import { ChromeOutlined, FormOutlined, LaptopOutlined, MobileOutlined } from "@ant-design/icons";
import { Image, Space, Typography } from "antd";

export const columnsEvents= [
    {
        key:"name",
        dataIndex: "name",
        title: "Tên sự kiện",
    },
    {
        key: "imageURL",
        dataIndex: "imageURL",
        title: "Hình ảnh",
        align: "center",
        render: (value) => {
            return (
            <Image
                className="max-h-[50px]"
                src={
                value && value !== undefined && value !== null
                    ? value
                    : ""
                }
            />
            );
        },
    },
    {
      key:"link",
      dataIndex: "link",
      title: "Đường dẫn sự kiện",
      render: (link) => {
        return (
          <Typography.Link ellipsis target="_blank" href={`https://${link}`}>
            {link}
          </Typography.Link>
        );
      },
    },
    {
      key:"deviceType",
      dataIndex: "deviceType",
      title: "Thiết bị sử dụng",
      align: "center",
      width: 100,
      render: (deviceType) => {
        return (
          <span>
            {deviceType === 0
              ? <ChromeOutlined />
              : deviceType === 1
                ? <MobileOutlined />
                : <LaptopOutlined />
            }
          </span>
        );
      },
    },
    {
      key:"description",
      dataIndex: "description",
      title: "Mô tả",
    },
    {
        key:"action",
        dataIndex: "action",
        title: "Hành động",
        render: (_, record) => {
            return (
            <Space size="middle">
                <FormOutlined
                className="text-[18px] p-[6px] rounded-[4px]"
                title="Chỉnh sửa"
                />
            </Space>
            );
      },
    },
  ]