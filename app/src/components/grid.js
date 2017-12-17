import styled from 'styled-components'

const Flex = styled.div`
  display: ${({row, column}) => row || column ? 'flex' : null};
  flex: ${({flex}) => flex || 1};
  flex-direction: ${({column}) => column && 'column'}
`
const Row = styled.div`
  display: flex;
  flex: ${({flex}) => flex || 1};
`
const Col = styled.div`
  display: flex;
  flex: ${({flex}) => flex || 1};
  flex-direction: column;
`

export {Flex, Row, Col}
