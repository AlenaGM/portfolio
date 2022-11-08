import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataContextProvider from "./context/DataContext";
import "./App.scss";

import {
  AboutPage,
  ContactPage,
  HomePage,
  ProjectsPage,
  SkillsPage,
  Page404,
} from "./pages";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app" id="app">
        <Header />
        <DataContextProvider>
          <main className="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/*" element={<Page404 />} />
            </Routes>
          </main>
        </DataContextProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
