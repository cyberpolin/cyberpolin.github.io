import React from 'react'
import styled from 'styled-components'

const Photo = styled.div`
  background: url('/img/cyberpolin.png');
  background-size: cover;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  
  @media (max-width: 600px){
    height: 120px;
    width: 120px;
  }
`
const PhotoShadow = styled.div`
  background: linear-gradient(#8A8B8E, #CCD1D5);
  padding: 10px;
  border-radius: 50%;
  margin: auto;
`
const Wrapper = () => (
  <PhotoShadow>
    <Photo />
  </PhotoShadow>
)

export default Wrapper
