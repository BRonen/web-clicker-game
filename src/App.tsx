import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Score from './components/score/Score'
import Clicker from './components/clicker/Clicker'
import UpgradeList from './components/upgradeList/UpgradeList'
import GameLoop from './components/GameLoop'
import { hydrate as hydrateScore } from './store/score'
import { hydrate as hydrateUpgrades } from './store/upgrades'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        const state = JSON.parse(localStorage.getItem('gameState')!)
        console.log(state)
        dispatch(hydrateScore(state))
        dispatch(hydrateUpgrades(state))
    }, [])

    const clearState = () => {
        localStorage.removeItem('gameState')
        location.reload()
    }

    return (
        <div className="App">
            <button onClick={clearState}>Clear save</button>
            <main>
                <Score/>
                <Clicker label="Click!"/>
            </main>
            <UpgradeList/>
            <GameLoop/>
        </div>
    )
}

export default App
