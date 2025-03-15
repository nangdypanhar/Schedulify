import React from "react";
import Card from "../../components/Card";
import { fetchHomepage } from "../../service/api/HomepageData";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    fetchHomepage().then(setHomeData).catch(console.error);
  }, []);

  return (
    <main className="max-w-screen-xl mx-auto p-4 flex flex-col gap-7 mt-5">
      <div className=" pb-[20px] ">
        <p className="font-bold text-xl mb-[17px]">All Schedule</p>
        <div className="mb-[20px] flex gap-4">
          <select className="border border-gray-300 rounded-md w-[150px] h-[35px] text-gray-500">
            <option>Gen</option>
          </select>

          <select className="border border-gray-300 rounded-md w-[150px] h-[35px] text-gray-500">
            <option>Specialization</option>
          </select>

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

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-15 place-items-center">
        {homeData.map((schedule) => (
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
