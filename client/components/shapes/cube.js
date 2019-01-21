import React from 'react'

const Cube = props => {
  const {rotation, position} = props

  return (
    <mesh rotation={rotation} position={position}>
      <boxGeometry width={4} height={4} depth={4} />
      <meshLambertMaterial color={0xffa07a} />
    </mesh>
  )
}

module.exports = Cube
