import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";
import ChatDisplay from "./ChatDisplay";
import { useState } from "react";

const ChatContainer = ({ user }) => {
  const [clickedUser, setClickedUser] = useState(null);

  return (
    <>
      <div className="chat-container">
        <ChatHeader user={user} />
        <div className="chat-buttons">
          <button className="option">matches</button>
          <button className="option">chat</button>
        </div>
        <MatchesDisplay matches={user.matches} />
        <ChatDisplay />
      </div>
    </>
  );
};

export default ChatContainer;
