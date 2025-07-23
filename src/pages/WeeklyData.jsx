import Header from "../components/Header";
import Footer from "../components/Footer";
import { UserList } from "../store/UserData";
import { useContext } from "react";
import DashBoard from "./DashBoard";

const WeeklyData = ({ setCurrentPage }) => {
  const { activeUser, WeekManagement } = useContext(UserList);
  const weekData = activeUser.weekData;

  const statusColor = {
    Completed: "bg-green-100 text-green-800",
    Incomplete: "bg-yellow-100 text-yellow-800",
    Missing: "bg-pink-100 text-pink-800",
  };

  return (
    <>
      <Header></Header>
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <div className="p-8 rounded-lg shadow-lg w-full max-w-7xl mt-9 bg-white">
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">
            Your Timesheets
          </h1>{" "}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase">
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="px-6 py-3 text-gray-400 w-[140px]">Week#</th>
                  <th className="px-6 py-3 text-gray-400">Date</th>
                  <th className="px-6 py-3 text-gray-400">Status</th>
                  <th className="px-6 py-3 text-gray-400 w-1 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {weekData.map((data) => (
                  <tr key={data.id} className="border-b border-gray-200">
                    <th className="px-6 py-4 bg-gray-100">{data.week}</th>
                    <td className="px-6 py-4 text-gray-600">{data.date}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`uppercase text-xs font-bold px-2 py-0.5 rounded-md ${
                          statusColor[data.status]
                        }`}
                      >
                        {data.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          console.log("clicked");
                          setCurrentPage("schedule");
                          WeekManagement(data.id);
                        }}
                        className="font-medium text-blue-500 hover:underline"
                      >
                        {data.Actions}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default WeeklyData;
