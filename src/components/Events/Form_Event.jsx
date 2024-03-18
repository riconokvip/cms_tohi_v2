import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { useRecoilValue } from "recoil";
import {
  Form,
  Input,
  Upload,
  Image,
  Select,
  Button,
  Typography,
  Col,
  Row,
} from "antd";
import { typeEventState } from "../../recoils/atoms";
import { PlusOutlined } from "@ant-design/icons";
const FormEvent = ({ form, onSubmit }) => {
  const typeModal = useRecoilValue(typeEventState);
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = form;

  useEffect(() => {
    if (typeModal?.event === "ADD") {
      reset({});
    } else if (typeModal?.data) {
      const { record } = typeModal.data;
      reset({
        id: record.id,
        name: record.name,
        link: record.link,
        imageURL: record.imageURL,
        description: record.description,
        eventType: record.eventType,
        deviceType: record.deviceType,
      });
    }
  }, [typeModal?.open, typeModal?.event]);

  const renderController = (
    name,
    label,
    formType,
    inputProps,
    options,
    customForm
  ) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Form.Item
            label={label}
            validateStatus={errors[name] ? "error" : ""}
            help={
              errors[name] && (
                <Typography.Text type="danger">
                  {errors[name].message}
                </Typography.Text>
              )
            }
          >
            {formType === "UPLOADIMAGE" ? (
              field?.value ? (
                <>
                  <Upload
                    className="ml-2"
                    fileList={[]}
                    customRequest={() => {}}
                    beforeUpload={(file) => {
                      field.onChange(file);
                    }}
                  >
                    <Image
                      title="Cập nhật ảnh"
                      width={150}
                      className="max-h-[120px] cursor-pointer img_game_preview rounded-md"
                      preview={false}
                      src={
                        field.value !== undefined &&
                        field.value !== null &&
                        typeof field.value !== "string"
                          ? URL.createObjectURL(field.value)
                          : field.value
                      }
                    />
                  </Upload>
                </>
              ) : (
                <>
                  <Upload
                    listType="picture-circle"
                    fileList={[]}
                    customRequest={() => {}}
                    beforeUpload={(file) => {
                      field.onChange(file);
                    }}
                  >
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  </Upload>
                </>
              )
            ) : formType === "SELECT" ? (
              <Select {...field} options={options} />
            ) : formType === "INPUT" ? (
              <Input {...field} {...inputProps} />
            ) : formType === "TEXTAREA" ? (
              <Input.TextArea {...field} {...inputProps} />
            ) : formType === "CUSTOM" ? (
              customForm
            ) : (
              ""
            )}
          </Form.Item>
        )}
      />
    );
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      {renderController("eventType", "Loại sự kiện", "SELECT", null, [
        { value: 0, label: "Sự kiện chính" },
        { value: 1, label: "Sự kiện phụ" },
      ])}
      {renderController(
        "name",
        "Tên sự kiện",
        "INPUT",
        { maxLength: 30, showCount: true },
        null
      )}
      {renderController(
        "link",
        "Đường dẫn sự kiện",
        "INPUT",
        { maxLength: 30, showCount: true },
        null
      )}
      {renderController("deviceType", "Thiết bị", "SELECT", null, [
        { value: 0, label: "Trang web" },
        { value: 1, label: "Thiết bị di động" },
        { value: 2, label: "Máy tính" },
      ])}
      {renderController("imageURL", "Biểu tượng", "UPLOADIMAGE", null, null)}
      {renderController(
        "description",
        "Mô tả",
        "TEXTAREA",
        { maxLength: 30, showCount: true },
        null
      )}

      <Form.Item>
        <Col span={24}>
          <Row justify={"end"}>
            <Button
              className="bg-red-500 hover:bg-red-300"
              type="primary"
              htmlType="submit"
            >
              {typeModal?.event === "EDIT" ? "Chỉnh sửa" : "Thêm"}
            </Button>
          </Row>
        </Col>
      </Form.Item>
    </Form>
  );
};

export default FormEvent;
