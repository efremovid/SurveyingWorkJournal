import React, { useEffect, useState } from "react";
import styles from "./CustomerPortal.module.scss";
import axios from "axios";
import Cards from "../../components/Cards/Cards";
import Form from "../../components/Form/Form";
import Preloader from "../../components/Preloader/Preloader";

const CustomerPortal = () => {
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [appInfo, setAppInfo] = useState({
    company: "",
    name: "",
    place: "",
    work: "",
    date: "",
    time: "",
    status: "отправлено инженеру-геодезисту",
  });

  const handleChange = (e) => {
    setAppInfo({ ...appInfo, [e.target.name]: e.target.value });
  };

  const addApplication = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://6862c75696f0cc4e34baf165.mockapi.io/applications",
        appInfo,
        { headers: { "Content-Type": "application/json" } }
      );
      setApplications([...applications, response.data]);
    } catch (err) {
      console.error("Ошибка загрузки данных:", err.message);
    }
    setAppInfo({
      company: "",
      name: "",
      place: "",
      work: "",
      date: "",
      time: "",
      status: "отправлено инженеру-геодезисту",
    });
  };

  const deleteApp = async (id) => {
    try {
      await axios.delete(
        `https://6862c75696f0cc4e34baf165.mockapi.io/applications/${id}`
      );
      setApplications((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  };

  const updateApplication = async (id, updatedApp) => {
    try {
      const response = await axios.put(
        `https://6862c75696f0cc4e34baf165.mockapi.io/applications/${id}`,
        updatedApp,
        { headers: { "Content-Type": "application/json" } }
      );
      const updated = response.data;
      setApplications((prev) =>
        prev.map((app) => (app.id === id ? updated : app))
      );
    } catch (err) {
      console.error("Ошибка при обновлении данных:", err.message);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://6862c75696f0cc4e34baf165.mockapi.io/applications")
      .then((response) => setApplications(response.data))
      .catch((error) => console.error("Ошибка загрузки:", error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      <Form
        handleChange={handleChange}
        addApplication={addApplication}
        appInfo={appInfo}
      />

      {isLoading ? (
        <Preloader />
      ) : applications.length === 0 ? (
        <p>Нет задач</p>
      ) : (
        <Cards
          applications={applications}
          deleteApp={deleteApp}
          updateApplication={updateApplication}
        />
      )}
    </div>
  );
};

export default CustomerPortal;
