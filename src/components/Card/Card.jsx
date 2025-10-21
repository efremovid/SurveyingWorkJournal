import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import styles from "./Card.module.scss";

const Card = ({ application, deleteApp, updateApplication }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localAppInfo, setLocalAppInfo] = useState(application);

  const handleChange = (e) => {
    setLocalAppInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateApplication(application.id, localAppInfo);
    setIsEditing(false);
  };

  const date = application.date?.split("-").reverse().join("-");

  return (
    <div className={styles.container}>
      {!isEditing ? (
        <div className={styles.main}>
          <p>Организация: {application.company}</p>
          <p>Ответственный: {application.name}</p>
          <p>Вид работы: {application.work}</p>
          <p>Зона работ: {application.place}</p>
          <p>Дата: {date}</p>
          <p>Время: {application.time}</p>
          <p>Статус: {application.status}</p>
        </div>
      ) : (
        <div className={styles.main}>
          <input
            name="company"
            value={localAppInfo.company}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            name="name"
            value={localAppInfo.name}
            onChange={handleChange}
            className={styles.input}
          />
          <textarea
            name="work"
            value={localAppInfo.work}
            onChange={handleChange}
            className={styles.textarea}
          />
          <input
            name="place"
            value={localAppInfo.place}
            onChange={handleChange}
            className={styles.input}
          />
          <div className={styles.time}>
            <input
              name="date"
              value={localAppInfo.date}
              onChange={handleChange}
              type="date"
              className={styles.containerItem}
            />
            <input
              name="time"
              value={localAppInfo.time}
              onChange={handleChange}
              type="time"
              className={styles.containerItem}
            />
          </div>
        </div>
      )}

      <div className={styles.buttons}>
        <button className={styles.btn} onClick={() => deleteApp(application.id)}>
          <MdDeleteForever className={styles.image} />
        </button>

        {!isEditing ? (
          <button className={styles.btn} onClick={() => setIsEditing(true)}>
            <GrEdit />
          </button>
        ) : (
          <button className={styles.btn} onClick={handleSave}>
            <FaCheck />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
