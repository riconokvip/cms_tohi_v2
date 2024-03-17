import { Button, Modal as AntModal, Input } from "antd";
import { useEffect, useState } from "react";

function Modal({ button, data, render, isOpen, onChange, title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const showModal = () => {
    setIsModalOpen(true);
    onChange(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    onChange(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    onChange(false);
  };
  return (
    <>
      <Button onClick={showModal} {...button?.props}>
        {button?.title || "Open Modal"}
      </Button>
      <AntModal
        title={title || "Modal Title"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ type: "primary", ghost: true }}
        cancelButtonProps={{ danger: true }}
      >
        {data && data.map(render)}
      </AntModal>
    </>
  );
}

export default Modal;
