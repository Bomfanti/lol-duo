import Nav from "../components/Nav";

const Home = () => {
  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <div className="overlay">
        <Nav />
        <div className="home">
          <h1>lol Duo</h1>
          <button className="primary-button" onClick={handleClick}>
            {authToken ? "Entrar" : "Criar Conta"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
