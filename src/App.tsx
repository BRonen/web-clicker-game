import Score from './components/score/Score'
import Clicker from './components/clicker/Clicker'
import UpgradeList from './components/upgradeList/UpgradeList'
import GameLoop from './components/GameLoop'

function App() {
    return (
        <div className="App">
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
