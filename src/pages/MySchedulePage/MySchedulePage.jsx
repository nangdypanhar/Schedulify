import React, { useEffect, useState } from "react";
import MyScheduleTable from "./MyScheduleTable";
import { fetchMySchedule } from "../../core/api/MyScheduleData";
import { useAuth } from "../../core/contexts/AuthContext";
import { TableSkeleton } from "../RequestPage/local_component/TableSkeleton";

const MySchedulePage = () => {
  const { auth } = useAuth();
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMySchedule(auth.token)
      .then((data) => setSchedule(data || []))
      .catch((err) => {
        console.error(err);
        setSchedule([]);
      })
      .finally(() => setTimeout(() => setLoading(false), 2000));
  }, [auth.token]);

  const headers = [
    "Time",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const organizeScheduleByDay = (scheduleData) => {
    if (!scheduleData || scheduleData.length === 0) return {};

    const days = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
    };

    scheduleData.forEach((entry) => {
      const day = entry.day?.toLowerCase();
      if (days[day]) days[day].push(entry);
    });

    return days;
  };

  const formatToAMPM = (time) => {
    const [hour, minute] = time.split(":").map(Number);
    const ampm = hour >= 12 ? "PM" : "AM";
    const adjustedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${adjustedHour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")} ${ampm}`;
  };

  const isInTimeSlot = (start_time, end_time, timeSlot) => {
    const toMinutes = (time) => {
      const [h, m] = time.split(":").map(Number);
      return h * 60 + m;
    };

    const [slotStart, slotEnd] = timeSlot.split(" - ").map(toMinutes);
    const start = toMinutes(start_time);
    const end = toMinutes(end_time);

    return (
      (start <= slotStart && end >= slotStart) ||
      (start <= slotEnd && end >= slotEnd)
    );
  };

  const timeSlots = [
    "08:30 - 10:00",
    "10:15 - 11:45",
    "13:00 - 14:30",
    "14:45 - 16:15",
  ];

  const daysSchedule = organizeScheduleByDay(schedule);

  const tableRows = timeSlots.map((slot) => {
    const [start, end] = slot.split(" - ");
    const row = [
      <p className="text-center">
        {formatToAMPM(start)} - {formatToAMPM(end)}
      </p>,
    ];

    headers.slice(1).forEach((day) => {
      const entry = daysSchedule[day.toLowerCase()]?.find((cls) =>
        isInTimeSlot(cls.start_time, cls.end_time, slot)
      );

      row.push(
        entry ? (
          <div className="flex flex-col items-center">
            <span>{entry.course}</span>
            <span className="text-xs text-gray-60 font-medium">Room {entry.room}</span>
          </div>
        ) : (
          <p className=" italic font-medium">No class</p>
        )
      );
    });

    return row;
  });

  const dayMap = {
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
  };

  const today = new Date().getDay();
  const todayKey = dayMap[today];

  const todaysSchedule = schedule
    .filter((entry) => entry.day?.toLowerCase() === todayKey)
    .sort((a, b) => a.start_time.localeCompare(b.start_time));

  return (
    <main className="max-w-screen-xl mx-auto p-4 flex flex-col gap-7 mt-5">
      <h1 className="text-3xl font-bold">My Schedule</h1>

      {loading ? (
        <TableSkeleton />
      ) : schedule.length === 0 ? (
        <li className="text-gray-500 italic"> No schedule found 📭</li>
      ) : (
        <MyScheduleTable headers={headers} rows={tableRows} />
      )}

      {!loading && (
        <>
          <h1 className="text-xl font-bold mt-6">Today's Schedule:</h1>
          <ul className="list-disc list-inside space-y-1 pl-4">
            {todaysSchedule.length > 0 ? (
              todaysSchedule.map((entry, index) => (
                <li key={index}>
                  <span className="font-medium mx-1">{entry.course}</span>, at  
                    {entry.room ? (
                    <span className="text-gray-700 font-medium mx-1">Room {entry.room}</span>
                  ) : (
                    <span className="text-red-400 italic">N / A</span>
                  )}
                  (
                  <span className="text-sm text-gray-600">
                    {entry.start_time} - {entry.end_time}
                  </span>
                  )
                </li>
              ))
            ) : (
              <li className="text-gray-500 italic">No schedule for today 🎉</li>
            )}
          </ul>
        </>
      )}
    </main>
  );
};

export default MySchedulePage;
