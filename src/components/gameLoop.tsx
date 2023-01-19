import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount } from '../store/score'
import { setVisible } from '../store/upgrades'
import { RootState } from '../store'

function App() {
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
        const incrementLoop = setInterval(
            () => {
                upgrades.forEach((upgrade, index) => {
                    if(value >= upgrade.price)
                        dispatch( setVisible(index) )
                })
            }, 1000
        )
    
        return () => clearInterval(incrementLoop)
    }, [value, upgrades])

    return (null)
}

export default App
