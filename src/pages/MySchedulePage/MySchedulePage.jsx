import React, { useEffect, useState } from "react";
import Table from "../../components/ScheduleTable";
import { fetchSchedule } from "../../service/ScheduleData";

const MySchedulePage = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetchSchedule().then(setSchedule).catch(console.error);
  }, []);

  const headers = ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const today = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
  
  const convertTo24Hour = (time) => {
    const [hour, minute] = time.split(/:| /);
    let formattedHour = parseInt(hour, 10);
    if (time.includes("PM") && formattedHour !== 12) formattedHour += 12;
    if (time.includes("AM") && formattedHour === 12) formattedHour = 0;
    return formattedHour * 60 + parseInt(minute, 10);
  };

  const todaySchedule = schedule
    .map(row => row[today])
    .filter(Boolean)
    .sort((a, b) => convertTo24Hour(a.time.split(" - ")[0]) - convertTo24Hour(b.time.split(" - ")[0]));

  return (
    <main className="max-w-screen-xl mx-auto p-4 flex flex-col gap-7 mt-5">
      <h1 className="text-3xl font-bold">My Schedule</h1>
      <Table headers={headers} rows={schedule} />
      <h2 className="text-2xl font-medium">Today's Classes:</h2>
      <ul className="list-disc pl-5">
        {todaySchedule.length > 0 ? todaySchedule.map((entry, index) => (
          <li key={index}>
          {entry.subject}, at {entry.room ? `Room ${entry.room}` : <span className="text-red-400">N / A</span>} ({entry.time})

          </li>
        )) : <li>No schedule for today</li>}
      </ul>
    </main>
  );
};

export default MySchedulePage;
