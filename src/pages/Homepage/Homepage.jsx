import React from "react";
import Card from "../../components/Card";
import { fetchHomepage } from "../../core/api/HomepageData";
import { useState, useEffect } from "react";
import { useAuth } from "../../core/contexts/AuthContext";

const Homepage = () => {
  const [homeData, setHomeData] = useState([]);

  const [loading, setLoading] = useState(true);
  const { auth } = useAuth();

  useEffect(() => {
    if (auth.token) {
      fetchHomepage(auth.token)
        .then((data) => {
          setHomeData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [auth.token]);
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
        {loading ? (
          <div className="col-span-full flex justify-center items-center">
            <div className="animate-spin rounded-full border-t-4 border-blue-500 h-10 w-10"></div>
          </div>
        ) : homeData.length == 0 ? (
          <div className="col-span-full text-gray-500 text-center">
            No schedules found.
          </div>
        ) : (
          homeData.map((group) => (
            <Card
              key={group.id}
              gen={group.name}
              specialize={group.department}
              year={group.generation_year}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default Homepage;
