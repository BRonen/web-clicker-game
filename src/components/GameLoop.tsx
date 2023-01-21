import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount } from '../store/score'
import { setVisible, Upgrade } from '../store/upgrades'
import { RootState } from '../store'

function GameLoop() {
    const dispatch = useDispatch()
    
    const { value } = useSelector((state: RootState) => state.score)
    const { upgrades, totalAmountPerSecond } = useSelector((state: RootState) => state.upgrades)

    useEffect(() => {
        const incrementLoop = setInterval(
            () => {
                dispatch( incrementByAmount(totalAmountPerSecond) )
            }, 1000
        )
    
        return () => clearInterval(incrementLoop)
    }, [totalAmountPerSecond])

    useEffect(() => {
        const updateUpgradesVisibility = (upgrade: Upgrade, index: number) => {
            if(value >= upgrade.price) dispatch( setVisible(index) )
        }
        upgrades.forEach(updateUpgradesVisibility)
    }, [value, upgrades])

    return (null)
}

export default GameLoop
