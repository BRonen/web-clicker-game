import { styled } from "@stitches/react"
import { BasicButton } from "../buttons/Basic"
import { Upgrade } from "../../store/upgrades"
import { popup } from "./animation"

const UpgradeButton = styled(BasicButton, {
  animation: `${popup} 1s cubic-bezier(0.175, 0.185, 0.32, 1.275)`
})

interface UpgradeProps extends Upgrade{
    onClick?: () => void
    disabled?: boolean
}

function UpgradeCard({onClick, disabled, name, price, quantity, amount, visible}: UpgradeProps) {
    if(!visible)
        return null

    return (
        <UpgradeButton disabled={disabled} onClick={onClick}>
            <p>{ name }: R${price},00</p>
            <p>you have { quantity } that gives { amount } per second</p>
        </UpgradeButton>
    )
}

export default UpgradeCard