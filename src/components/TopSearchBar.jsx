import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { structure } from "../layouts/SiderItems";
import { useState } from "react";

function TopSearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const button = {
    props: {
      icon: <SearchOutlined />,
      type: "text",
      size: "large",
    },
    title: "Search...",
  };

  function handleChange(value) {
    setIsOpen(value);
  }

  function handleClick(path) {
    navigate(`/${path}`);
    setIsOpen(!isOpen);
  }

  let data = [];
  structure.map((item) => {
    if (item?.children) {
      item.children.forEach((child) => {
        data.push(child);
      });
    }
  });

  if (filter)
    data = data.filter((element) => {
      return element.label.toLowerCase().includes(filter);
    });
  return (
    <Modal
      title={
        <Input
          placeholder="Search..."
          variant="borderless"
          onChange={(evt) => setFilter(evt.target.value)}
        />
      }
      button={button}
      data={data}
      isOpen={isOpen}
      onChange={handleChange}
      render={(data) => {
        return (
          <Button
            {...data}
            size="large"
            type="text"
            onClick={() => handleClick(data.key)}
          >
            {data.label}
          </Button>
        );
      }}
    />
  );
}

export default TopSearchBar;
