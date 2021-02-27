import styled from "styled-components";

const RootGrid = styled.div`
  display: grid;
`

export const MainGrid = styled(RootGrid)`
  grid-template-columns: 70vw 30vw;
`

export const LeftGrid = styled(RootGrid)`
  grid-template-rows: 60vh 40vh;
`
export const RightGrid = styled(RootGrid)`
  
`
