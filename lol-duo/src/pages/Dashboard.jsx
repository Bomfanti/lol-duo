import React, { useState } from "react";
import Card from "../components/card";

const Dashboard = () => {
  const characters = [
    {
      user_id: "1",
      name: "fizz",
      title: "titulo 1",
      url: "",
    },
    {
      user_id: "2",
      name: "fizz",
      title: "titulo 2",
      url: "",
    },
    {
      user_id: "3",
      name: "fizz",
      title: "titulo 3",
      url: "",
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const currentCard = characters[currentCardIndex];

  const handleLike = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  const handleUnlike = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };
  return (
    <>
      <div className="dashboard">
        <div className="swiper-container">
          <div className="card-container">
            <Card />
            <div>
              <h2>{currentCard.title}</h2>
            </div>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleUnlike}>Unlike</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
