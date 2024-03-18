import { Table } from "antd";
import { Fragment } from "react";

const RecordsTable = ({data,isLoading,columns,setPage,setPageSize,...props}) => {
  const page=data?.pageIndex
  const pageSize=data?.pageSize
  const totalLength=data?.total
  return (
    <Fragment>
      <Table
            rowKey={"id"}
            bordered
            columns={columns}
            loading={isLoading}
            dataSource={data?.data || []}
            pagination={{
              showSizeChanger: false,
              className: "record__pagination",
              size: "default",
              total:totalLength,
              pageSize: pageSize,
              current: page + 1 || 1,
              onChange: (page, pageSize) => {
                setPage(page - 1);
                setPageSize(pageSize);
              },
            }}
            {...props}
          />
    </Fragment>
  )
}

export default RecordsTable
