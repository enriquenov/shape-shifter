import React from 'react'

const Cube = props => {
  const {rotation, position} = props

  return (
    <mesh rotation={rotation} position={position}>
      <boxGeometry width={5} height={5} depth={5} />
      <meshLambertMaterial color={0xffa07a} />
    </mesh>
  )
}

module.exports = Cube
