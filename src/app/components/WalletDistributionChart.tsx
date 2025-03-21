import { useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import { Chart, CategoryScale, registerables } from 'chart.js'
import { RootState } from '@/store/store'

Chart.register(CategoryScale, ...registerables)

const WalletDistributionChart = () => {
  const walletDistribution = useSelector(
    (state: RootState) => state.walletDistribution,
  )
  const selectedChain = useSelector(
    (state: RootState) => state.filters.selectedChain,
  )
  const activeTab = useSelector((state: RootState) => state.filters.activeTab)

  const filteredData =
    walletDistribution[selectedChain] ?? walletDistribution['All Chains']

  const data = {
    labels: Object.keys(filteredData || {}),
    datasets: [
      {
        label: `Wallet Distribution - ${activeTab}`,
        data: Object.values(filteredData || {}),
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  }

  return <Bar data={data} />
}

export default WalletDistributionChart
