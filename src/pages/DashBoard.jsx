import { useContext } from "react";
import { UserList } from "../store/UserData";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DashBoard = ({ dataId }) => {
  const { activeUser, currentWeek, timeFrame } = useContext(UserList);

  const days = currentWeek.current;
  const hours = activeUser.weekData.find((w) => w.date === timeFrame.current);

  console.log(hours.hours);

  const Task = ({ info }) => (
    <div className="flex items-center justify-between border px-4 py-2 rounded-md bg-white shadow-sm">
      <span>{info.Work}</span>{" "}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">{info.hours} hrs</span>
        <span className="text-sm text-blue-900 font-medium bg-blue-200 rounded px-1 py-0.5 my-1">
          {info.Project}
        </span>
        <button className="text-gray-500 hover:text-black">•••</button>
      </div>
    </div>
  );
  return (
    <>
      <Header />
      <div className="bg-gray-100 h-[100%] p-8">
        <div className="p-6 max-w-[70%] mx-auto text-sm font-medium text-gray-700 bg-white ">
          <div className="mb-6 flex">
            <div className="w-[80%]">
              <h2 className="text-xl font-bold mb-1">This week’s timesheet</h2>
              <p className="text-gray-500 mt-7">{timeFrame.current}</p>
            </div>
            <div className="relative">
              <span className="text-base items-center justify-center absolute ml-5 ">
                {hours.hours}/40 hrs
              </span>

              <div className="text-end h-1/2 mt-2">
                <span className="text-sm text-gray-400 ">
                  {hours.percentage}%
                </span>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-3">
                  <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: `${hours.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {days.map(({ date, tasks, info }) => (
              <div key={date} className="flex">
                <div className=" whitespace-nowrap">
                  <h3 className="font-bold text-xl">{date}</h3>
                </div>
                <div className="space-y-2 ml-15 w-[100%]">
                  {info.map((task, i) => (
                    <Task info={task} key={i} />
                  ))}
                  <button
                    className="w-full text-gray-600  border-2 border-gray-300 py-3 rounded-md hover:bg-blue-200 hover:text-blue-800 hover:border-dotted
                  hover:border-blue-800"
                  >
                    + Add new task
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
