export const TableSkeleton = () => (
  <div className="w-full animate-pulse">
    <div className="flex flex-col gap-2">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="grid grid-cols-4 gap-4 p-2 border border-gray-200 rounded-md bg-white shadow-sm"
        >
          <div className="h-4 bg-gray-200 rounded col-span-1" />
          <div className="h-4 bg-gray-200 rounded col-span-1" />
          <div className="h-4 bg-gray-200 rounded col-span-1" />
          <div className="h-4 bg-gray-200 rounded col-span-1" />
        </div>
      ))}
    </div>
  </div>
);
