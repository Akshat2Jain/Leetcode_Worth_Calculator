import React, { useContext, useEffect, useState } from "react";
import { Card, Modal, Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import UserContext from "./userContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

const LeetCodeStats = () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handlePopupCancel = () => {
    setShowPopup(false);
  };
  const handlePopupYes = () => {
    setShowPopup(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/profileWorth");
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {user.status === "success" ? (
        <>
          <h1 className="text-3xl font-bold mb-8 text-center">
            Your LeetCode Stats
          </h1>
          <div className="flex flex-wrap justify-center">
            <Card
              className="leetcode-card m-4 hover:text-white"
              style={{ width: 300 }}
            >
              <p className="font-semibold">Acceptance Rate:</p>
              <p>{user.acceptanceRate}%</p>
            </Card>
            <Card
              className="leetcode-card m-4 hover:text-white"
              style={{ width: 300 }}
            >
              <p className="font-semibold">Easy Problems Solved:</p>
              <p>{user.easySolved}</p>
            </Card>
            <Card
              className="leetcode-card m-4 hover:text-white"
              style={{ width: 300 }}
            >
              <p className="font-semibold">Medium Problems Solved:</p>
              <p>{user.mediumSolved}</p>
            </Card>
            <Card
              className="leetcode-card m-4 hover:text-white"
              style={{ width: 300 }}
            >
              <p className="font-semibold">Hard Problems Solved:</p>
              <p>{user.hardSolved}</p>
            </Card>
            <Card
              className="leetcode-card m-4 hover:text-white"
              style={{ width: 300 }}
            >
              <p className="font-semibold">Ranking:</p>
              <p>{user.ranking}</p>
            </Card>
            <Modal
              title="Generate LeetCode Profile Worth"
              visible={showPopup}
              onCancel={handlePopupCancel}
              footer={[
                <Button key="no" onClick={handlePopupCancel}>
                  No
                </Button>,
                <Button key="yes" type="primary" onClick={handlePopupYes}>
                  Yes
                </Button>,
              ]}
            >
              <p>
                Are you sure you want to generate the worth of your profile
                based on your LeetCode stats?
              </p>
            </Modal>
            {loading && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                <Spin
                  indicator={
                    <LoadingOutlined style={{ fontSize: 48, color: "#fff" }} />
                  }
                ></Spin>
              </div>
            )}
          </div>
        </>
      ) : (
        <p className="text-red-500">Error: No Leetcode Profile is found</p>
      )}
    </div>
  );
};

export default LeetCodeStats;
