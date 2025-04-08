import axios from "../../core/axios";

export const submitRoomRequest = async (
  requestData,
  authToken,
  selectedRoom,
  rooms,
  setRooms,
  setShowModal
) => {
  try {
    const response = await axios.post("/user/auth/v1/request", requestData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });

    console.log("Response:", response);

    if (response.status === 200) {
      const updatedRooms = rooms.filter((room) => room.id !== selectedRoom.id);
      setRooms(updatedRooms);

      setShowModal(false);
      alert("Request submitted successfully!");
    } else {
      alert(`Error: ${response.data.message}`);
    }
  } catch (error) {
    console.error("Error submitting request:", error);
    alert("Failed to submit request. Please try again.");
  }
};
