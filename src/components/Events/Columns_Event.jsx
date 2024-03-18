import { Button, Image, Popconfirm, Space, Typography } from "antd";
import {
  ChromeOutlined,
  DeleteFilled,
  FormOutlined,
  LaptopOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { useSetRecoilState } from "recoil";
import { typeEventState } from "../../recoils/atoms";
import { useDeleteEvent } from "../../features/Events/useEvents";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY_EVENT } from "../../services/queries/queriesKeyConts";
export const columnsEvents = [
  {
    key: "name",
    dataIndex: "name",
    title: "Tên sự kiện",
  },
  {
    key: "imageURL",
    dataIndex: "imageURL",
    title: "Hình ảnh",
    align: "center",
    render: (value) => (
      <Image className="max-h-[50px]" src={value ? value : ""} />
    ),
  },
  {
    key: "link",
    dataIndex: "link",
    title: "Đường dẫn sự kiện",
    render: (link) => (
      <Typography.Link ellipsis target="_blank" href={`https://${link}`}>
        {link}
      </Typography.Link>
    ),
  },
  {
    key: "deviceType",
    dataIndex: "deviceType",
    title: "Thiết bị sử dụng",
    align: "center",
    width: 100,
    render: (deviceType) => (
      <span>
        {deviceType === 0 ? (
          <ChromeOutlined />
        ) : deviceType === 1 ? (
          <MobileOutlined />
        ) : (
          <LaptopOutlined />
        )}
      </span>
    ),
  },
  {
    key: "description",
    dataIndex: "description",
    title: "Mô tả",
  },
  {
    key: "action",
    dataIndex: "action",
    title: "Hành động",
    render: (_, record) => {
      return (
        <Space className="flex items-center">
          <EditForm record={record} />
          <DeleteEvent record={record} />
        </Space>
      );
    },
  },
];

const EditForm = (record) => {
  const setTypeModal = useSetRecoilState(typeEventState);
  return (
    <Button
      size="default"
      title="Chỉnh sửa"
      onClick={() =>
        setTypeModal((prev) => ({
          ...prev,
          open: true,
          event: "EDIT",
          data: record,
        }))
      }
      icon={<FormOutlined className=" rounded-[4px] cursor-pointer" />}
    />
  );
};

const DeleteEvent = ({ record }) => {
  const deleteEvent = useDeleteEvent(record?.id);
  const queryClient = useQueryClient();
  const handleDelete = () => {
    deleteEvent.mutate(record?.id, {
      onSuccess: (data) => {
        console.log("data", data);
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY_EVENT] });
      },
      onError: (error) => {
        console.log("error", error);
      },
    });
  };

  return (
    <Popconfirm
      title="Xóa sự kiện"
      placement="topRight"
      okButtonProps={{ className: "bg-red-500" }}
      description={`Bạn có thực sự muốn xóa sự kiện ${record?.name}?`}
      onConfirm={() => {
        handleDelete();
      }}
      okText="Xác nhận"
      cancelText="Hủy"
    >
      <Button
        className="bg-red-500 text-white hover:bg-red-200"
        size="middle"
        type="primary"
        icon={<DeleteFilled />}
      />
    </Popconfirm>
  );
};
