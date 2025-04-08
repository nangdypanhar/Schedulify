import React from "react";

const MyScheduleTable = ({ headers, rows }) => {
  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border p-2 text-center">
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
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border p-2">
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
