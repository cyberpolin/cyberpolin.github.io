import React, { Component } from 'react'
import {Flex, Col, Row} from './components/grid'
import Photo from './components/photo'

import styled from 'styled-components'

const ImageContainer = styled(Flex)`
    flex: 3;
    text-align: center;
    align-items: center;
    background: url(/img/profile-bg.jpg);
    background-size: cover;
    display: flex;
  @media (max-width: 600px){
    flex: 8;
  }
`
const Menu = styled(Flex)`
  flex: 8;
  @media (max-width: 600px){
    flex: 3;
  }
`

const Wrapper = styled(Row)`
  height: 100vh;
  margin: 2em;
`

class App extends Component {
  render () {
    return (
      <Wrapper>
        <Col flex={5}>
          <ImageContainer>
            <Photo />
          </ImageContainer>
          <Menu >
            <nav>
              <a href='#'>Profile</a>
              <a href='#'>Portfolio</a>
              <a href='#'>Hire</a>
            </nav>
          </Menu>
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
