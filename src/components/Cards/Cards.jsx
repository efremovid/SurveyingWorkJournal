import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";

const Cards = ({ applications, deleteApp, updateApplication }) => {
  const [selectedStatus, setSelectedStatus] = useState("Все заявки");

  const filteredApp = () => {
    return selectedStatus === "Все заявки"
      ? applications
      : applications.filter(
          (app) => app.status.toLowerCase() === selectedStatus.toLowerCase()
        );
  };

  return (
    <>
      <div className={styles.btns}>
        <button
          style={
            selectedStatus === "Все заявки"
              ? { background: "rgb(232, 232, 232)" }
              : {}
          }
          onClick={() => setSelectedStatus("Все заявки")}
        >
          All
        </button>
        <button
          style={
            selectedStatus === "Отправлено инженеру-геодезисту"
              ? { background: "rgb(232, 232, 232)" }
              : {}
          }
          onClick={() => setSelectedStatus("Отправлено инженеру-геодезисту")}
        >
          Send
        </button>
        <button
          style={
            selectedStatus === "Принято в работу"
              ? { background: "rgb(232, 232, 232)" }
              : {}
          }
          onClick={() => setSelectedStatus("Принято в работу")}
        >
          Received
        </button>
        <button
          style={
            selectedStatus === "Выполнено"
              ? { background: "rgb(232, 232, 232)" }
              : {}
          }
          onClick={() => setSelectedStatus("Выполнено")}
        >
          Done
        </button>
        <button
          style={
            selectedStatus === "Отклонено"
              ? { background: "rgb(232, 232, 232)" }
              : {}
          }
          onClick={() => setSelectedStatus("Отклонено")}
        >
          Rejected
        </button>
      </div>

      <div className={styles.container}>
        {filteredApp().map((application) => (
          <Card
            key={application.id}
            application={application}
            deleteApp={deleteApp}
            updateApplication={updateApplication}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
