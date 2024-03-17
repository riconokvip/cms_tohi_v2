import { Avatar, Col, Image, Row, Tabs, Typography } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { Fragment, useEffect, useState } from "react";
// import PaymentsUserDetail from "../../components/Users/UserDetail/PaymentsUserDetail";
// import ProfileDetail from "../../components/Users/UserDetail/ProfileDetail";
import { useNavigate, useParams } from "react-router-dom";
import { formatCash } from "../../../utils";
import { useGetUserDetail } from "../../../services/queries/useUserQueries";
import UserDetail_DepositWithdrawHistory from "./UserDetail_DepositWithdrawHistory";
import UserDetail_TransactionHistory from "./UserDetail_TransactionHistory";

// import TransactionUserDetail from "../../components/Users/UserDetail/TransactionUserDetail";
// import DepositWithdrawUserDetail from "../../components/Users/UserDetail/DepositWithdrawUserDetail";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const UserDetail = () => {
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState([]);
  const { userId } = useParams();
  const { data } =useGetUserDetail(userId)
  useEffect(()=>{
    if(data?.data){
      setUserDetail(data?.data)
    }
  },[data?.data])
  return (
    <Fragment>
      <Row>
        <Typography.Title level={4} className="m-0 ml-2 hover:cursor-default">
          <span
            onClick={() => {
              navigate(-1);
            }}
            className="cursor-pointer"
          >
            Người dùng
          </span>
          <span > / </span>
          <span >Chi tiết người dùng</span>
        </Typography.Title>
      </Row>
      
      <Row gutter={[50]}>
        <Col span={7}>
          <Row
            gutter={[5,5]}
            className="bg-white max-h-[350px] rounded-[6px] "
            style={{ boxShadow: "rgba(47, 43, 61, 0.14) 0px 2px 6px 0px" }}
          >
            <Col span={9}  className="mt-3">
              <Row className="w-full h-full">
                {userDetail?.avatar !== "" &&
                userDetail?.avatar !== null &&
                userDetail?.avatar !== undefined ? (
                  <Image
                    width={160}
                    height={160}
                    preview={false}
                    className="rounded-[6px]"
                    alt="image"
                    src={userDetail.avatar ? userDetail.avatar : ``}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-ful">
                    <Avatar size={120} icon={<UserOutlined/>}/>
                  </div>
                )}
              </Row>
            </Col>
            <Col span={15}>
              <Row justify={"left"}>
                <Typography.Text
                  ellipsis={{ toolip: true }}
                  className="text-black font-medium text-[18px] mt-2"
                >
                  {userDetail?.displayName}
                </Typography.Text>
              </Row>
              <Row justify={"left"}>
                <Typography.Text
                  ellipsis={{ toolip: true }}
                  className="text-black font-medium mt-2"
                >
                  <MailOutlined className="mr-1" />
                  {userDetail?.email}
                </Typography.Text>
              </Row>
              {/* <Row className="relative justify-start" align={"center"}>
                <Image
                  preview={false}
                  src={checkIconLevel}
                  width={"auto"}
                  height={110}
                />
                <span
                  style={{ background: `${checkBgLevel}` }}
                  className="px-2 absolute top-[35%] left-[12%] rounded-[50%] cursor-default"
                >
                  <span className="text-[30px] font-serif font-semibold">
                    {userDetail?.level}
                  </span>
                </span>
              </Row> */}
            </Col>

            <Col span={24}>
              <Row justify={"center"} className="py-3">
                <div className="border border-gray-300 border-dashed rounded min-w-125px py-2 px-3 me-6 ">
                  <div className="font-medium text-[16px]">
                    {userDetail?.diamond &&
                      formatCash(userDetail?.diamond.toString())}
                  </div>
                  <span className="text-[16px] text-gray-400 font-medium">
                    Kim cương
                  </span>
                </div>
                <div className="border border-gray-300 border-dashed rounded min-w-125px py-2 px-3 me-6 ">
                  <div className="font-medium text-[16px] text-center">
                    {userDetail?.follower}
                  </div>
                  <span className="text-[16px] text-gray-400 font-medium">
                    Người theo dõi
                  </span>
                </div>

                <div className="border border-gray-300 border-dashed rounded min-w-125px py-2 px-3 me-6 ">
                  <div className="font-medium text-[16px] text-center">
                    {userDetail?.level}
                  </div>
                  <span className="text-[16px] text-gray-400 font-medium">
                    Level
                  </span>
                </div>
              </Row>
            </Col>
          </Row>

          <Row className="bg-white rounded-[6px] mt-[15px]">
            {/* <ProfileDetail userDetail={userDetail} /> */}
          </Row>
        </Col>
        <Col span={16} >
            <NavAction />
          {/* {activeTab === "depositandwithdraw" && <DepositWithdrawUserDetail />} */}
          {/* {activeTab === "transaction" && <TransactionUserDetail />} */}
          {/* {activeTab === "bank" && <PaymentsUserDetail />} */}
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserDetail;

const NavAction = () => {

  const items = [
    { 
      key: "depositandwithdraw",
      label: "Lịch sử nạp rút",
      children: <UserDetail_DepositWithdrawHistory/>
    },
    { 
      key: "transaction",
      label: "Lịch sử giao dịch" ,
      children:<UserDetail_TransactionHistory/>

    },
  ];
  return  (
    <Row className="bg-white rounded-[6px]">
       <Tabs items={items}  />
    </Row>
    )

};