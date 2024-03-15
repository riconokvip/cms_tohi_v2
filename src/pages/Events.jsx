import { Button, Col, Modal, Row, Typography } from "antd"
import RecordsTable from "../components/Table"
import { Fragment, useState } from "react"
import {columnsEvents} from "../components/Events/Columns_Event"
import {useGetEvents} from "../services/queries/useEventsQueries"
import ModalAdd from "../components/ModalAdd/ModalAdd"
import { keepPreviousData } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import FormEvent from "../components/Events/Form_Event"
// const linkRegexExp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
const schema = yup
  .object({
    name: yup.string()
      .max(50, "Kích thước tối thiểu cho phép là 10 kí tự và tối đa là 50 kí tự")
      .min(10, "Kích thước tối thiểu cho phép là 10 kí tự và tối đa là 50 kí tự")
      .required("Tên sự kiện không được bỏ trống!"),
    // link: yup
    //   .string()
    //   .matches(linkRegexExp, "Đường dẫn sự kiện không đúng định dạng")
    //   .required("Đường dẫn sự kiện không được bỏ trống!"),
    // deviceType: yup.string().required("Thiết bị không được bỏ trống!"),
    // description: yup.string().required("Vui lòng nhập mô tả!"),
  })
  .required();
const Events = () => {
    const [page,setPage]=useState(0)
    const [pageSize,setPageSize]=useState(10)
    const {data,isLoading}=useGetEvents(page,pageSize,keepPreviousData)
    const [open,setOpen]=useState(false)
    const form = useForm({
      resolver: yupResolver(schema),
    });
    const handleOpenModal=() => {
      open?setOpen(false):setOpen(true)
      !open && form.reset()
    }

    const onSubmit=({...values}) => {
      console.log("values",values)
    }
    
  return (
    <Fragment>
      <ModalAdd
        title={"Thêm người dùng"}
        open={open}
        handleChange={handleOpenModal}
        formData={<FormEvent 
          form={form}  
          onSubmit={onSubmit} 
        />
        }
      />
      <Col span={24}>
        <Row>
          <Col span={24}>
            <Row className="">
              <Typography.Title className="p-0" level={2}>Sự kiện</Typography.Title>
            </Row>
          </Col>
          <Col span={24}>
            <Row className="my-1" align={"middle"}>
              <Button 
                onClick={handleOpenModal}
                >
                Thêm
              </Button>
            </Row>
            <RecordsTable
              columns={columnsEvents}
              data={data}
              setPage={setPage}
              setPageSize={setPageSize}
              isLoading={isLoading}
            />
          </Col>
        </Row>
      </Col>
    </Fragment>

  )
}

export default Events
