import { Button, Space } from "antd";
import { useNotification } from "../context/NotificationContext";

function Streams() {
  const { openNotification } = useNotification();

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() =>
            openNotification({
              message: "Error!",
              description: "Error",
              type: "error", // success, info, error, warning
            })
          }
        >
          Noti
        </Button>
      </Space>
    </>
  );
}

export default Streams;
