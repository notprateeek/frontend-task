import { configureStore } from '@reduxjs/toolkit'
import metricsReducer from '@/store/slices/metricsSlice'
import walletDistributionReducer from '@/store/slices/walletDistributionSlice'
import assetsReducer from '@/store/slices/assetsSlice'
import chainsReducer from '@/store/slices/chainsSlice'
import filtersReducer from '@/store/slices/filtersSlice'

export const store = configureStore({
  reducer: {
    metrics: metricsReducer,
    walletDistribution: walletDistributionReducer,
    assets: assetsReducer,
    chains: chainsReducer,
    filters: filtersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
