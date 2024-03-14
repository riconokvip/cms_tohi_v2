import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useLogin } from "../features/authentication/useLogin";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [error, setError] = useState("");

  const { login, isLoading } = useLogin();
  const { setIsAuthenticate } = useAuth();
  const navigate = useNavigate();

  function onFinish(values) {
    const { userName, password } = values;

    if (!userName || !password) return;

    login(
      { userName, password },
      {
        onSuccess: () => {
          setIsAuthenticate(true);

          console.log("test")
          navigate("/dashboard");
          
        },
        onError: (error) => {
          setError(error.message);
        },
      }
    );
  }

  if (isLoading) return <span>Loading!!!</span>;

  return (
    <>
      {error && <Alert message={error} type="error" />}
      <Form name="normal_login" onFinish={onFinish}>
        <Form.Item
          name="userName"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="bg-red-500">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginPage;
