import { useDispatch } from 'react-redux'
import { increment } from '../../store/score'

interface ClickerProps{
    label: string | null
}

import { styled } from '@stitches/react'
import { BasicButton } from '../buttons/Basic'

const ClickerButton = styled(BasicButton, {
  height: '4rem',
})

export default function({ label }: ClickerProps) {
    const dispatch = useDispatch()

    return (
        <ClickerButton onClick={() => dispatch( increment() )}>
            {label}
        </ClickerButton>
    )
}