import React from "react";

const MyScheduleTable = ({ headers, rows }) => {
  return (
    <table className="min-w-full border-collapse text-sm text-left text-gray-500">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="px-6 py-3 text-gray-700 uppercase bg-gray-50 border text-center"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <td colSpan={headers.length} className="border p-2 text-center">
              No schedule available
            </td>
          </tr>
        ) : (
          rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100 border-b">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="p-2 font-bold border text-center">
                  {cell}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default MyScheduleTable;
