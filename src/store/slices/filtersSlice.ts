import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { selectedChain: 'All Chains', activeTab: 'Overview' },
  reducers: {
    setSelectedChain: (state, action: PayloadAction<string>) => {
      state.selectedChain = action.payload
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload
    },
  },
})

export const { setSelectedChain, setActiveTab } = filtersSlice.actions
export default filtersSlice.reducer
