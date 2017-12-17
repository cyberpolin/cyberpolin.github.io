import styled from 'styled-components'

const Flex = styled.div`
  display: ${({row}) => row && 'flex'};
  flex: ${({flex}) => flex || 1};
`

export {Flex}
