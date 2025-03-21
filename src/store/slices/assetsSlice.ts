import { createSlice } from '@reduxjs/toolkit'

const assetsSlice = createSlice({
  name: 'assets',
  initialState: [
    {
      name: 'USDC',
      borrowVolume: '$20B',
      collateralVolume: '100M',
      totalVolume: '1B',
    },
    {
      name: 'USDT',
      borrowVolume: '$18B',
      collateralVolume: '150M',
      totalVolume: '1.5B',
    },
    {
      name: 'ETH',
      borrowVolume: '$12B',
      collateralVolume: '200M',
      totalVolume: '2B',
    },
    {
      name: 'BASE',
      borrowVolume: '$10B',
      collateralVolume: '10M',
      totalVolume: '100M',
    },
    {
      name: 'ARB',
      borrowVolume: '$8B',
      collateralVolume: '50M',
      totalVolume: '500M',
    },
  ],
  reducers: {
    setAssets: (state, action) => action.payload,
  },
})

export const { setAssets } = assetsSlice.actions
export default assetsSlice.reducer
