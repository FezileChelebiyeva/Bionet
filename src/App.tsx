import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "pages/ProjectsPage";
import HeaderComponent from "components/HeaderComponent";
import Footer from "components/Footer";
import ServicesPage from "pages/ServicesPage";
import AboutPage from "pages/AboutPage";
import ContactsPage from "pages/ContactsPage";
import LoadingPage from "components/LoadingPage";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projectsPage" element={<ProjectsPage />} />
            <Route path="/servicesPage" element={<ServicesPage />} />
            <Route path="/aboutPage" element={<AboutPage />} />
            <Route path="/contactsPage" element={<ContactsPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
