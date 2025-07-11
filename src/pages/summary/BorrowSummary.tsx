// src/pages/BorrowSummary.tsx
import { useGetBorrowSummaryQuery } from '../../redux/api/bookCreateApi';

export default function BorrowSummary() {
  const { data, isLoading } = useGetBorrowSummaryQuery({});
  const summary = data?.data ?? [];     // ← aggregated list from your API

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 min-h-[700px]">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        📊 Borrow Summary
      </h1>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white rounded-lg">
          {/* table head */}
          <thead>
            <tr className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm">
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Book&nbsp;Title</th>
              <th className="py-3 px-6 text-left">ISBN</th>
              <th className="py-3 px-6 text-center">Total&nbsp;Borrowed</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody className="text-sm divide-y divide-gray-200">
            {isLoading ? (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-500">
                  Loading summary…
                </td>
              </tr>
            ) : summary.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-500">
                  No borrowed books yet.
                </td>
              </tr>
            ) : (
              summary.map(
                (
                  item: {book: {title: string; isbn: string;}; totalQuantity: number},
                  idx: number
                ) => (
                  <tr
                    key={item.book.isbn}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="py-3 px-6 font-medium text-gray-700">
                      {idx + 1}
                    </td>
                    <td className="py-3 px-6 font-medium text-gray-800">
                      {item.book.title}
                    </td>
                    <td className="py-3 px-6 text-gray-600">{item.book.isbn}</td>
                    <td className="py-3 px-6 text-center">
                      <span className="inline-block bg-emerald-100 text-emerald-700 font-semibold px-3 py-1 rounded-full">
                        {item.totalQuantity}
                      </span>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
