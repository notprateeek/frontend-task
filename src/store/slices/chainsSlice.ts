import { createSlice } from '@reduxjs/toolkit'

const chainsSlice = createSlice({
  name: 'chains',
  initialState: [
    { name: 'Ethereum', volume: '$20B', uaw: '100M', transactions: '1B' },
    { name: 'Base', volume: '$18B', uaw: '150M', transactions: '1.5B' },
    { name: 'Bera', volume: '$12B', uaw: '200M', transactions: '2B' },
    { name: 'Polygon', volume: '$10B', uaw: '10M', transactions: '100M' },
    { name: 'Arbitrum', volume: '$8B', uaw: '50M', transactions: '500M' },
  ],
  reducers: {
    setChains: (state, action) => action.payload,
  },
})

export const { setChains } = chainsSlice.actions
export default chainsSlice.reducer
