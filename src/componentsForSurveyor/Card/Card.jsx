import React, { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ application, changeStatus, addComment }) => {
  const [status, setStatus] = useState(application.status || "");
  const [comment, setComment] = useState(application.comment || "");
  const date = application.date.split("-").reverse().join("-");

  const handleSubmitComment = (e) => {
    e.preventDefault();
    addComment(application, comment);
    setComment("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>Организация: {application.company}</p>
        <p>Ответственный: {application.name}</p>
        <p>Вид работы: {application.work}</p>
        <p>Зона работ: {application.place}</p>
        <p>Дата: {date}</p>
        <p>Время: {application.time}</p>

        <label>
          Статус:{" "}
          <select
            className={styles.select}
            value={status}
            onChange={(e) => {
              const newStatus = e.target.value;
              setStatus(newStatus);
              changeStatus(application, newStatus);
            }}
          >
            <option value="Выберите статус">Выберите статус</option>
            <option value="Принято в работу">Принято в работу</option>
            <option value="Выполнено">Выполнено</option>
            <option value="Отклонено">Отклонено</option>
          </select>
        </label>

        {status === "Отклонено" && !application.comment && (
          <form onSubmit={handleSubmitComment}>
            <input
              type="text"
              placeholder="Комментарий"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit">Отправить</button>
          </form>
        )}

        {application.comment && <p>Комментарий: {application.comment}</p>}
      </div>
    </div>
  );
};

export default Card;
