import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Overview from "../components/Overview";

const LoginPage = ({ setCurrentPage }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="bg-white h-screen w-1/2">
        <LoginForm setCurrentPage={setCurrentPage} />
      </div>
      <div className="bg-blue-700 w-1/2">
        <Overview />
      </div>
    </div>
  );
};
export default LoginPage;
