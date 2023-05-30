import emblemBronze from "../assets/rankedEmblem/emblem-bronze.png";

const Card = ({}) => {
  return (
    <>
      <div className="hero">
        <img
          className="hero-profile-img"
          src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_1.jpg"
          alt=""
        />
        <div>Role:</div>
        <div>Elo:</div>
        <div>Campeão Favorito:</div>
        <div>Nick:</div>
      </div>
    </>
  );
};
export default Card;
