import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'

export interface Upgrade{
    name: string
    price: number
    amount: number
    quantity: number
    visible: boolean
}

export interface UpgradesState {
  upgrades: Array<Upgrade>
  totalAmountPerSecond: number
}

const initialState: UpgradesState = {
    upgrades: [
        { 
            name: 'Upgrade#1',
            price: 10,
            amount: 1,
            quantity: 0,
            visible: true,
        },
        { 
            name: 'Upgrade#2',
            price: 100,
            amount: 10,
            quantity: 0,
            visible: false,
        },
        { 
            name: 'Upgrade#3',
            price: 500,
            amount: 50,
            quantity: 0,
            visible: false,
        },
        { 
            name: 'Upgrade#4',
            price: 2500,
            amount: 100,
            quantity: 0,
            visible: false,
        },
    ],
    totalAmountPerSecond: 0,
}

export const UpgradesSlice = createSlice({
    name: 'upgrades',
    initialState,
    reducers: {
        setVisible: (state: UpgradesState, action: PayloadAction<number>) => {
            state.upgrades[action.payload].visible = true
        },
        incrementUpgrade: (state: UpgradesState, action: PayloadAction<number>) => {
            state.upgrades[action.payload].quantity += 1
            state.upgrades[action.payload].price *= 2

            if(state.upgrades[action.payload + 1])
                state.upgrades[action.payload + 1].visible = true

            const totalAmountPerSecond = state.upgrades.reduce(
                (acc, upgrade) => {
                    const amount = upgrade.quantity * upgrade.amount
                    return acc + amount
                }, 0
            )

            state.totalAmountPerSecond = totalAmountPerSecond
        },
    },
})

export const { incrementUpgrade, setVisible } = UpgradesSlice.actions

export default UpgradesSlice.reducer