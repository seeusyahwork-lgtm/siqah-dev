export default function Table({ columns = [], data = [] }) {
  return (
    <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-sm">
      <table className="min-w-full text-sm text-left text-gray-600">
        <thead className="bg-gray-50 border-b">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="px-4 py-2 font-semibold text-gray-700">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-400"
              >
                Tidak ada data tersedia
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 transition">
                {columns.map((col, j) => (
                  <td key={j} className="px-4 py-2 border-t">
                    {typeof col.render === "function"
                      ? col.render(row)
                      : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
