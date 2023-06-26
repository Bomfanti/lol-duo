import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import ChatContainer from "../components/ChatContainer";
import { useCookies } from "react-cookie";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [roleUsers, setroleUsers] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [lastDirection, setLastDirection] = useState();

  const userId = cookies.UserId;

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user", {
        params: { userId },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getroleUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/role-users", {
        params: { role: user?.role_interest },
      });
      setroleUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      getroleUsers();
    }
  }, [user]);

  const updateMatches = async (matchedUserId) => {
    try {
      await axios.put("http://localhost:8000/addmatch", {
        userId,
        matchedUserId,
      });
      getUser();
    } catch (err) {
      console.log(err);
    }
  };

  const swiped = (direction, swipedUserId) => {
    if (direction === "right") {
      updateMatches(swipedUserId);
    }
    setLastDirection(direction);
  };

  return (
    <>
      {user && (
        <div className="dashboard">
          <ChatContainer user={user} />
          <div className="swipe-container">
            <div className="card-container">
              {roleUsers?.map((player) => (
                <>
                  <TinderCard
                    className="swipe"
                    key={player.user_id}
                    onSwipe={(dir) => swiped(dir, player.user_id)}
                  >
                    <div
                      style={{ backgroundImage: "url(" + player.url + ")" }}
                      className="card"
                    >
                      <div>{player.first_name}</div>
                    </div>
                  </TinderCard>
                </>
              ))}
              <div className="swipe-info">
                {lastDirection ? <p>You Swiped {lastDirection}</p> : <p></p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
