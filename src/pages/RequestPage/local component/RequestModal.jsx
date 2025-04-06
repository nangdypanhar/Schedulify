import { useState } from "react";

export const RequestModal = ({
  showModal,
  setShowModal,
  selectedRoom,
  requestReason,
  setRequestReason,
  setCourses,
  courses,
  onSubmit,
}) => {
  const [loading, setLoading] = useState(false);

  if (!showModal) return null;

  const courseOptions = Object.keys(courses).map((courseName) => ({
    id: courses[courseName],
    name: courseName,
  }));

  console.log("Course Options:", courses);

  const filteredOptions = courseOptions.filter(
    (course) => course.id !== courses.selected
  );

  const selectedCourseName = courses.selected
    ? Object.keys(courses).find((key) => courses[key] === courses.selected)
    : null;

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await onSubmit();
      console.error("Error submitting request:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-4">
          Request Room {selectedRoom.room}
        </h2>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Course:
          </label>
          <div className="relative">
            <select
              className="w-full rounded-md border border-gray-300 p-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={courses.selected || ""}
              onChange={(e) =>
                setCourses({ ...courses, selected: e.target.value })
              }
              required
            >
              {selectedCourseName ? (
                <option value={courses.selected}>{selectedCourseName}</option>
              ) : (
                <option value="" disabled>
                  Select a Course
                </option>
              )}
              {filteredOptions.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
              {filteredOptions.length === 0 && (
                <option disabled>No other courses available</option>
              )}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Reason:
          </label>
          <textarea
            value={requestReason}
            onChange={(e) => setRequestReason(e.target.value)}
            placeholder="Enter your reason for requesting this room..."
            className="w-full border border-gray-300 rounded-md p-2 mb-1 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            maxLength={500}
          />
          <p className="text-xs text-gray-500">
            {requestReason.length}/500 characters
          </p>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!courses.selected || !requestReason.trim() || loading}
            className={`px-4 py-2 text-white rounded-md hover:bg-blue-700 transition-colors ${
              !courses.selected || !requestReason.trim() || loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600"
            }`}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
