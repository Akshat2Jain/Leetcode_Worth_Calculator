import React, { useState, useContext } from "react";
import UserContext from "./userContext";
import { message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  async function handleSubmit() {
    if (name == "") {
      return message.error("Username can not be empty");
    }
    try {
      setLoading(true);
      const res = await axios.get(
        `https://leetcode-stats-api.herokuapp.com/${name}`
      );
      if (res.data.message == "user does not exist") {
        message.error(res.data.message);
      }

      setUser(res.data);

      setTimeout(() => {
        setLoading(false);
        navigate("/leetcodestats");
      }, 2000);
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong!");
    }
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Calculate the Worth of Your LeetCode Profile!
        </h1>
        <div className="max-w-md w-full bg-black p-8 rounded-lg shadow-lg">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your LeetCode username"
            className="w-full bg-black text-white border-b-2 border-white py-2 px-4 outline-none placeholder-gray-400 mb-4"
          />
          <button
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none font-sans"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
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
  );
};

export default Home;
