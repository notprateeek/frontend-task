import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const Table = ({
  data,
  columns,
  title,
}: {
  data: any[]
  columns: string[]
  title: string
}) => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const itemsPerPage = 5

  const filteredData = data.filter((item) =>
    columns.some((col) =>
      item[col]?.toString().toLowerCase().includes(search.toLowerCase()),
    ),
  )

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  )

  return (
    <div className="p-6 bg-gray-900 shadow-lg rounded-xl text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-700 bg-gray-800 rounded-md text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-800 text-gray-300">
              {columns.map((col) => (
                <th key={col} className="p-3 uppercase text-sm font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-800"
              >
                {columns.map((col) => (
                  <td key={col} className="p-3">
                    {item[col] || '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded-md transition-colors ${
              page === i + 1 ? 'bg-blue-500' : 'bg-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export const AssetsTable = () => (
  <Table
    data={useSelector((state: RootState) => state.assets)}
    columns={['name', 'borrowVolume', 'collateralVolume', 'totalVolume']}
    title="Assets"
  />
)
export const ChainsTable = () => (
  <Table
    data={useSelector((state: RootState) => state.chains)}
    columns={['name', 'volume', 'uaw', 'transactions']}
    title="Chains"
  />
)
