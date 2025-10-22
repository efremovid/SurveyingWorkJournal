import React, { useEffect, useState } from "react";
import styles from "./SurveyorPortal.module.scss";
import Search from "../../componentsForSurveyor/Search/Search";
import Cards from "../../componentsForSurveyor/Cards/Cards";
import axios from "axios";
import makeLowerCase from "../../utils/makeLowerCase";

const SurveyorPortal = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);

  const handleSearch = (search) => {
    if (!search.trim()) {
      setFilteredApplications([]);
      return;
    }

    const lowerSearch = search.toLowerCase();
    const filtered = applications.filter((app) =>
      makeLowerCase(app).join(" ").includes(lowerSearch)
    );

    setFilteredApplications(filtered);
  };

  const changeStatus = async (application, status) => {
    const appInfo = {
      ...application,
      status,
    };

    try {
      const { data } = await axios.put(
        `https://6862c75696f0cc4e34baf165.mockapi.io/applications/${application.id}`,
        appInfo,
        { headers: { "Content-Type": "application/json" } }
      );
      setApplications((prev) =>
        prev.map((item) => (item.id === application.id ? data : item))
      );
    } catch (err) {
      console.error("Ошибка изменения статуса:", err.message);
    }
  };

  const addComment = async (application, comment) => {
    const appInfo = {
      ...application,
      comment,
    };

    try {
      const { data } = await axios.put(
        `https://6862c75696f0cc4e34baf165.mockapi.io/applications/${application.id}`,
        appInfo,
        { headers: { "Content-Type": "application/json" } }
      );

      setApplications((prev) =>
        prev.map((item) => (item.id === application.id ? data : item))
      );
    } catch (err) {
      console.error("Ошибка добавления комментария:", err.message);
    }
  };

  useEffect(() => {
    axios
      .get("https://6862c75696f0cc4e34baf165.mockapi.io/applications")
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        console.error("Ошибка загрузки данных:", error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Search handleSearch={handleSearch} />
      <Cards
        applications={
          filteredApplications.length > 0 ? filteredApplications : applications
        }
        changeStatus={changeStatus}
        addComment={addComment}
      />
    </div>
  );
};

export default SurveyorPortal;
