import React, { useContext, useState, useEffect } from "react";
import UserContext from "./userContext";
import { Button } from "antd";

const ProfileWorth = () => {
  const [totalWorth, settotalWorth] = useState(0);
  const { user } = useContext(UserContext);

  const easy = user.easySolved;
  const medium = user.mediumSolved;
  const hard = user.hardSolved;
  const acceptanceRate = user.acceptanceRate;

  function calculateWorth(easy, medium, hard, acceptanceRate) {
    const worthEasy = 10000;
    const worthMedium = 25000;
    const worthHard = 50000;
    let sumWorth = easy * worthEasy + medium * worthMedium + hard * worthHard;

    sumWorth *= acceptanceRate / 100;

    settotalWorth(sumWorth);
  }
  const handleShare = () => {
    // Implement your share functionality here
    alert("Score shared with friends!");
  };
  useEffect(() => {
    calculateWorth(easy, medium, hard, acceptanceRate);
  }, []);

  return (
    <>
      {totalWorth > 5000000 ? (
        <>
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
            <div className="bg-black p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-4xl font-bold mb-4">
                Your Estimated Worth is ₹ {totalWorth.toLocaleString("en-IN")}
              </h2>
              <p className="text-lg mb-8">Wow! You are rich buddy!</p>
              <div className="flex justify-center mb-8">
                <img
                  src="https://i.pinimg.com/originals/17/51/92/175192763f263d86a329356d5be843a7.gif"
                  alt="Meme"
                />
              </div>
              <Button type="primary" onClick={handleShare}>
                Share with Friends
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          {totalWorth > 1000000 ? (
            <>
              <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
                <div className="bg-black p-8 rounded-lg shadow-lg text-center">
                  <h2 className="text-4xl font-bold mb-4">
                    Your Estimated Worth is ₹{" "}
                    {totalWorth.toLocaleString("en-IN")}
                  </h2>
                  <p className="text-lg mb-8">
                    {" "}
                    Not bad! Keep it up! You're on your way to riches!
                  </p>
                  <div className="flex justify-center mb-8">
                    <img
                      src="https://media.tenor.com/j0eO9C4bcqUAAAAM/mirzapur-munna-bhaiya.gif"
                      alt="Meme"
                    />
                  </div>
                  <Button type="primary" onClick={handleShare}>
                    Share with Friends
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
                <div className="bg-black p-8 rounded-lg shadow-lg text-center">
                  <h2 className="text-4xl font-bold mb-4">
                    Your Estimated Worth is ₹{" "}
                    {totalWorth.toLocaleString("en-IN")}
                  </h2>
                  <p className="text-lg mb-8">
                    Looks like you're not quite there yet! Try solving more
                    LeetCode problems to improve your worth!
                  </p>
                  <div className="flex justify-center mb-8">
                    <img
                      src="https://media.tenor.com/-7ON2Lqx030AAAAM/mai-garib-hu.gif"
                      alt="Meme"
                    />
                  </div>
                  {/* <Button type="primary" onClick={handleShare}>
                    Share with Friends
                  </Button> */}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProfileWorth;
