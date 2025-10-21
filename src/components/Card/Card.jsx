import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import styles from "./Card.module.scss";
import { statusCodes } from "../../status";

const Card = ({
  application,
  deleteApp,
  editId,
  handleEditId,
  handleChangeNewInput,
  changeAppInfo,
  changeTaskData,
}) => {
  const date = application.date.split("-").reverse().join("-");
  const isEditingThisCard = editId === application.id;

  return (
    <div className={styles.container}>
      {!isEditingThisCard ? (
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
            onChange={handleChangeNewInput}
            className={styles.input}
            value={changeAppInfo.company || ""}
            type="text"
            name="company"
          />
          <input
            onChange={handleChangeNewInput}
            className={styles.input}
            value={changeAppInfo.name || ""}
            type="text"
            name="name"
          />
          <textarea
            onChange={handleChangeNewInput}
            className={styles.textarea}
            value={changeAppInfo.work || ""}
            name="work"
          />
          <input
            onChange={handleChangeNewInput}
            className={styles.input}
            value={changeAppInfo.place || ""}
            type="text"
            name="place"
          />
          <div className={styles.time}>
            <input
              onChange={handleChangeNewInput}
              className={styles.containerItem}
              value={changeAppInfo.date || ""}
              type="date"
              name="date"
            />
            <input
              onChange={handleChangeNewInput}
              className={styles.containerItem}
              type="time"
              name="time"
              value={changeAppInfo.time || ""}
            />
          </div>
        </div>
      )}

      <div className={styles.buttons}>
        <button
          className={styles.btn}
          onClick={() => deleteApp(application.id)}
        >
          <MdDeleteForever className={styles.image} />
        </button>

        {application.status === statusCodes.default ? (!isEditingThisCard ? (
          <button
            className={styles.btn}
            onClick={() => handleEditId(application.id)}
          >
            <GrEdit />
          </button>
        ) : (
          <button onClick={(e) => changeTaskData(e, application.id)}>
            <FaCheck />
          </button>
        )) : ""}
      </div>
    </div>
  );
};

export default Card;
