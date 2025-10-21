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
    setFilteredApplications(
      applications.filter((application) => {
        return makeLowerCase(application)
          .join(" ")
          .includes(search.toLowerCase());
      })
    );
  };

  console.log(filteredApplications);

  useEffect(() => {
    axios
      .get("https://6862c75696f0cc4e34baf165.mockapi.io/applications")
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const changeStatus = async (e, application, status) => {
    e.preventDefault();

    const appInfo = {
      company: application.company,
      name: application.name,
      place: application.place,
      work: application.work,
      date: application.date,
      status: status,
    };
    try {
      const response = await axios.put(
        `https://6862c75696f0cc4e34baf165.mockapi.io/applications/${application.id}`,
        appInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = response.data;
      console.log(result);
    } catch (err) {
      console.error("Ошибка загрузки данных:", err.message);
    }
  };


  console.log(applications);

  return (
    <div className={styles.container}>
      <Search handleSearch={handleSearch} />
      <Cards
        applications={
          filteredApplications.length > 0 ? filteredApplications : applications
        }
        changeStatus={changeStatus}
      />
    </div>
  );
};

export default SurveyorPortal;
