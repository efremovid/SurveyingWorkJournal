import React, { useState } from "react";
import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [login, setLogin] = useState({ login: "", password: "", role: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const navigateToPortalByRole = (e) => {
    e.preventDefault();

    if (
      login.login === "admin" &&
      login.password === "admin" &&
      login.role === "заказчик"
    ) {
      navigate("/customer-portal");
    } else if (
      login.login === "admin" &&
      login.password === "admin" &&
      login.role === "инженер-геодезист"
    ) {
      navigate("/surveyor-portal");
    } else {
      alert("Введены некорректные данные!");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={navigateToPortalByRole} className={styles.auth}>
        <h2>Вход в личный кабинет</h2>
        <input
          name="login"
          onChange={handleChange}
          type="text"
          placeholder="Введите ваш логин"
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Введите ваш пароль"
        />
        <select name="role" onChange={handleChange}>
          <option value="заказчик">не выбрано</option>
          <option value="заказчик">заказчик</option>
          <option value="инженер-геодезист">инженер-геодезист</option>
        </select>
        <button>войти</button>
      </form>
    </div>
  );
};

export default Home;
