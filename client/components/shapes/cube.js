import React from 'react'

const Cube = props => {
  const {rotation, position} = props

  return (
    <mesh rotation={rotation} position={position}>
      <boxGeometry width={3} height={3} depth={3} />
      <meshLambertMaterial color={0xc0c0c0} />
    </mesh>
  )
}

module.exports = Cube
