import { SketchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Typography } from "antd";
import { dayConverter, formatCash } from "../../utils";
import { NavLink } from "react-router-dom";


export const columnsUsers= [
    {
      key:"userName",
      dataIndex: "userName",
      title: "Tài khoản",
      width: 130,
      render: (userName, { avatar }) => {
        return (
          <div className="flex items-center">
            {avatar !== undefined && avatar !==null? (
              <Avatar src={avatar}  />
            ) 
            : <span className="bg-slate-500 text-white p-2 py-1 rounded-[50%]"> <UserOutlined/></span>
            }
            <Typography.Text
              ellipsis={{
                tooltip: true,
              }}
              className="ml-2"
            >
              {userName !== null && userName !== undefined ? userName : ""}
            </Typography.Text>
          </div>
        )
      }
    },
    {
      key:"displayName",
      dataIndex: "displayName",
      title: "Tên hiển thị",
      width: 80,
      render: (fullName) => {
        return (
          <Typography.Text ellipsis={{ tooltip: true }}>
            {fullName !== undefined && fullName !== null
              ? fullName
              : `tohi${Date.now()}`}{" "}
          </Typography.Text>
        );
      },
    },
    {
      key:"email",
      dataIndex: "email",
      title: "Email",
      width: 100,
      align: "left",
      render: (email) => {
        return (
          <a
            onClick={() => {
              window.location.href = `mailto:${email}`;
            }}
          >
            {email !== undefined && email !== null ? email : ``}
          </a>
        );
      },
    },
    {
      key:"sex",
      dataIndex: "sex",
      title: "Giới tính",
      width: 60,
      align: "center",
      render: (sex) => {
        return (
          <>{sex === "Unknown" ? `Khác` : sex === "Female" ? "Nữ" : "Nam"}</>
        );
      },
    },
    {
      key:"diamond",
      dataIndex: "diamond",
      title: "Kim cương",
      width: 100,
      sorter: (a, b) => a?.diamond - b?.diamond,
      render: (diamond) => {
        return (
          <div className="flex items-center justify-end">
            <span className="mr-1">
              {" "}
              {diamond !== undefined && diamond !== null
                ? formatCash(diamond.toString())
                : ``}{" "}
            </span>
            <SketchOutlined className="text-[#4374f9]" />
          </div>
        );
      },
    },
    {
      key:"isStreaming",
      dataIndex: "isStreaming",
      title: "Trạng thái live",
      width: 80,
      align: "center",
      sorter: (a, b) => a?.isStreaming - b?.isStreaming,
      render: (isStreaming) => {
        return (
          <>
            {isStreaming === false ? (
              <span className="bg-gray-600 text-white font-medium p-[6px] rounded-[6px]">
                OFF
              </span>
            ) : (
              <span className="bg-green-600 text-white font-medium p-[6px] rounded-[6px]">
                ON
              </span>
            )}
          </>
        );
      },
    },
   
    {
      key:"createdAt",
      dataIndex: "createdAt",
      title: "Ngày tạo",
      width: 100,
      align: "center",
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      render: (createdAt) => {
        return (
          <span>
            {createdAt !== undefined && createdAt !== null
              ? dayConverter(createdAt)
              : ``}{" "}
          </span>
        );
      },
    },
    {
      key:"id",
      dataIndex: "actions",
      title: "Hành động",
      fixed: "right",
      width: 100,
      render: (_, record) => {
        return (
          <Space size="middle">
            <NavLink
              className={
                "text-red-500 hover:text-red-400 cursor-pointer font-semibold"
              }
              to={`/users/user-detail/${record.id}`}
            >
              Xem chi tiết
            </NavLink>
          
          </Space>
        );
      },
    },
  ]