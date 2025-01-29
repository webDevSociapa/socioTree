import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./views/HomeScreen";
// import AboutScreen from "../pages/AboutScreen";
// import ContactScreen from "../pages/ContactScreen";
import Header from "./components/common/header";

const App = () => {
  return (
    <Router>
      <Header />  {/* Header will be consistent across all pages */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
