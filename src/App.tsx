import Header from './components/header/Header'
import Main from './components/main/Main'
import Score from './components/score/Score'
import ClickerButton from './components/clickerButton/ClickerButton'
import UpgradeList from './components/upgradeList/UpgradeList'
import GameLoop from './components/GameLoop'

function App() {
    return (
        <>
            <Header />
            <Main>
                <ClickerButton label="Click!" />
                <Score />
            </Main>
            <UpgradeList />
            <GameLoop shouldSave={true} />
        </>
    )
}

export default App
