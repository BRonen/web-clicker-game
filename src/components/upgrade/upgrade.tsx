import { FC } from 'react'

interface UpgradeProps{
    onClick?: () => void
    disabled?: boolean
    name: string
    price: number
    quantity: number
    amount: number
}

const Upgrade: FC<UpgradeProps> = ({
    onClick, disabled,
    name, price, quantity, amount
}) => (
    <button disabled={disabled} onClick={onClick}>
        <p>{ name }: R${price},00</p>
        <p>you have { quantity } that gives { amount } per second</p>
    </button>
)

export default Upgrade