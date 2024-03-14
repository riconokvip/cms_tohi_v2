import { Col, Row, Table, Typography } from "antd";
import { columnsUsers } from "../components/Users/Columns";
import {  useState } from "react";
import {keepPreviousData, useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/apiUsers";
const Users = () => {
    const [page,setPage]=useState(0)
    const [pageSize,setPageSize]=useState(10)

    const {data,isLoading}= useQuery({
        queryKey: ["user",page],
        queryFn:()=> getUsers(page,pageSize),
        placeholderData:keepPreviousData
    })
  const totalLength=data?.total
  return (
    <Col span={24}>
        <Row >
            <Col span={24}>
                <Row className="">
                    <Typography.Title level={2}>Nguời dùng</Typography.Title>
                </Row>
            </Col>
            <Col span={24}>
            <Table
                bordered
                columns={columnsUsers}
                loading={isLoading}
                dataSource={data?.data||[]}
                pagination={{
                    showSizeChanger:false,
                    className:"record__pagination",
                    size:"default",
                    total:totalLength,
                    pageSize:pageSize,
                    current:page+1||1,
                    position:"center",
                    onChange:(page,pageSize)=>{
                        setPage(page-1)
                        setPageSize(pageSize)
                    }
                }}
                />
            </Col>
        </Row>
    </Col>
  )
};

export default Users;
