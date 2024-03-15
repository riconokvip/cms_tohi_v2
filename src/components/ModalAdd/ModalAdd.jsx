import { Modal } from "antd"
const ModalAdd = ({title,open,handleChange,formData,...props}) => {
  return (
    <Modal 
        open={open}
        title={title}
        onCancel={handleChange}
        footer={false}
      >
      {formData}
    </Modal>
  )
}
export default ModalAdd