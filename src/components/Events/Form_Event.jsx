import { Button, Col, Form, Input, Typography } from 'antd';
import { Controller, useForm } from 'react-hook-form';


const FormEvent = ({form,onSubmit}) => {

  return (
    <Form layout="vertical" >
    <Controller
      control={form.control}
      name="name"
      render={({ field, fieldState }) => {
        const error = fieldState.error;
        return (
          <Form.Item
            {...(error
              ? {
                  validateStatus: "error",
                  extra: (
                    <Typography.Text type="danger">{`${error.message}`}</Typography.Text>
                  ),
                }
              : {})}
            label="Tên sự kiện"
          >
            <Input {...field} maxLength={30} showCount />
          </Form.Item>
        );
      }}
    />
    <Col>
    <Button
      onClick={form.handleSubmit(onSubmit)}
      htmlType="submit"
    >
      THÊM

    </Button>
    </Col>
  </Form>
  )
}

export default FormEvent
