import { useState } from "react";
import Nav from "../components/Nav";

const OnBoarding = () => {
  const [formData, setFormData] = useState({
    user_id: "cookies.UserId",
    first_name: "",
    nickname: "",
    role: "NULL",
    role_interest: "NULL",
    url: "",
    about: "",
    matches: [],
  });

  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(true);
  };

  const handleChange = (e) => {
    console.log("e", e);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    console.log(formData);
    console.log("handle summit");
  };

  const authToken = true;
  return (
    <>
      <Nav setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>Criar Conta</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">Nome</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="Seu Nome"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />

            <label htmlFor="nickname">Nickname no lol</label>
            <input
              id="nickname"
              type="text"
              name="nickname"
              placeholder="Seu Nome"
              required={true}
              value={formData.nickname}
              onChange={handleChange}
            />

            <label>Posição Favorita</label>
            <div className="multiple-input-container">
              <input
                id="role-top"
                type="radio"
                name="role"
                value="top"
                onChange={handleChange}
                checked={formData.role === "top"}
              />
              <label htmlFor="role-top">Top</label>

              <input
                id="role-jg"
                type="radio"
                name="role"
                value="jungle"
                onChange={handleChange}
                checked={formData.role === "jg"}
              />
              <label htmlFor="role-jg">Jungle</label>

              <input
                id="role-mid"
                type="radio"
                name="role"
                value="mid"
                onChange={handleChange}
                checked={formData.role === "mid"}
              />
              <label htmlFor="role-mid">Mid</label>

              <input
                id="role-adc"
                type="radio"
                name="role"
                value="adc"
                onChange={handleChange}
                checked={formData.role === "adc"}
              />
              <label htmlFor="role-adc">Adc</label>

              <input
                id="role-sup"
                type="radio"
                name="role"
                value="sup"
                onChange={handleChange}
                checked={formData.role === "sup"}
              />
              <label htmlFor="role-sup">Suporte</label>
            </div>

            <label>Interesse</label>

            <div className="multiple-input-container">
              <input
                id="top-role-interest"
                type="radio"
                name="role_interest"
                value="top"
                onChange={handleChange}
                checked={formData.role_interest === "top"}
              />
              <label htmlFor="top-role-interest">Top</label>
              <input
                id="jg-role-interest"
                type="radio"
                name="role_interest"
                value="jg"
                onChange={handleChange}
                checked={formData.role_interest === "jg"}
              />
              <label htmlFor="mid-role-interest">Jungle</label>
              <input
                id="mid-role-interest"
                type="radio"
                name="role_interest"
                value="mid"
                onChange={handleChange}
                checked={formData.role_interest === "mid"}
              />
              <label htmlFor="mid-role-interest">Mid</label>
              <input
                id="adc-role-interest"
                type="radio"
                name="role_interest"
                value="adc"
                onChange={handleChange}
                checked={formData.role_interest === "adc"}
              />
              <label htmlFor="adc-role-interest">Adc</label>
              <input
                id="sup-role-interest"
                type="radio"
                name="role_interest"
                value="sup"
                onChange={handleChange}
                checked={formData.role_interest === "sup"}
              />
              <label htmlFor="mid-role-interest">Suporte</label>
            </div>

            <label htmlFor="about">Sobre mim</label>
            <input
              id="about"
              type="text"
              name="about"
              required={true}
              placeholder="Eu gosto de farmar até o Nv 16 de Kassadin..."
              value={formData.about}
              onChange={handleChange}
            />
            <input type="submit" />
          </section>

          <section>
            <label htmlFor="url">Profile Photo</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required={true}
            />
            <div className="photo-container">
              {formData.url && (
                <img src={formData.url} alt="profile pic preview" />
              )}
            </div>
          </section>
        </form>
        <button
          onClick={() => {
            console.log(formData);
          }}
        >
          {" "}
          oi
        </button>
      </div>
    </>
  );
};

export default OnBoarding;
