import { styled } from "@stitches/react"
import { ReactNode } from "react"

const Main = styled('main', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2rem',
  minWidth: '50vw',
  width: '100%',
})

interface MainProps {
    children: ReactNode
}

export default function ({ children }: MainProps) {
    return (
        <Main>
            { children }
        </Main>
    )
}