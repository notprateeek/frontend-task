'use client'

import GlobalStats from '@/app/components/GlobalStats'
import WalletDistributionChart from '@/app/components/WalletDistributionChart'
import FiltersAndTabs from '@/app/components/FiltersAndTabs'
import { AssetsTable, ChainsTable } from '@/app/components/Tables'

export default function Home() {
  return (
    <div>
      <h1>helo</h1>
      <GlobalStats />
      <FiltersAndTabs />
      <WalletDistributionChart />
      <AssetsTable />
      <ChainsTable />
    </div>
  )
}
