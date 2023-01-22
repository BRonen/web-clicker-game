import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@stitches/react'
import Upgrade from '../upgrade/UpgradeCard'
import { decrementByAmount } from '../../store/score'
import { incrementUpgrade } from '../../store/upgrades'
import { RootState } from '../../store'

const UpgradesWrapper = styled('div', {
    display: 'flex',
    gap: '1rem',
    overflow: 'scroll',
})

export default function () {
    const dispatch = useDispatch()

    const { upgrades } = useSelector((state: RootState) => state.upgrades)
    const { value } = useSelector((state: RootState) => state.score)

    const buyUpgrade = useCallback((index: number, value: number) => {
        const upgrade = upgrades[index]

        if(value < upgrade.price) return
        
        dispatch( decrementByAmount(upgrade.price) )
        dispatch( incrementUpgrade(index) )
    }, [upgrades])

    return (
        <UpgradesWrapper>
            {upgrades.map(
                (upgrade, index) => (
                    <Upgrade
                        key={upgrade.name}
                        onClick={() => buyUpgrade(index, value)}
                        disabled={value < upgrade.price}
                        {...upgrade}
                    />
                )
            )}
        </UpgradesWrapper>
    )
}