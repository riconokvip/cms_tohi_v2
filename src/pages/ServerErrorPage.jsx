import { Button, Flex, Typography } from "antd";
import { server_error } from "../components/medias/ErrorMedia";

export default function ServerErrorPage() {

    return (
        <Flex justify="center" wrap="wrap" align="center" className="w-full h-full p-[10vh]">
            <img 
                alt="error"
                src={server_error}
            />
            <Flex vertical align="flex-end" justify="space-between" className="p-[32px]">
                <Typography.Title level={3}>
                    <span className="text-red-500">Không thể truy cập đến máy chủ!</span>
                </Typography.Title>
                <Button type="primary" href="https://ant.design" className="bg-red-500 font-semibold hover:bg-red-400">
                    Về Trang Chủ
                </Button>
            </Flex>
        </Flex>
    );
}