import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ScoreState {
  value: number
}

const initialState: ScoreState = {
    value: 0,
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        increment: (state: ScoreState) => {
            state.value++
        },
        decrement: (state: ScoreState) => {
            state.value -= 1
        },
        incrementByAmount: (state: ScoreState, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
        hydrate: (state: ScoreState, action: PayloadAction<ScoreState>) => {
            return {...state, ...action.payload}
        }
    },
})

export const { increment, decrement, incrementByAmount, decrementByAmount, hydrate } = scoreSlice.actions

export default scoreSlice.reducer