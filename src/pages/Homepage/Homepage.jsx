import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { fetchHomepage } from "../../core/api/HomepageData";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    gen: "",
    specialize: "",
    group: "",
    search: ""
  });

  useEffect(() => {
    fetchHomepage()
      .then((res) => {
        setData(res);
        setFilteredData(res);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const searchLower = filters.search.toLowerCase().trim();

    const result = data.filter((item) => {
      const matchesGen = filters.gen ? item.Gen === Number(filters.gen) : true;
      const matchesSpecialize = filters.specialize
        ? item.Specialize.toLowerCase() === filters.specialize.toLowerCase()
        : true;
      const matchesGroup = filters.group
        ? item.Group === Number(filters.group)
        : true;
      const matchesSearch = searchLower
        ? `${item.Gen} ${item.Specialize} ${item.Group}`
          .toLowerCase()
          .includes(searchLower)
        : true;

      return matchesGen && matchesSpecialize && matchesGroup && matchesSearch;
    });

    setFilteredData(result);
  }, [filters, data]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      ...(key !== "search" ? { search: "" } : {}) // reset search on dropdown change
    }));
  };

  const getUniqueValues = (key) =>
    [...new Set(data.map((item) => item[key]))].sort((a, b) =>
      typeof a === "number" ? a - b : a.localeCompare(b)
    );

  const clearFilters = () => {
    setFilters({ gen: "", specialize: "", group: "", search: "" });
  };

  return (
    <main className="max-w-screen-xl mx-auto p-4 flex flex-col gap-7 mt-5">
      <div className="pb-5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">All Schedule</h1>
          <button
            onClick={clearFilters}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Clear Filters
          </button>
        </div>

        {/* Info */}
        <div className="mb-3 text-base text-gray-700 font-semibold">
          Showing <span className="text-blue-600">{filteredData.length}</span> of <span className="text-blue-600">{data.length}</span> schedules
        </div>
        {/* Dropdowns */}
        <div className="flex flex-wrap gap-4 mb-4">
          <select
            className="border rounded-md w-[150px] h-[35px] text-gray-700"
            value={filters.gen}
            onChange={(e) => handleFilterChange("gen", e.target.value)}
          >
            <option value="">All Generations</option>
            {getUniqueValues("Gen").map((val) => (
              <option key={val} value={val}>
                Generation {val}
              </option>
            ))}
          </select>

          <select
            className="border rounded-md w-[180px] h-[35px] text-gray-700"
            value={filters.specialize}
            onChange={(e) => handleFilterChange("specialize", e.target.value)}
          >
            <option value="">All Specializations</option>
            {getUniqueValues("Specialize").map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>

          <select
            className="border rounded-md w-[150px] h-[35px] text-gray-700"
            value={filters.group}
            onChange={(e) => handleFilterChange("group", e.target.value)}
          >
            <option value="">All Groups</option>
            {getUniqueValues("Group").map((val) => (
              <option key={val} value={val}>
                Group {val}
              </option>
            ))}
          </select>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md h-[40px] p-3 w-full"
          value={filters.search}
          onChange={(e) => handleFilterChange("search", e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 place-items-center">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Card
              key={`${item.Gen}-${item.Specialize}-${item.Group}-${index}`}
              gen={item.Gen}
              specialize={item.Specialize}
              group={item.Group}
            />
          ))
        ) : (
          <p className="text-gray-500">No schedules found.</p>
        )}
      </div>
    </main>
  );
};

export default Homepage;
