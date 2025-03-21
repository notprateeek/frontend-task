import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wallets: 12750,
  transactions: 40120,
  chains: 110,
  zkScores: 8654,
}

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    setMetrics: (state, action) => action.payload,
  },
})

export const { setMetrics } = metricsSlice.actions
export default metricsSlice.reducer
