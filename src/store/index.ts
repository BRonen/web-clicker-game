import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from './score'
import upgradesReducer from './upgrades'

export const store = configureStore({
    reducer: {
        score: scoreReducer,
        upgrades: upgradesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch