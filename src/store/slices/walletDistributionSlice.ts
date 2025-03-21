import { createSlice } from '@reduxjs/toolkit'

interface WalletDistributionState {
  [chain: string]: Record<string, number>
}

const initialState: WalletDistributionState = {
  'All Chains': {
    '0-200': 1500,
    '200-400': 1200,
    '400-600': 900,
    '600-800': 600,
    '800-1000': 100,
  },
  Ethereum: {
    '0-200': 1400,
    '200-400': 1100,
    '400-600': 800,
    '600-800': 500,
    '800-1000': 90,
  },
  Base: {
    '0-200': 1300,
    '200-400': 1000,
    '400-600': 700,
    '600-800': 400,
    '800-1000': 80,
  },
}

const walletDistributionSlice = createSlice({
  name: 'walletDistribution',
  initialState,
  reducers: {
    setWalletDistribution: (state, action) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { setWalletDistribution } = walletDistributionSlice.actions
export default walletDistributionSlice.reducer
