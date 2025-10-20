import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./layouts/Main/Main";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import Home from "./pages/Home/Home";
import CustomerPortal from "./pages/CustomerPortal/CustomerPortal";
import SurveyorPortal from "./pages/SurveyorPortal/SurveyorPortal";

const App = () => {
  return (
    <div className="content">
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/customer-portal" element={<CustomerPortal />} />
            <Route path="/surveyor-portal" element={<SurveyorPortal />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
