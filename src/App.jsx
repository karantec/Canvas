import { Route, Routes } from "react-router-dom";
import StartupNewsNavbar from "./Components/Static/Header";
import StartupNewsFooter from "./Components/Static/Footer";
import ContactPage from "./Components/Dynamic/Contact";
import AboutUs from "./Components/Dynamic/About";
import PrivacyPolicy from "./Components/Dynamic/Privacy";
import TermsAndConditions from "./Components/Dynamic/Term";
import RefundPolicy from "./Components/Dynamic/Cancellation";
import StartupNewsComplete from "./Components/Dynamic/Advertisement";
import AuthorArchivePage from "./Components/Dynamic/Android";

export default function App() {
  return (
    <div>
      <StartupNewsNavbar />
      <Routes>
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/cancellation" element={<RefundPolicy />} />
        <Route path="/adverstise" element={<StartupNewsComplete />} />
        <Route path="/android" element={<AuthorArchivePage />} />
      </Routes>
      <StartupNewsFooter />
    </div>
  );
}
