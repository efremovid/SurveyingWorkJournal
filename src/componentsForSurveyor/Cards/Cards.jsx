import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";

const Cards = ({
  applications,
  changeStatus,
  addComment,
  handleChangeComment,
  comment,
}) => {
  return (
    <div className={styles.container}>
      {applications.map((application) => (
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
