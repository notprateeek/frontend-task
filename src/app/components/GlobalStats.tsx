import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

type StatCardProps = {
  title: string
  value: number
}

const GlobalStats = () => {
  const { wallets, transactions, chains, zkScores } = useSelector(
    (state: RootState) => state.metrics,
  )

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <StatCard title="Total Wallets Scored" value={wallets} />
      <StatCard title="Total Transactions Tracked" value={transactions} />
      <StatCard title="Total Chains Scored" value={chains} />
      <StatCard title="zKTL Real World Scores Generated" value={zkScores} />
    </div>
  )
}

const StatCard = ({ title, value }: StatCardProps) => (
  <div className="bg-white p-4 shadow rounded-lg text-center">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-xl font-bold">{value}</p>
  </div>
)

export default GlobalStats
