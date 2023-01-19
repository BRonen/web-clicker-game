interface UpgradeProps{
    onClick?: () => void
    disabled?: boolean
    name: string
    price: number
    quantity: number
    amount: number
}

function Upgrade({onClick, disabled, name, price, quantity, amount}: UpgradeProps) {
    return (
        <button disabled={disabled} onClick={onClick}>
            <p>{ name }: R${price},00</p>
            <p>you have { quantity } that gives { amount } per second</p>
        </button>
    )
}

export default Upgrade