import { FC } from 'react'
import Score from './components/score/Score'
import Clicker from './components/clicker/Clicker'
import UpgradeList from './components/upgradeList/UpgradeList'
import GameLoop from './components/gameLoop'

const App: FC = () => {
    return (
        <div className="App">
            <Score/>
            <Clicker label="Click!"/>
            <UpgradeList/>
            <GameLoop/>
        </div>
    )
}

export default App
