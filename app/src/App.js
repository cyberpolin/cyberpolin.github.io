import React, { Component } from 'react'
import {Flex} from './components/flex'

class App extends Component {
  render () {
    return (
      <Flex row style={{height: '100vh'}}>
        <Flex column flex={5} style={{background: 'red'}}>
          <Flex flex={3} style={{background: 'green'}}>
            image
          </Flex>
          <Flex flex={8} style={{background: 'red'}}>
            menu
          </Flex>
        </Flex>
        <Flex column flex={13} style={{background: 'blue'}} >
          <Flex flex={9} style={{background: 'gray'}} />
          <Flex flex={1} style={{background: 'blue'}} />

          Content
        </Flex>
      </Flex>
    )
  }
}

export default App
