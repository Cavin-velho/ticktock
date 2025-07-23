import LoginPage from "./pages/LoginPage";
import WeeklyData from "./pages/WeeklyData";
import DashBoard from "./pages/DashBoard";
import UserData from "./store/UserData";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  return (
    <div className="font-inter">
      <UserData setCurrentPage={setCurrentPage}>
        {currentPage === "login" && <LoginPage />}
        {currentPage === "Dashboard" && (
          <WeeklyData setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "schedule" && <DashBoard />}
      </UserData>
    </div>
  );
}
export default App;
