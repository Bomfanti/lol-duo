const Nav = ({ authToken, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src="https://vitejs.dev/logo-with-shadow.png"
          alt="logo"
        />
      </div>
      {!authToken && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Entrar
        </button>
      )}
    </nav>
  );
};
export default Nav;
