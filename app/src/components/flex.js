import styled from 'styled-components'

const Flex = styled.div`
  display: ${({row, column}) => row || column ? 'flex' : null};
  flex: ${({flex}) => flex || 1};
  flex-direction: ${({column}) => column && 'column'}
`

export {Flex}
