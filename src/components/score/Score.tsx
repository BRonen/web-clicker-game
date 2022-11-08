import { useEffect } from 'react'
import { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from '../../store/score'
import { setVisible } from '../../store/upgrades'

function App() {
    const dispatch = useDispatch()

    const { value } = useSelector((state: RootState) => state.score)
    const { upgrades, totalAmountPerSecond } = useSelector((state: RootState) => state.upgrades)

    useEffect(() => {
        const incrementLoop = setTimeout(
            () => {
                dispatch( incrementByAmount(totalAmountPerSecond) )
                upgrades.forEach((upgrade, index) => {
                    if(value >= upgrade.price)
                        dispatch( setVisible(index) )
                })
            }, 500
        )
    
        return () => clearInterval(incrementLoop)
    }, [value, upgrades, totalAmountPerSecond])

    return (
        <div>
            { value }
        </div>
    )
}

export default App
