import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { fetchHomepage } from "../../core/api/HomepageData";
import { useAuth } from "../../core/contexts/AuthContext";

const Homepage = () => {
  const [homeData, setHomeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    generation: "",
    department: "",
    search: ""
  });

  const { auth } = useAuth();

  useEffect(() => {
    if (auth.token) {
      fetchHomepage(auth.token)
        .then((data) => {
          setHomeData(data);
          setFilteredData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [auth.token]);

  useEffect(() => {
    const searchTerm = filters.search.toLowerCase().trim();

    const result = homeData.filter((item) => {
      const matchesGen = filters.generation
        ? item.generation_year === Number(filters.generation)
        : true;
      const matchesDept = filters.department
        ? item.department.toLowerCase() === filters.department.toLowerCase()
        : true;
      const matchesSearch = searchTerm
        ? `${item.name} ${item.department} ${item.generation_year}`
          .toLowerCase()
          .includes(searchTerm)
        : true;

      return matchesGen && matchesDept && matchesSearch;
    });

    setFilteredData(result);
  }, [filters, homeData]);

  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      ...(key !== "search" ? { search: "" } : {})
    }));
  };

  const getUnique = (key) =>
    [...new Set(homeData.map((item) => item[key]))].sort();

  const clearFilters = () => {
    setFilters({ generation: "", department: "", search: "" });
  };

  return (
    <main className="max-w-screen-xl mx-auto p-4 flex flex-col gap-7 mt-5">
      <div className="pb-5">
        <div className="flex justify-between items-center mb-4">
          <p className="font-bold text-xl">All Schedule</p>
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Clear Filters
          </button>
        </div>

        <div className="mb-3 text-sm text-gray-500">
          Showing {filteredData.length} of {homeData.length} schedules
        </div>
        <div className="mb-4 flex gap-4 flex-wrap">
          <select
            className="border rounded-md w-[150px] h-[35px] text-gray-700"
            value={filters.generation}
            onChange={(e) => handleChange("generation", e.target.value)}
          >
            <option value="">All Generations</option>
            {getUnique("generation_year").map((val) => (
              <option key={val} value={val}>
                Gen {val}
              </option>
            ))}
          </select>

          <select
            className="border rounded-md w-[180px] h-[35px] text-gray-700"
            value={filters.department}
            onChange={(e) => handleChange("department", e.target.value)}
          >
            <option value="">All Departments</option>
            {getUnique("department").map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>

        <input
          type="text"
          placeholder="Search by name, department, or generation..."
          className="border rounded-md h-[40px] p-3 w-full"
          value={filters.search}
          onChange={(e) => handleChange("search", e.target.value)}
        />
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 place-items-center">
        {loading ? (
          <div className="col-span-full flex justify-center items-center">
            <div className="animate-spin rounded-full border-t-4 border-blue-500 h-10 w-10"></div>
          </div>
        ) : filteredData.length == 0 ? (
          <div className="col-span-full text-gray-500 text-center">
            No schedules found.
          </div>
        ) : (
          filteredData.map((group, index) => (
            <Card
              key={`${group.id}-${index}`}
              name={group.name}
              department={group.department}
              year={group.generation_year}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default Homepage;
