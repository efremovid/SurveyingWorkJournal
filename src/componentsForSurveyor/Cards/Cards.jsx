import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";

const Cards = ({ applications , changeStatus}) => {
  return (
    <div className={styles.container}>
      {applications.map((application) => (
        <Card application={application} changeStatus={changeStatus}/>
      ))}
    </div>
  );
};

export default Cards;
