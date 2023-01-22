import { BasicButton } from '../buttons/Basic'

export default function() {
    const clearState = () => {
        localStorage.removeItem('gameState')
        location.reload()
    }

    return (
        <BasicButton onClick={clearState}>
            Clear Save
        </BasicButton>
    )
}