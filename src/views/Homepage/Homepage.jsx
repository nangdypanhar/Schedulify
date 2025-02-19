import Card from "../../Components/Card";
import { useState } from "react";

const Homepage = () => {
  const schedules = [
    { id: 1, Gen: 9, Specialize: "Software Engineer", Group: 2 },
    { id: 2, Gen: 10, Specialize: "Data Scientist", Group: 3 },
    { id: 3, Gen: 9, Specialize: "Product Manager", Group: 2 },
    { id: 4, Gen: 11, Specialize: "UI/UX Designer", Group: 1 },
    { id: 5, Gen: 10, Specialize: "Backend Developer", Group: 4 },
    { id: 6, Gen: 12, Specialize: "Frontend Developer", Group: 5 },
    { id: 7, Gen: 9, Specialize: "Business Analyst", Group: 3 },
    { id: 8, Gen: 11, Specialize: "DevOps Engineer", Group: 4 },
    { id: 9, Gen: 12, Specialize: "Full Stack Developer", Group: 1 },
    { id: 10, Gen: 10, Specialize: "Machine Learning Engineer", Group: 2 },
  ];

  return (
    <main className="max-w-screen-xl mx-auto p-4 flex flex-col gap-7">
      <div className=" pb-[20px] ">
        <p className="font-bold text-xl mb-[17px]">All Schedule</p>
        <div className="mb-[20px] flex gap-4">
          {/* Gen filter */}
          <select className="border border-gray-300 rounded-md w-[150px] h-[35px] text-gray-500">
            <option>Gen</option>
          </select>
          {/* specialization filter */}
          <select className="border border-gray-300 rounded-md w-[150px] h-[35px] text-gray-500">
            <option>Specialization</option>
          </select>

          {/* Group ilterf */}
          <select className="border border-gray-300 rounded-md w-[150px] h-[35px] text-gray-500">
            <option>Group</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md h-[40px] p-3 w-full"
          ></input>
        </div>
      </div>
      {/* bottom-grid */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 place-items-center">
        {schedules.map((schedule) => (
          <Card
            key={schedule.id}
            gen={schedule.Gen}
            specialize={schedule.Specialize}
            group={schedule.Group}
          />
        ))}
      </div>
    </main>
  );
};

export default Homepage;
