import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../store/score'

interface ClickerProps{
    label: string | null
}

const Clicker: FC<ClickerProps> = ({ label }) => {
    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch( increment() )}>{ label }</button>
    )
}

export default Clicker