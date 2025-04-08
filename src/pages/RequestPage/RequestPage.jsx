import React, { useState, useEffect } from "react";
import { fetchAvailableRooms } from "../../core/api/AvailableRoom";
import { RequestModal } from "./local component/RequestModal";
import { useAuth } from "../../core/contexts/AuthContext";
import { submitRoomRequest } from "../../core/api/RequestRoom";
import { fetchRequestHistory } from "../../core/api/RequestHistory";
import { fetchCourse } from "../../core/api/CourseData";
import { TableSkeleton } from "./local component/TableSkeleton";

const RequestPage = () => {
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [courses, setCourses] = useState();
  const [requestReason, setRequestReason] = useState("");
  const { auth } = useAuth();
  const [requestHistory, setRequestHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const statusStyles = {
    pending: "bg-blue-100 text-blue-800 px-3 rounded-sm",
    denied: "bg-red-100 text-red-800 px-3 rounded-sm",
    approved: "bg-green-100 text-green-800 px-3 rounded-sm",
  };

  const userId = auth.user.id;

  function formatCustomDate(isoString) {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return "Invalid date";

    const weekday = date.toLocaleString("en-US", { weekday: "long" });
    const day = date.getDate();
    const time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return `${weekday} ${day}, ${time}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rooms = await fetchAvailableRooms(auth.token);
        const activeRooms = rooms.filter((room) => room.is_active !== 0);
        setRooms(activeRooms);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      }

      try {
        const userData = await fetchRequestHistory(auth.token, userId);
        setRequestHistory(userData);
      } catch (error) {
        console.error("Failed to fetch request data:", error);
      }

      try {
        const courseData = await fetchCourse(auth.token);
        setCourses(courseData);
      } catch (error) {
        console.error("Failed to fetch course data:", error);
      }

      setTimeout(() => {
        setLoading(false);
      }, 2000); 
    };

    fetchData();
  }, [auth.token, userId]);

  const handleRequestClick = (room) => {
    if (!loading) {
      setSelectedRoom(room);
      setRequestReason("");
      setShowModal(true);
    }
  };

  const handleSubmit = async () => {
    const requestData = {
      user_id: userId,
      session_type_id: "a3f610a3-9d7e-4df9-9af6-b240dc529475",
      course_id: courses.selected,
      timetable_id: "c8dc2cac-bec8-4652-9471-56640d326621",
      new_start_time: new Date().toISOString().slice(0, 19).replace("T", " "),
      new_end_time: new Date(new Date().getTime() + 60 * 60 * 1000)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      request_type: "normal",
      status: "pending",
      room_id: selectedRoom.id,
      reason: requestReason,
    };

    await submitRoomRequest(
      requestData,
      auth.token,
      selectedRoom,
      rooms,
      setRooms,
      setShowModal
    );
  };

  return (
    <main className="max-w-screen-xl mx-auto p-4 flex flex-col gap-7 mt-5">
      <h1 className="text-xl font-semibold">Available Rooms:</h1>

      {loading ? (
        <TableSkeleton />
      ) : rooms.length > 0 ? (
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border">Room No.</th>
              <th className="px-4 py-2 border">Capacity</th>
              <th className="px-4 py-2 border">Available At</th>
              <th className="px-4 py-2 border">Request</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{room.name}</td>
                <td className="px-4 py-2 border">{room.capacity}</td>
                <td className="px-4 py-2 border">
                  Wednesday, 09:00 AM - 10:15 AM
                </td>
                <td className="px-4 py-2 border">
                  <button
                    className="text-blue-600 underline"
                    onClick={() => handleRequestClick(room)}
                  >
                    Request
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No Rooms Available</div>
      )}

      <RequestModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedRoom={selectedRoom}
        requestReason={requestReason}
        setRequestReason={setRequestReason}
        onSubmit={handleSubmit}
        setCourses={setCourses}
        courses={courses}
      />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Your Requests:</h2>

        {loading ? (
          <TableSkeleton />
        ) : requestHistory.length > 0 ? (
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 border">Room No.</th>
                <th className="px-4 py-2 border">Request at</th>
                <th className="px-4 py-2 border">Request Status</th>
              </tr>
            </thead>
            <tbody>
              {requestHistory.map((data, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{data.room_name}</td>
                  <td className="px-4 py-2 border">
                    {formatCustomDate(data.requested_date)}
                  </td>
                  <td className="px-4 py-2 border">
                    <span className={statusStyles[data.status]}>
                      {data.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>You have no pending requests.</p>
        )}
      </div>
    </main>
  );
};

export default RequestPage;
