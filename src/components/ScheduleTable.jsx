import React from "react";

const TableHead = ({ children }) => (
  <th
    scope="col"
    className="px-6 py-3 text-gray-700 uppercase bg-gray-50 border text-center"
  >
    {children}
  </th>
);

const Table = ({ headers, rows }) => {
  const timeSlots = [
    ...new Set(
      rows.flatMap((row) => Object.values(row).map((entry) => entry.time))
    ),
  ];

  return (
    <div className="relative overflow-x-auto shadow-md">
      <table className="w-full text-sm text-left text-gray-500">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time, index) => (
            <tr key={index} className="hover:bg-gray-100 border-b">
              <td className="p-2 font-bold border text-center">{time}</td>
              {headers.slice(1).map((day, dayIndex) => {
                const entry = rows.find((row) => row[day]?.time === time)?.[
                  day
                ];
                return (
                  <td key={dayIndex} className="border p-2 text-center">
                    {entry ? (
                      <>
                        <strong>{entry.subject}</strong>

                        {entry.room && (
                          <>
                            <br />
                            <span>Room {entry.room}</span>
                          </>
                        )}
                      </>
                    ) : (
                      <p className="text-red-400">No Class</p>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
