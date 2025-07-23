import { createContext, useEffect, useReducer, useRef, useState } from "react";

export const UserList = createContext({
  users: [],
  Authentication: () => {},
  activeUser: null,
  currentWeek: null,
  WeekManagement: () => {},
  timeFrame: null,
});

const scheduleReducer = (currScheduleList, action) => {
  const newScheduleList = currScheduleList;
  return newScheduleList;
};

const UserData = ({ children, setCurrentPage }) => {
  const [activeUser, setActiveUser] = useState(null);
  const [users, setUsers] = useState([]);
  const currentWeek = useRef();
  const timeFrame = useRef();

  useEffect(() => {
    console.log("here");
    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setUsers(data);
      })
      .catch((err) => console.error("Failed to fetch users:", err));
  }, []);

  /*const users = [
    {
      user: "admin@gmail.com",
      password: "1234",
      weekData: [
        {
          id: 1,
          week: 1,
          date: "1 - 5 January, 2024",
          status: "Missing",
          Actions: "View",
          hours: "0",
          percentage: "0",
          days: [
            { date: "Jan 1", tasks: 0, info: [] },
            { date: "Jan 2", tasks: 0, info: [] },
            { date: "Jan 3", tasks: 0, info: [] },
            { date: "Jan 4", tasks: 0, info: [] },
            { date: "Jan 5", tasks: 0, info: [] },
            ,
          ],
        },
        {
          id: 2,
          week: 2,
          date: "8 - 12 January, 2024",
          status: "Incomplete",
          Actions: "Update",
          hours: "12",
          percentage: "30",
          days: [
            {
              date: "Jan 8",
              tasks: 2,
              info: [
                {
                  Work: "Homepage Development",
                  Project: "Project Name",
                  hours: "4",
                },
                {
                  Work: "Homepage Development",
                  Project: "Project Name",
                  hours: "4",
                },
              ],
            },
            { date: "Jan 9", tasks: 0, info: [] },
            { date: "Jan 10", tasks: 0, info: [] },
            { date: "Jan 11", tasks: 0, info: [] },
            {
              date: "Jan 12",
              tasks: 1,
              info: [
                {
                  Work: "Homepage Development",
                  Project: "Project Name",
                  hours: "4",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          week: 3,
          date: "15 - 19 January, 2024",
          status: "Missing",
          Actions: "Create",
          hours: "0",
          percentage: "0",
          days: [
            {
              date: "Jan 15",
              tasks: 0,
              info: [],
            },
            { date: "Jan 16", tasks: 0, info: [] },
            { date: "Jan 17", tasks: 0, info: [] },
            { date: "Jan 18", tasks: 0, info: [] },
            { date: "Jan 19", tasks: 0, info: [] },
          ],
        },
        {
          id: 4,
          week: 4,
          date: "22 - 26 January, 2024",
          status: "Completed",
          Actions: "View",
          hours: "40",
          percentage: "100",
          days: [
            {
              date: "Jan 22",
              tasks: 2,
              info: [
                {
                  Work: "Homepage Development",
                  Project: "Project Name",
                  hours: "4",
                },
                {
                  Work: "Homepage Development",
                  Project: "Project Name",
                  hours: "4",
                },
              ],
            },
            {
              date: "Jan 23",
              tasks: 3,
              info: [
                {
                  Work: "Homepage Development",
                  Project: "Project Name",
                  hours: "4",
                },
                {
                  Work: "Homepage Development",
                  Project: "Project Name",
                  hours: "4",
                },
                {
                  Work: "Homepage Development",
                  Project: "Project Name",
                  hours: "4",
                },
              ],
            },
            {
              date: "Jan 24",
              tasks: 3,
              info: [
                {
                  Work: "Homepage Development",
                  Project: "Project Name",
                  hours: "4",
                },
                {
                  Work: "Homepage Development",
                  Project: "Project Name",
                  hours: "4",
                },
                {
                  Work: "Homepage Development",
                  Project: "Project Name",
                  hours: "4",
                },
              ],
            },
            {
              date: "Jan 25",
              tasks: 2,
              info: [
                {
                  Work: "Homepage Development",
                  Project: "Project Name",
                  hours: "4",
                },
                {
                  Work: "Homepage Development",
                  Project: "Project Name",
                  hours: "4",
                },
              ],
            },
            { date: "Jan 26", tasks: 0, info: [] },
          ],
        },
        {
          id: 5,
          week: 5,
          date: "28 January - 1 February, 2024",
          status: "Missing",
          Actions: "Create",
          hours: "0",
          percentage: "0",
          days: [
            { date: "Jan 28", tasks: 0, info: [] },
            { date: "Jan 29", tasks: 0, info: [] },
            { date: "Jan 30", tasks: 0, info: [] },
            { date: "Jan 31", tasks: 0, info: [] },
            { date: "Feb 1", tasks: 0, info: [] },
          ],
        },
      ],
    },
    {
      user: "john@gmail.com",
      password: "abcd",
      weekData: [
        {
          id: 1,
          week: 1,
          date: "1-5 January, 2024",
          status: "Completed",
          Actions: "View",
          hours: "0",
          percentage: "0",
          days: [],
        },
        {
          id: 2,
          week: 2,
          date: "8-12 January, 2024",
          status: "Incomplete",
          Actions: "Update",
          hours: "0",
          percentage: "0",
          days: [],
        },
      ],
    },
    { user: "jane@gmail.com", password: "qwerty", weekData: [] },
  ];*/

  const Authentication = (email, password) => {
    const activeuser = users.find(
      (account) => account.user === email && account.password === password
    );
    console.log(activeuser);
    if (activeuser) {
      console.log("entry");
      setActiveUser(activeuser);
      setCurrentPage("Dashboard");
    }
  };

  const WeekManagement = (id) => {
    console.log(id);
    console.log(activeUser);
    const allDays = activeUser.weekData.find((data) => data.id === id);
    timeFrame.current = allDays.date;
    console.log(allDays);
    currentWeek.current = allDays.days;
  };

  return (
    <UserList.Provider
      value={{
        users,
        Authentication,
        activeUser,
        currentWeek,
        WeekManagement,
        timeFrame,
      }}
    >
      {children}
    </UserList.Provider>
  );
};

export default UserData;
