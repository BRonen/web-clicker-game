import { useSelector } from 'react-redux'
import { RootState } from '../../store'

function Score() {
    const { value } = useSelector((state: RootState) => state.score)
    const { totalAmountPerSecond } = useSelector((state: RootState) => state.upgrades)

    return (
        <>
            <h2>{ value }</h2>
            <h3>Current points per second: { totalAmountPerSecond }</h3>
        </>
    )
}

export default Score
