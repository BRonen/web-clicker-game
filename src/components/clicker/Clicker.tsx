import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../store/score'

interface ClickerProps{
    label: string | null
}

function Clicker({ label }: ClickerProps) {
    const dispatch = useDispatch()

    return (
        <button className="clicker" onClick={() => dispatch( increment() )}>{ label }</button>
    )
}

export default Clicker