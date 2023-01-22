import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hydrate as hydrateScore } from '../store/score'
import { hydrate as hydrateUpgrades } from '../store/upgrades'
import { incrementByAmount } from '../store/score'
import { setVisible, Upgrade } from '../store/upgrades'
import { RootState } from '../store'

interface GameLoopProps {
    shouldSave: boolean
}

function GameLoop({shouldSave}: GameLoopProps) {
    const dispatch = useDispatch()
    
    const { value } = useSelector((state: RootState) => state.score)
    const { upgrades, totalAmountPerSecond } = useSelector((state: RootState) => state.upgrades)

    const [hydrated, setHydrated] = useState(false)
    const [saving, setSaving] = useState(shouldSave)

    useEffect(() => {
        if(hydrated) return
        
        const localSave = localStorage.getItem('gameState')
        if(!localSave) {
            setHydrated(true)
            return
        }

        const state = JSON.parse(localSave)
        
        dispatch(hydrateScore(state))
        dispatch(hydrateUpgrades(state))
        setHydrated(true)
    }, [])

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

    useEffect(() => {
        if(hydrated && saving) {
            setSaving(false)
            setTimeout(() => {
                const state = JSON.stringify({
                    value,
                    upgrades,
                    totalAmountPerSecond,
                })
        
                console.log('saving progress...')
        
                localStorage.setItem('gameState', state)
                setSaving(true)
            }, 600)
        }
    }, [value, upgrades, totalAmountPerSecond, saving])

    return (null)
}

export default GameLoop
