import { Upgrade } from "../../store/upgrades"

interface UpgradeProps extends Upgrade{
    onClick?: () => void
    disabled?: boolean
}

function UpgradeCard({onClick, disabled, name, price, quantity, amount, visible}: UpgradeProps) {
    if(!visible)
        return null

    return (
        <button className="upgrade" disabled={disabled} onClick={onClick}>
            <p>{ name }: R${price},00</p>
            <p>you have { quantity } that gives { amount } per second</p>
        </button>
    )
}

export default UpgradeCard