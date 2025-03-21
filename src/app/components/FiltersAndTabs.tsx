import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { setSelectedChain, setActiveTab } from '@/store/slices/filtersSlice'

const FiltersAndTabs = () => {
  const dispatch = useDispatch()
  const { selectedChain, activeTab } = useSelector(
    (state: RootState) => state.filters,
  )

  const chains = [
    'All Chains',
    'Ethereum',
    'Base',
    'Bera',
    'Polygon',
    'Arbitrum',
  ]
  const tabs = ['Overview', 'Liquidations', 'Loan Sizes']

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow rounded-lg">
      <select
        className="p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedChain}
        onChange={(e) => dispatch(setSelectedChain(e.target.value))}
      >
        {chains.map((chain) => (
          <option key={chain} value={chain} className="p-2">
            {chain}
          </option>
        ))}
      </select>
      <div className="flex space-x-2 md:space-x-4 mt-2 md:mt-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm md:text-base font-medium 
              ${
                activeTab === tab
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            onClick={() => dispatch(setActiveTab(tab))}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FiltersAndTabs
