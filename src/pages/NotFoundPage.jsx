import { Button, Flex, Typography } from "antd";
import { not_found } from "../components/medias/ErrorMedia";

export default function NotFoundPage() {

    return (
        <Flex justify="center" wrap="wrap" align="center" className="w-full h-full p-[10vh]">
            <img 
                alt="error"
                src={not_found}
            />
            <Flex vertical align="flex-end" justify="space-between" className="p-[32px]">
                <Typography.Title level={3}>
                    <span className="text-red-500">Không tìm thấy trang web!</span>
                </Typography.Title>
                <Button type="primary" href="https://ant.design" className="bg-red-500 font-semibold hover:bg-red-400">
                    Về Trang Chủ
                </Button>
            </Flex>
        </Flex>
    );
}