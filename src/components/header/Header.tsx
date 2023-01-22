import { styled } from "@stitches/react"
import ResetButton from "../resetButton/resetButton"

const Header = styled('header', {})

export default function () {
    return (
        <Header>
            <ResetButton />
        </Header>
    )
}
