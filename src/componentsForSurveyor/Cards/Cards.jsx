import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";

const Cards = ({
  applications,
  changeStatus,
  addComment,
  handleChangeComment,
  comment,
}) => {
  const [selectedStatus, setSelectedStatus] = useState("Все заявки");

  const filterByStatus = (arr) => {
    if (selectedStatus === "Все заявки") {
      return arr;
    } else {
      return arr.filter(
        (el) => el.status.toLowerCase() === selectedStatus.toLowerCase()
      );
    }
  };

  const statuses = [
    "Все заявки",
    "Отправлено инженеру-геодезисту",
    "Принято в работу",
    "Выполнено",
    "Отклонено",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {statuses.map((status) => (
          <button
            key={status}
            className={`${styles.button} ${
              selectedStatus === status ? styles.active : ""
            }`}
            onClick={() => setSelectedStatus(status)}
          >
            {status}
          </button>
        ))}
      </div>
      {filterByStatus(applications).map((application) => (
        <Card
          application={application}
          changeStatus={changeStatus}
          addComment={addComment}
          handleChangeComment={handleChangeComment}
          comment={comment}
        />
      ))}
    </div>
  );
};

export default Cards;
