import { Col, Row, Typography } from "antd";
import RecordsTable from "../components/Table";
import { useState } from "react";
import { useGetUsers } from "../services/queries/useUserQueries";
import { keepPreviousData } from "@tanstack/react-query";
import {columnsUsers} from "../components/Users/Columns"
const Users = () => {
  const [page,setPage]=useState(0)
  const [pageSize,setPageSize]=useState(10)
  const {data,isLoading}=useGetUsers(page,pageSize,keepPreviousData)
  return (
    <Col span={24}>
      <Row>
        <Col span={24}>
          <Row className="">
            <Typography.Title level={2}>Nguời dùng</Typography.Title>
          </Row>
        </Col>
        <Col span={24}>
          <RecordsTable
            data={data}
            columns={columnsUsers}
            isLoading={isLoading}
            setPageSize={setPageSize}
            setPage={setPage}
          />
        </Col>
      </Row>
    </Col>
  );
};

export default Users;
