import { Breadcrumb, Button, Col, Input, Row, Typography} from "antd";
import RecordsTable from "../components/Table";
import { Fragment, useEffect, useState } from "react";
import { columnsEvents } from "../components/Events/Columns_Event";
import { useGetEvents } from "../services/queries/useEventsQueries";
import { keepPreviousData, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormEvent from "../components/Events/Form_Event";
import { useAddEvent, useEditEvent } from "../features/Events/useEvents";
import { PlusOutlined } from "@ant-design/icons";
import Modal from "../components/Modal";
import { QUERY_KEY_EVENT } from "../services/queries/queriesKeyConts";
import { useRecoilState } from "recoil";
import {typeEventState} from "../recoils/atoms"
import { useNotification } from "../context/NotificationContext";

const linkRegexExp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

const schema = yup
  .object({
    name: yup
      .string()
      .max(
        50,
        "Kích thước tối thiểu cho phép là 10 kí tự và tối đa là 50 kí tự"
      )
      .min(
        10,
        "Kích thước tối thiểu cho phép là 10 kí tự và tối đa là 50 kí tự"
      )
      .required("Tên sự kiện không được bỏ trống!"),
    link: yup
      .string()
      .matches(linkRegexExp, "Đường dẫn sự kiện không đúng định dạng")
      .required("Đường dẫn sự kiện không được bỏ trống!"),
    deviceType: yup.string().required("Thiết bị không được bỏ trống!"),
    description: yup.string().required("Vui lòng nhập mô tả!"),
  })
  .required();

const Events = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [typeModal,setTypeModal]=useRecoilState(typeEventState)
  const { data, isLoading } = useGetEvents(page, pageSize, keepPreviousData);
  const addEvent = useAddEvent();
  const userId=typeModal?.data?.record?.id
  const editEvent=useEditEvent(userId)
  const queryClient=useQueryClient()
  const { openNotification } = useNotification();

  const form = useForm({
    resolver: yupResolver(schema),
  });
  const handleOpenModal = () => {
   typeModal.open  ? setTypeModal(prev=>({...prev,open:false})) : setTypeModal(prev=>({...prev,open:true}))
   setTypeModal(prev=>({...prev,event:"ADD"}))
    !typeModal?.open && form.reset();
  };

  const onSubmit = ({ ...values }) => {
    const mutateEvent = typeModal?.event !== 'EDIT' ? addEvent.mutate : editEvent.mutate;
    mutateEvent(values, {
      onSuccess: (data) => {
        console.log("data",data)
        if (!data?.isError) {
          queryClient.invalidateQueries({ queryKey: [QUERY_KEY_EVENT, page] });
          
          openNotification({
            message: typeModal?.event !== 'EDIT' ? "Thêm thành công":"Chỉnh sửa thành công",
            type: "success",
          })
          handleOpenModal();
        }else{
          openNotification({
            message: data?.message,
            type: "error",
          })
        }
      },
      onError: (error) => {
        console.log("onSuccess", error);
      },
    });
  };
  return (
    <Fragment>
      <Col span={24}>
        <Row>
          <Col span={24}>
            <Row className="flex justify-between" align={"middle"}>
              <Breadcrumb
                style={{ margin: "16px 0" }}
                items={[{ title: <Typography.Title style={{marginBottom:0}} level={4}>Sự kiện</Typography.Title> }]}
              />
              <Modal
                title={
                  <Typography.Text className="text-[16px]">
                    {typeModal?.event==="ADD"? "Thêm sự kiện":"Chỉnh sửa sự kiện"}
                  </Typography.Text>
                }
                button={{
                  props: {
                    icon:<PlusOutlined />,
                    type: "primary",
                    size: "large",
                    className:`bg-red-500 hover:bg-red-300`,
                  },
                  title: "Thêm",
                }}
                isOpen={typeModal?.open}
                onChange={handleOpenModal}
                form={ <FormEvent form={form} onSubmit={onSubmit} /> }
              />
            </Row>
            <Row>
             
            </Row>
          </Col>
          <Col span={24}>
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
  );
};

export default Events;
