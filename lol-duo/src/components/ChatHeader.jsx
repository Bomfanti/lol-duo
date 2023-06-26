import { useCookies } from "react-cookie";

const ChatHeader = ({ user }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    window.location.reload();
  };

  return (
    <div className="chat-container-header">
      <div className="profile">
        <h3>{user.first_name}</h3>
      </div>
      <button className="primary-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default ChatHeader;
