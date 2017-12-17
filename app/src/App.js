import React, { Component } from 'react'
import {Flex, Col, Row} from './components/grid'

import styled from 'styled-components'

const Wrapper = styled(Row)`
  height: 100vh;
  margin: 2em;
`

class App extends Component {
  render () {
    return (
      <Wrapper>
        <Col flex={5} style={{background: 'red'}}>
          <Flex flex={3} style={{background: 'green'}}>
            image
          </Flex>
          <Flex flex={8} style={{background: 'red'}}>
            menu
          </Flex>
        </Col>
        <Col flex={13} style={{background: 'blue'}} >
          <Flex flex={9} style={{background: 'gray'}} />
          <Flex flex={1} style={{background: 'blue'}} />

          Content
        </Col>
      </Wrapper>
    )
  }
}

export default App
