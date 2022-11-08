import { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { decrementByAmount } from '../../store/score'
import { incrementUpgrade } from '../../store/upgrades'
import Upgrade from '../upgrade/upgrade'

const UpgradeList: FC = () => {
    const dispatch = useDispatch()

    const { upgrades, totalAmountPerSecond } = useSelector((state: RootState) => state.upgrades)
    const { value } = useSelector((state: RootState) => state.score)

    const buyUpgrade = useCallback((index: number, value: number) => {
        const upgrade = upgrades[index]
        if(value < upgrade.price)
            return
        
        dispatch( decrementByAmount(upgrade.price) )
        dispatch( incrementUpgrade(index) )
    }, [upgrades])

    return (<div>
        {totalAmountPerSecond}
        {
            upgrades.map(
                (upgrade, index) => (
                    upgrade.visible?
                        <Upgrade
                            key={index}
                            onClick={buyUpgrade.bind(this, index, value)}
                            disabled={value < upgrade.price}
                            name={upgrade.name}
                            price={upgrade.price}
                            quantity={upgrade.quantity}
                            amount={upgrade.amount}
                        /> : null
                )
            )
        }
    </div>)
}

export default UpgradeList